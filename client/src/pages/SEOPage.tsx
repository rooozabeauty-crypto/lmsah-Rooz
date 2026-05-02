import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Zap, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/_core/hooks/useAuth";

export default function SEOPage() {
  const { user, isAuthenticated } = useAuth();
  const [isActivating, setIsActivating] = useState(false);

  const handleActivateSEO = async () => {
    if (!isAuthenticated) {
      toast.error("يرجى تسجيل الدخول أولاً");
      return;
    }
    setIsActivating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("✅ تم تفعيل خدمة SEO بنجاح!");
    } catch (error) {
      toast.error("حدث خطأ أثناء التفعيل");
    } finally {
      setIsActivating(false);
    }
  };

  const seoTools = [
    {
      name: "Google Analytics",
      description: "تحليل شامل لأداء موقعك",
      icon: BarChart3,
      url: "https://analytics.google.com",
      color: "text-blue-500",
    },
    {
      name: "Google Search Console",
      description: "مراقبة ظهورك في نتائج البحث",
      icon: TrendingUp,
      url: "https://search.google.com/search-console",
      color: "text-cyan-neon",
    },
    {
      name: "SEO Tools",
      description: "أدوات متقدمة لتحسين الترتيب",
      icon: Zap,
      url: "https://www.semrush.com",
      color: "text-pink-neon",
    },
  ];

  const seoStrategies = [
    {
      title: "البحث عن الكلمات المفتاحية",
      description: "تحديد أفضل الكلمات المفتاحية لمتجرك",
      tips: ["استخدام Google Keyword Planner", "تحليل المنافسين", "اختيار كلمات عالية القيمة"],
    },
    {
      title: "تحسين المحتوى",
      description: "كتابة محتوى محسّن لمحركات البحث",
      tips: ["استخدام الكلمات المفتاحية بشكل طبيعي", "كتابة عناوين جذابة", "إضافة وصف ميتا"],
    },
    {
      title: "بناء الروابط",
      description: "زيادة سلطة موقعك من خلال الروابط الخارجية",
      tips: ["الحصول على روابط من مواقع موثوقة", "نشر محتوى قيّم", "التعاون مع المدونين"],
    },
    {
      title: "تحسين السرعة",
      description: "تسريع موقعك لتحسين الترتيب",
      tips: ["ضغط الصور", "تقليل حجم ملفات CSS و JavaScript", "استخدام CDN"],
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
              <TrendingUp className="w-12 h-12 text-cyan-neon" />
              <h1 className="text-5xl font-bold text-cyan-neon">تحسين محركات البحث (SEO)</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              خدمة SEO متقدمة مع Google Analytics لتحسين ترتيب متجرك في نتائج البحث وزيادة المبيعات
            </p>

            {/* Activation Button */}
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={handleActivateSEO}
                disabled={isActivating}
                className="bg-cyan-neon text-dark-midnight hover:bg-cyan-neon/80 px-8 py-6 text-lg"
              >
                {isActivating ? "جاري التفعيل..." : "🚀 فعّل خدمة SEO الآن"}
              </Button>
              <Link href="/hams">
                <Button variant="outline" className="border-pink-neon text-pink-neon hover:bg-pink-neon/10 px-8 py-6 text-lg">
                  استشر همس
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 border-b border-cyan-neon/20">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-pink-neon">الأدوات المتاحة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seoTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className="p-6 rounded-lg border border-cyan-neon/30 bg-dark-midnight/50 hover:border-pink-neon/50 transition-all"
                  >
                    <Icon className={`w-12 h-12 ${tool.color} mb-4`} />
                    <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                    <p className="text-muted-foreground mb-6">{tool.description}</p>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-neon hover:text-pink-neon transition"
                    >
                      زيارة الأداة
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-purple-neon">استراتيجيات SEO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoStrategies.map((strategy, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-purple-neon/30 bg-purple-neon/5 hover:border-pink-neon/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-3 text-pink-neon">{strategy.title}</h3>
                  <p className="text-muted-foreground mb-6">{strategy.description}</p>
                  <div className="space-y-3">
                    {strategy.tips.map((tip, tipIdx) => (
                      <div key={tipIdx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-neon mt-2 flex-shrink-0"></div>
                        <p className="text-sm">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-neon/10 to-pink-neon/10 border-t border-cyan-neon/20">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">هل أنت مستعد لتحسين ترتيبك؟</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              ابدأ الآن واحصل على 14 يوم مجاني لاستخدام جميع أدوات SEO
            </p>
            <Button
              onClick={handleActivateSEO}
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
