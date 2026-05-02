import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/_core/hooks/useAuth";

export default function StrategyPage() {
  const { isAuthenticated } = useAuth();
  const [isActivating, setIsActivating] = useState(false);

  const handleActivateStrategy = async () => {
    if (!isAuthenticated) {
      toast.error("يرجى تسجيل الدخول أولاً");
      return;
    }
    setIsActivating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("✅ تم تفعيل خدمة الاستراتيجيات بنجاح!");
    } catch (error) {
      toast.error("حدث خطأ أثناء التفعيل");
    } finally {
      setIsActivating(false);
    }
  };

  const strategies = [
    {
      title: "تحليل السوق",
      description: "فهم السوق والمنافسين",
      steps: [
        "دراسة احتياجات العملاء",
        "تحليل المنافسين",
        "تحديد الفرص",
        "تقييم التهديدات",
      ],
    },
    {
      title: "تحديد الجمهور المستهدف",
      description: "معرفة من هم عملاؤك الحقيقيون",
      steps: [
        "تحديد الديموغرافيات",
        "فهم السلوك الشرائي",
        "تحديد الاحتياجات",
        "إنشاء شخصيات العملاء",
      ],
    },
    {
      title: "وضع الأهداف",
      description: "تحديد أهداف واضحة وقابلة للقياس",
      steps: [
        "زيادة المبيعات بنسبة X%",
        "زيادة الوعي بالعلامة التجارية",
        "تحسين معدل التحويل",
        "زيادة العملاء المتكررين",
      ],
    },
    {
      title: "خطة التنفيذ",
      description: "تحديد الخطوات العملية",
      steps: [
        "تحديد القنوات المناسبة",
        "إنشاء محتوى جذاب",
        "جدولة الحملات",
        "قياس النتائج",
      ],
    },
    {
      title: "التسعير الذكي",
      description: "استراتيجية تسعير فعالة",
      steps: [
        "تحليل تكاليف الإنتاج",
        "دراسة أسعار المنافسين",
        "تحديد القيمة المضافة",
        "اختيار نموذج التسعير",
      ],
    },
    {
      title: "قياس النجاح",
      description: "تتبع الأداء والنتائج",
      steps: [
        "تحديد مؤشرات الأداء الرئيسية",
        "إعداد التقارير",
        "تحليل البيانات",
        "التحسين المستمر",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-dark-midnight text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-midnight/80 backdrop-blur-md border-b border-cyan-neon/30">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-pink-neon cursor-pointer hover:text-pink-neon/80">
              لمسة رموز
            </h1>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10">
              العودة للرئيسية
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-cyan-neon/10 to-dark-midnight border-b border-cyan-neon/20">
          <div className="container">
            <div className="flex items-center gap-4 mb-6">
              <Brain className="w-12 h-12 text-cyan-neon" />
              <h1 className="text-5xl font-bold text-cyan-neon">استراتيجيات التسويق الذكية</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              خطط تسويق مخصصة ومدعومة بالذكاء الاصطناعي للوصول إلى عملائك المحتملين
            </p>

            {/* Activation Button */}
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={handleActivateStrategy}
                disabled={isActivating}
                className="bg-cyan-neon text-dark-midnight hover:bg-cyan-neon/80 px-8 py-6 text-lg"
              >
                {isActivating ? "جاري التفعيل..." : "🧠 فعّل الاستراتيجيات الآن"}
              </Button>
              <Link href="/hams">
                <Button variant="outline" className="border-pink-neon text-pink-neon hover:bg-pink-neon/10 px-8 py-6 text-lg">
                  استشر همس
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-pink-neon">الاستراتيجيات المتاحة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strategies.map((strategy, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-cyan-neon/30 bg-dark-midnight/50 hover:border-pink-neon/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-3 text-pink-neon">{strategy.title}</h3>
                  <p className="text-muted-foreground mb-6">{strategy.description}</p>
                  <div className="space-y-3">
                    {strategy.steps.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-cyan-neon text-dark-midnight text-xs flex items-center justify-center font-bold flex-shrink-0">
                          {stepIdx + 1}
                        </div>
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-neon/10 to-pink-neon/10 border-t border-cyan-neon/20">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-purple-neon text-center">فوائد الاستراتيجيات الذكية</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-purple-neon/30 bg-purple-neon/5">
                <TrendingUp className="w-12 h-12 text-purple-neon mb-4" />
                <h3 className="text-xl font-bold mb-2">زيادة المبيعات</h3>
                <p className="text-muted-foreground">استراتيجيات مثبتة لزيادة الإيرادات</p>
              </div>
              <div className="p-6 rounded-lg border border-purple-neon/30 bg-purple-neon/5">
                <Brain className="w-12 h-12 text-purple-neon mb-4" />
                <h3 className="text-xl font-bold mb-2">قرارات ذكية</h3>
                <p className="text-muted-foreground">بيانات وتحليلات دقيقة لاتخاذ قرارات أفضل</p>
              </div>
              <div className="p-6 rounded-lg border border-purple-neon/30 bg-purple-neon/5">
                <TrendingUp className="w-12 h-12 text-purple-neon mb-4" />
                <h3 className="text-xl font-bold mb-2">نمو مستدام</h3>
                <p className="text-muted-foreground">خطط طويلة الأجل لنمو مستقر</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t border-cyan-neon/20">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">ابدأ استراتيجيتك الآن</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              احصل على خطة تسويق مخصصة مدعومة بالذكاء الاصطناعي
            </p>
            <Button
              onClick={handleActivateStrategy}
              disabled={isActivating}
              className="bg-cyan-neon text-dark-midnight hover:bg-cyan-neon/80 px-8 py-6 text-lg"
            >
              {isActivating ? "جاري التفعيل..." : "فعّل الخدمة الآن"}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
