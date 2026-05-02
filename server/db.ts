import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, subscriptions, supportMessages, generatedLogos, hamsChatHistory, userPreferences, InsertSubscription, InsertSupportMessage, InsertGeneratedLogo, InsertHamsChatHistory, InsertUserPreferences } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Subscription queries
export async function createSubscription(data: InsertSubscription) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(subscriptions).values(data);
}

export async function getUserSubscription(userId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(subscriptions).where(eq(subscriptions.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Support message queries
export async function createSupportMessage(data: InsertSupportMessage) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(supportMessages).values(data);
}

export async function getSupportMessages(userId?: number) {
  const db = await getDb();
  if (!db) return [];
  if (userId) {
    return db.select().from(supportMessages).where(eq(supportMessages.userId, userId));
  }
  return db.select().from(supportMessages);
}

// Generated logo queries
export async function createGeneratedLogo(data: InsertGeneratedLogo) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(generatedLogos).values(data);
}

export async function getUserLogos(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(generatedLogos).where(eq(generatedLogos.userId, userId));
}

// Hams chat history queries
export async function saveChatMessage(data: InsertHamsChatHistory) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(hamsChatHistory).values(data);
}

export async function getUserChatHistory(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(hamsChatHistory).where(eq(hamsChatHistory.userId, userId));
}

// User preferences queries
export async function createOrUpdateUserPreferences(data: InsertUserPreferences) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const existing = await db.select().from(userPreferences).where(eq(userPreferences.userId, data.userId)).limit(1);
  if (existing.length > 0) {
    return db.update(userPreferences).set(data).where(eq(userPreferences.userId, data.userId));
  }
  return db.insert(userPreferences).values(data);
}

export async function getUserPreferences(userId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(userPreferences).where(eq(userPreferences.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}
