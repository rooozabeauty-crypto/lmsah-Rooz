import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/_core/hooks/useAuth";

export default function AdvertisingPage() {
  const { isAuthenticated } = useAuth();
  const [isActivating, setIsActivating] = useState(false);

  const handleActivateAdvertising = async () => {
    if (!isAuthenticated) {
      toast.error("يرجى تسجيل الدخول أولاً");
      return;
    }
    setIsActivating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("✅ تم تفعيل خدمة الحملات الإعلانية بنجاح!");
    } catch (error) {
      toast.error("حدث خطأ أثناء التفعيل");
    } finally {
      setIsActivating(false);
    }
  };

  const adTools = [
    {
      name: "ShortFast",
      description: "إنشاء محتوى إعلاني قصير وجذاب",
      url: "https://www.shortfast.ai",
      color: "text-pink-neon",
    },
    {
      name: "Bunu AI",
      description: "أداة ذكية لتوليد نصوص إعلانية",
      url: "https://www.bunu.ai",
      color: "text-cyan-neon",
    },
    {
      name: "Vidio AI",
      description: "إنشاء فيديوهات إعلانية احترافية",
      url: "https://www.vidio.ai",
      color: "text-purple-neon",
    },
    {
      name: "InVideo AI",
      description: "منصة متكاملة لإنشاء الفيديوهات",
      url: "https://www.invideo.io",
      color: "text-blue-500",
    },
  ];

  const campaignStrategies = [
    {
      title: "تحديد الجمهور المستهدف",
      description: "اختيار الفئات التي تهتم بمنتجاتك",
      tips: ["تحليل العملاء الحاليين", "دراسة السوق", "تحديد الديموغرافيات"],
    },
    {
      title: "إنشاء محتوى جذاب",
      description: "كتابة نصوص وإنشاء صور وفيديوهات تجذب الانتباه",
      tips: ["استخدام قصص مؤثرة", "عروض خاصة", "محتوى فريد"],
    },
    {
      title: "اختيار المنصات المناسبة",
      description: "استخدام المنصات التي يتواجد فيها جمهورك",
      tips: ["Facebook و Instagram", "TikTok و YouTube", "Google Ads"],
    },
    {
      title: "تحسين الأداء",
      description: "مراقبة النتائج وتحسين الحملات",
      tips: ["تتبع المقاييس", "اختبار A/B", "تحسين الميزانية"],
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
        <section className="py-16 bg-gradient-to-b from-pink-neon/10 to-dark-midnight border-b border-cyan-neon/20">
          <div className="container">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-12 h-12 text-pink-neon" />
              <h1 className="text-5xl font-bold text-pink-neon">الحملات الإعلانية الذكية</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              أدوات ذكاء اصطناعي متخصصة لإنشاء حملات إعلانية احترافية وفعالة تزيد من مبيعاتك
            </p>

            {/* Activation Button */}
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={handleActivateAdvertising}
                disabled={isActivating}
                className="bg-pink-neon text-dark-midnight hover:bg-pink-neon/80 px-8 py-6 text-lg"
              >
                {isActivating ? "جاري التفعيل..." : "🚀 فعّل الحملات الآن"}
              </Button>
              <Link href="/hams">
                <Button variant="outline" className="border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10 px-8 py-6 text-lg">
                  استشر همس
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 border-b border-cyan-neon/20">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-cyan-neon">أدوات الإعلان المتقدمة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {adTools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-6 rounded-lg border border-cyan-neon/30 bg-dark-midnight/50 hover:border-pink-neon/50 transition-all"
                >
                  <h3 className={`text-2xl font-bold mb-2 ${tool.color}`}>{tool.name}</h3>
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
              ))}
            </div>
          </div>
        </section>

        {/* Strategies Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-purple-neon">استراتيجيات الحملات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {campaignStrategies.map((strategy, idx) => (
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
        <section className="py-16 bg-gradient-to-r from-pink-neon/10 to-cyan-neon/10 border-t border-cyan-neon/20">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">ابدأ حملتك الإعلانية الآن</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              استخدم أدوات الذكاء الاصطناعي لإنشاء حملات احترافية وفعالة
            </p>
            <Button
              onClick={handleActivateAdvertising}
              disabled={isActivating}
              className="bg-pink-neon text-dark-midnight hover:bg-pink-neon/80 px-8 py-6 text-lg"
            >
              {isActivating ? "جاري التفعيل..." : "فعّل الخدمة الآن"}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
