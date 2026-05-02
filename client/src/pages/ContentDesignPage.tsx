import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Palette, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/_core/hooks/useAuth";

export default function ContentDesignPage() {
  const { isAuthenticated } = useAuth();
  const [isActivating, setIsActivating] = useState(false);

  const handleActivateDesign = async () => {
    if (!isAuthenticated) {
      toast.error("يرجى تسجيل الدخول أولاً");
      return;
    }
    setIsActivating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("✅ تم تفعيل خدمة تصميم المحتوى بنجاح!");
    } catch (error) {
      toast.error("حدث خطأ أثناء التفعيل");
    } finally {
      setIsActivating(false);
    }
  };

  const designTools = [
    {
      name: "Canva",
      description: "منصة تصميم سهلة وقوية",
      url: "https://www.canva.com",
      color: "text-blue-500",
    },
    {
      name: "PicsArt",
      description: "تطبيق تحرير صور احترافي",
      url: "https://www.picsart.com",
      color: "text-pink-neon",
    },
    {
      name: "Procreate",
      description: "تطبيق رسم احترافي للآيباد",
      url: "https://procreate.art",
      color: "text-purple-neon",
    },
    {
      name: "Adobe Photoshop",
      description: "برنامج تصميم احترافي متقدم",
      url: "https://www.adobe.com/products/photoshop",
      color: "text-cyan-neon",
    },
  ];

  const designTips = [
    {
      title: "اختيار الألوان المناسبة",
      description: "استخدم ألوان تتناسب مع هوية متجرك",
      tips: ["اختر 2-3 ألوان أساسية", "استخدم أدوات اختيار الألوان", "تأكد من التباين الكافي"],
    },
    {
      title: "التصميم المتجاوب",
      description: "تأكد من أن التصاميم تبدو جيدة على جميع الأجهزة",
      tips: ["اختبر على الهاتف والتابلت", "استخدم خطوط واضحة", "تجنب الازدحام"],
    },
    {
      title: "الطباعة الفعالة",
      description: "اختر خطوط تعكس شخصية متجرك",
      tips: ["استخدم خطين على الأكثر", "اختر خطوط سهلة القراءة", "تأكد من حجم الخط الكافي"],
    },
    {
      title: "استخدام الصور",
      description: "استخدم صور عالية الجودة وملائمة",
      tips: ["استخدم صور أصلية", "تجنب الصور المكررة", "حسّن جودة الصور"],
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
        <section className="py-16 bg-gradient-to-b from-purple-neon/10 to-dark-midnight border-b border-cyan-neon/20">
          <div className="container">
            <div className="flex items-center gap-4 mb-6">
              <Palette className="w-12 h-12 text-purple-neon" />
              <h1 className="text-5xl font-bold text-purple-neon">تصميم المحتوى والبوستات</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              أدوات تصميم احترافية لإنشاء محتوى بصري جذاب يعكس هوية متجرك
            </p>

            {/* Activation Button */}
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={handleActivateDesign}
                disabled={isActivating}
                className="bg-purple-neon text-dark-midnight hover:bg-purple-neon/80 px-8 py-6 text-lg"
              >
                {isActivating ? "جاري التفعيل..." : "🎨 فعّل التصميم الآن"}
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
            <h2 className="text-4xl font-bold mb-12 text-cyan-neon">أدوات التصميم المتاحة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designTools.map((tool) => (
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

        {/* Design Tips Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-pink-neon">نصائح التصميم</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-purple-neon/30 bg-purple-neon/5 hover:border-pink-neon/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-3 text-pink-neon">{tip.title}</h3>
                  <p className="text-muted-foreground mb-6">{tip.description}</p>
                  <div className="space-y-3">
                    {tip.tips.map((t, tipIdx) => (
                      <div key={tipIdx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-neon mt-2 flex-shrink-0"></div>
                        <p className="text-sm">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-neon/10 to-pink-neon/10 border-t border-cyan-neon/20">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">ابدأ تصميماتك الآن</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              استخدم أدوات التصميم الاحترافية لإنشاء محتوى بصري جذاب
            </p>
            <Button
              onClick={handleActivateDesign}
              disabled={isActivating}
              className="bg-purple-neon text-dark-midnight hover:bg-purple-neon/80 px-8 py-6 text-lg"
            >
              {isActivating ? "جاري التفعيل..." : "فعّل الخدمة الآن"}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
