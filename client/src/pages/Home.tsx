import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getLoginUrl } from "@/const";
import { Sparkles, Zap, Brain, TrendingUp, Palette, Share2, Crown, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: TrendingUp,
      title: "تحسين محركات البحث",
      description: "خدمة SEO متقدمة مع Google Analytics",
      link: "/seo",
      color: "text-cyan-neon",
    },
    {
      icon: Zap,
      title: "الحملات الإعلانية",
      description: "أدوات ذكاء اصطناعي متخصصة للإعلانات",
      link: "/advertising",
      color: "text-pink-neon",
    },
    {
      icon: Palette,
      title: "تصميم المحتوى",
      description: "أدوات تصميم احترافية ومتقدمة",
      link: "/content-design",
      color: "text-purple-neon",
    },
    {
      icon: Brain,
      title: "استراتيجيات التسويق",
      description: "خطط ذكية للوصول للعملاء",
      link: "/strategy",
      color: "text-cyan-neon",
    },
    {
      icon: Crown,
      title: "توليد اللوجو",
      description: "شعارات فريدة بالذكاء الاصطناعي",
      link: "/logo-generator",
      color: "text-pink-neon",
    },
    {
      icon: Share2,
      title: "إدارة السوشل ميديا",
      description: "ربط المتاجر وتوريد المنتجات",
      link: "/social-media",
      color: "text-purple-neon",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-midnight text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-midnight/80 backdrop-blur-md border-b border-cyan-neon/30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-pink-neon animate-pulse-neon" />
            <h1 className="text-2xl font-bold text-pink-neon">لمسة رموز</h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/seo" className="hover:text-cyan-neon transition">
              SEO
            </Link>
            <Link href="/advertising" className="hover:text-cyan-neon transition">
              الحملات
            </Link>
            <Link href="/strategy" className="hover:text-cyan-neon transition">
              الاستراتيجيات
            </Link>
            <Link href="/subscriptions" className="hover:text-cyan-neon transition">
              الاشتراكات
            </Link>
            <Link href="/hams" className="hover:text-cyan-neon transition">
              همس
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground">{user?.name}</span>
                <Button
                  onClick={() => logout()}
                  variant="outline"
                  size="sm"
                  className="border-pink-neon text-pink-neon hover:bg-pink-neon/10"
                >
                  تسجيل الخروج
                </Button>
              </>
            ) : (
              <Button
                onClick={() => (window.location.href = getLoginUrl())}
                className="bg-pink-neon text-dark-midnight hover:bg-pink-neon/80 neon-glow"
              >
                دخول
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-neon/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-neon/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container relative z-10 text-center">
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full border border-cyan-neon/50 bg-cyan-neon/5">
              <span className="text-cyan-neon text-sm font-mono">🚀 الذكاء الاصطناعي في التسويق</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-pulse-neon">
            لمسة رموز
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            منصة تسويق ذكية متكاملة لتجار منصة سلة، مدعومة بالذكاء الاصطناعي لتحقيق نتائج استثنائية
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/subscriptions">
              <Button className="bg-pink-neon text-dark-midnight hover:bg-pink-neon/80 neon-glow px-8 py-6 text-lg">
                ابدأ الآن - 14 يوم مجاني
              </Button>
            </Link>
            <Link href="/hams">
              <Button variant="outline" className="border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10 px-8 py-6 text-lg">
                تحدث مع همس
              </Button>
            </Link>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5">
              <div className="text-cyan-neon mb-2">✨</div>
              <p className="text-sm">تخصيص فوري حسب السلوك</p>
            </div>
            <div className="p-4 rounded-lg border border-pink-neon/30 bg-pink-neon/5">
              <div className="text-pink-neon mb-2">🤖</div>
              <p className="text-sm">مساعدة ذكية 24/7</p>
            </div>
            <div className="p-4 rounded-lg border border-purple-neon/30 bg-purple-neon/5">
              <div className="text-purple-neon mb-2">📊</div>
              <p className="text-sm">تحليلات متقدمة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-dark-midnight via-dark-midnight to-dark-midnight/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا المتقدمة</h2>
            <p className="text-muted-foreground text-lg">كل ما تحتاجه لنجاح متجرك على منصة سلة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link key={idx} href={service.link}>
                  <div className="group p-6 rounded-lg border border-cyan-neon/30 bg-card hover:border-pink-neon/50 transition-all duration-300 cursor-pointer hover:shadow-lg neon-border">
                    <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-pink-neon">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-cyan-neon text-sm group-hover:translate-x-2 transition-transform">
                      اكتشف المزيد
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 border-t border-cyan-neon/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ميزات الذكاء الاصطناعي</h2>
            <p className="text-muted-foreground text-lg">تقنيات متقدمة لتحقيق أقصى استفادة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg border border-pink-neon/30 bg-pink-neon/5">
              <h3 className="text-2xl font-bold text-pink-neon mb-4">التنبؤ الذكي</h3>
              <p className="text-muted-foreground mb-4">
                النظام يتوقع احتياجاتك قبل أن تطلبها، ويقترح الحلول المناسبة تلقائياً
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-neon">✓</span>
                  <span>تحليل سلوك العميل الفوري</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-neon">✓</span>
                  <span>اقتراحات مخصصة 100%</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5">
              <h3 className="text-2xl font-bold text-cyan-neon mb-4">المساعدة الذكية همس</h3>
              <p className="text-muted-foreground mb-4">
                مساعدة شخصية أنثوية تفهمك وتساعدك على إدارة متجرك باحترافية
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-pink-neon">✓</span>
                  <span>تدعم أكثر من 300 عميل</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-neon">✓</span>
                  <span>متاحة 24/7</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-purple-neon/30 bg-purple-neon/5">
              <h3 className="text-2xl font-bold text-purple-neon mb-4">التخصيص الفوري</h3>
              <p className="text-muted-foreground mb-4">
                كل عميل يحصل على تجربة فريدة تماماً مخصصة لاحتياجاته الخاصة
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-neon">✓</span>
                  <span>تحديث فوري حسب السلوك</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-neon">✓</span>
                  <span>محتوى مخصص لكل عميل</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-pink-neon/30 bg-pink-neon/5">
              <h3 className="text-2xl font-bold text-pink-neon mb-4">الشفافية الكاملة</h3>
              <p className="text-muted-foreground mb-4">
                لوحة تحكم شفافة توضح كيف يتخذ الذكاء الاصطناعي القرارات
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-neon">✓</span>
                  <span>رؤية كاملة للقرارات</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-neon">✓</span>
                  <span>ثقة عالية جداً</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-cyan-neon/20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">ابدأ رحلتك مع لمسة رموز</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            جميع الخدمات مجانية لمدة 14 يوم، بدون الحاجة لبطاقة ائتمان
          </p>
          <Link href="/subscriptions">
            <Button className="bg-pink-neon text-dark-midnight hover:bg-pink-neon/80 neon-glow px-10 py-6 text-lg">
              ابدأ الآن
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-neon/20 bg-dark-midnight/50 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-pink-neon font-bold mb-4">لمسة رموز</h3>
              <p className="text-muted-foreground text-sm">خدمات التسويق الذكي لتجار منصة سلة</p>
            </div>
            <div>
              <h4 className="text-cyan-neon font-bold mb-4">الخدمات</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/seo">SEO</Link></li>
                <li><Link href="/advertising">الحملات الإعلانية</Link></li>
                <li><Link href="/strategy">الاستراتيجيات</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-neon font-bold mb-4">الدعم</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/hams">همس</Link></li>
                <li><Link href="/support">التواصل</Link></li>
                <li><Link href="/subscriptions">الاشتراكات</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-neon font-bold mb-4">تواصل معنا</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📧 lmsah507@gmail.com</li>
                <li>📱 +966 50 8047159</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-neon/20 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 لمسة رموز. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
