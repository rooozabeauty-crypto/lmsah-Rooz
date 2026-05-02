import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { toast } from "sonner";

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const plans = [
    {
      id: "free",
      name: "تجربة مجانية",
      price: "0",
      period: "14 يوم",
      description: "جميع الخدمات مجاناً",
      features: [
        "الوصول الكامل لجميع الخدمات",
        "المساعدة الذكية همس",
        "توليد 5 شعارات",
        "تحليلات أساسية",
        "دعم عبر البريد الإلكتروني",
      ],
      color: "border-cyan-neon",
      buttonColor: "bg-cyan-neon",
    },
    {
      id: "basic",
      name: "الباقة الأساسية",
      price: "99",
      period: "شهري",
      description: "للمتاجر الناشئة",
      features: [
        "جميع ميزات التجربة المجانية",
        "توليد 50 شعار شهرياً",
        "تحليلات متقدمة",
        "حملات إعلانية محدودة",
        "دعم أولوي",
      ],
      color: "border-pink-neon",
      buttonColor: "bg-pink-neon",
      popular: true,
    },
    {
      id: "pro",
      name: "الباقة الاحترافية",
      price: "299",
      period: "شهري",
      description: "للمتاجر المتنامية",
      features: [
        "جميع ميزات الباقة الأساسية",
        "توليد 500 شعار شهرياً",
        "حملات إعلانية غير محدودة",
        "استراتيجيات تسويق مخصصة",
        "دعم فني 24/7",
      ],
      color: "border-purple-neon",
      buttonColor: "bg-purple-neon",
    },
    {
      id: "enterprise",
      name: "الباقة المؤسسية",
      price: "999",
      period: "شهري",
      description: "للمتاجر الكبرى",
      features: [
        "جميع ميزات الباقة الاحترافية",
        "شعارات غير محدودة",
        "مدير حساب مخصص",
        "تقارير مخصصة",
        "تدريب وورش عمل",
      ],
      color: "border-cyan-neon",
      buttonColor: "bg-cyan-neon",
    },
  ];

  const { user } = useAuth();
  const createSubscriptionMutation = trpc.subscriptions.create.useMutation();

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      toast.error("يرجى تسجيل الدخول أولاً");
      return;
    }
    try {
      await createSubscriptionMutation.mutateAsync({ planId });
      toast.success("تم اختيار الباقة بنجاح! سيتم تحويلك إلى صفحة الدفع");
    } catch (error) {
      toast.error("حدث خطأ أثناء اختيار الباقة");
    }
  };

  return (
    <div className="min-h-screen bg-dark-midnight text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-dark-midnight/80 backdrop-blur-md border-b border-cyan-neon/30">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-pink-neon cursor-pointer">لمسة رموز</h1>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10">
              العودة للرئيسية
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-20 container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">الاشتراكات والباقات</h1>
            <p className="text-xl text-muted-foreground mb-4">
              اختر الباقة المناسبة لمتجرك
            </p>
            <div className="inline-block px-4 py-2 rounded-full border border-cyan-neon/50 bg-cyan-neon/5">
              <span className="text-cyan-neon text-sm">🎉 14 يوم مجاني على جميع الباقات</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 rounded-lg border-2 ${plan.color} bg-card transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? "lg:scale-105 neon-glow" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-pink-neon text-dark-midnight text-sm font-bold rounded-full">
                    الأكثر شهرة
                  </div>
                )}

                <h3 className="text-2xl font-bold text-pink-neon mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-neon">{plan.price}</span>
                  <span className="text-muted-foreground"> ر.س / {plan.period}</span>
                </div>

                <Button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={createSubscriptionMutation.isPending}
                  className={`w-full ${plan.buttonColor} text-dark-midnight hover:opacity-80 py-6 mb-6 disabled:opacity-50`}
                >
                  {createSubscriptionMutation.isPending ? "جاري المعالجة..." : "اختر هذه الباقة"}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-neon flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-card border border-cyan-neon/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-pink-neon mb-6">العروض والخصومات</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-pink-neon/30 bg-pink-neon/5">
                <Zap className="w-8 h-8 text-pink-neon mb-4" />
                <h3 className="text-xl font-bold text-pink-neon mb-2">خصم الاشتراك السنوي</h3>
                <p className="text-muted-foreground mb-4">وفر 20% عند الاشتراك لمدة سنة</p>
                <p className="text-cyan-neon font-bold">توفير: 240 ر.س</p>
              </div>
              <div className="p-6 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5">
                <Zap className="w-8 h-8 text-cyan-neon mb-4" />
                <h3 className="text-xl font-bold text-pink-neon mb-2">خصم الإحالة</h3>
                <p className="text-muted-foreground mb-4">احصل على 15% خصم لكل صديق</p>
                <p className="text-cyan-neon font-bold">بدون حد أقصى</p>
              </div>
              <div className="p-6 rounded-lg border border-purple-neon/30 bg-purple-neon/5">
                <Zap className="w-8 h-8 text-purple-neon mb-4" />
                <h3 className="text-xl font-bold text-pink-neon mb-2">خصم الترقية</h3>
                <p className="text-muted-foreground mb-4">ترقّ من باقة لأخرى بخصم 10%</p>
                <p className="text-cyan-neon font-bold">على الفرق فقط</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-pink-neon/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-pink-neon mb-4">هل لديك أسئلة؟</h2>
            <p className="text-muted-foreground mb-6">
              تحدث مع فريق الدعم الخاص بنا أو اتصل بنا مباشرة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hams">
                <Button className="bg-cyan-neon text-dark-midnight hover:bg-cyan-neon/80 px-8 py-6">
                  تحدث مع همس
                </Button>
              </Link>
              <Link href="/support">
                <Button variant="outline" className="border-pink-neon text-pink-neon hover:bg-pink-neon/10 px-8 py-6">
                  اتصل بنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
