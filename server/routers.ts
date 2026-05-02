import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Subscriptions router
  subscriptions: router({
    create: protectedProcedure
      .input(z.object({
        planId: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        const subscription = await db.createSubscription({
          userId: ctx.user.id,
          planId: input.planId,
          status: "active",
        });
        return { success: true, subscription };
      }),

    getActive: protectedProcedure.query(async ({ ctx }) => {
      return db.getUserSubscription(ctx.user.id);
    }),
  }),

  // Support messages router
  support: router({
    sendMessage: publicProcedure
      .input(z.object({
        email: z.string().email(),
        subject: z.string(),
        message: z.string(),
      }))
      .mutation(async ({ input }) => {
        const message = await db.createSupportMessage({
          email: input.email,
          subject: input.subject,
          message: input.message,
          status: "new",
        });
        return { success: true, message };
      }),

    getMessages: protectedProcedure.query(async ({ ctx }) => {
      return db.getSupportMessages(ctx.user.id);
    }),
  }),

  // Hams chat router
  hams: router({
    saveMessage: protectedProcedure
      .input(z.object({
        userMessage: z.string(),
        hamsResponse: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        const message = await db.saveChatMessage({
          userId: ctx.user.id,
          userMessage: input.userMessage,
          hamsResponse: input.hamsResponse,
        });
        return { success: true, message };
      }),

    getHistory: protectedProcedure.query(async ({ ctx }) => {
      return db.getUserChatHistory(ctx.user.id);
    }),
  }),

  // Logo generator router
  logos: router({
    generate: protectedProcedure
      .input(z.object({
        description: z.string(),
        style: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        const logo = await db.createGeneratedLogo({
          userId: ctx.user.id,
          description: input.description,
          style: input.style,
          imageUrl: "",
          imageKey: "",
          status: "generating",
        });
        return { success: true, logo };
      }),

    getMyLogos: protectedProcedure.query(async ({ ctx }) => {
      return db.getUserLogos(ctx.user.id);
    }),
  }),

  // User preferences router
  preferences: router({
    update: protectedProcedure
      .input(z.object({
        businessType: z.string().optional(),
        targetAudience: z.string().optional(),
        preferredLanguage: z.string().default("ar"),
      }))
      .mutation(async ({ ctx, input }) => {
        const preferences = await db.createOrUpdateUserPreferences({
          userId: ctx.user.id,
          businessType: input.businessType,
          targetAudience: input.targetAudience,
          preferredLanguage: input.preferredLanguage,
        });
        return { success: true, preferences };
      }),

    get: protectedProcedure.query(async ({ ctx }) => {
      return db.getUserPreferences(ctx.user.id);
    }),
  }),

  // Campaigns router
  campaigns: router({
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        description: z.string().optional(),
        platform: z.string(),
        budget: z.number(),
      }))
      .mutation(async ({ ctx, input }) => {
        const campaign = await db.createCampaign({
          userId: ctx.user.id,
          title: input.title,
          description: input.description,
          platform: input.platform,
          budget: input.budget,
          status: "draft",
        });
        return { success: true, campaign };
      }),

    getAll: protectedProcedure.query(async ({ ctx }) => {
      return db.getUserCampaigns(ctx.user.id);
    }),

    update: protectedProcedure
      .input(z.object({
        campaignId: z.number(),
        status: z.enum(["draft", "active", "paused", "completed", "failed"]).optional(),
        title: z.string().optional(),
        description: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const campaign = await db.updateCampaign(input.campaignId, {
          status: input.status,
          title: input.title,
          description: input.description,
        });
        return { success: true, campaign };
      }),
  }),
});

export type AppRouter = typeof appRouter;
