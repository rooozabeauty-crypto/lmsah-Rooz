import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getLoginUrl } from "@/const";
import { Sparkles, Zap, Brain, TrendingUp, Palette, Share2, Crown, MessageCircle, ArrowRight, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

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
      id: "seo",
      icon: TrendingUp,
      title: "تحسين محركات البحث",
      description: "خدمة SEO متقدمة مع Google Analytics",
      link: "/seo",
      color: "text-cyan-neon",
      buttonColor: "bg-cyan-neon",
      tools: ["Google Analytics", "SEO Tools", "Keyword Research"],
    },
    {
      id: "advertising",
      icon: Zap,
      title: "الحملات الإعلانية",
      description: "أدوات ذكاء اصطناعي متخصصة للإعلانات",
      link: "/advertising",
      color: "text-pink-neon",
      buttonColor: "bg-pink-neon",
      tools: ["ShortFast", "Bunu AI", "Vidio AI", "InVideo AI"],
    },
    {
      id: "content",
      icon: Palette,
      title: "تصميم المحتوى",
      description: "أدوات تصميم احترافية ومتقدمة",
      link: "/content-design",
      color: "text-purple-neon",
      buttonColor: "bg-purple-neon",
      tools: ["Canva", "PicsArt", "Procreate", "Adobe Photoshop"],
    },
    {
      id: "strategy",
      icon: Brain,
      title: "استراتيجيات التسويق",
      description: "خطط ذكية للوصول للعملاء",
      link: "/strategy",
      color: "text-cyan-neon",
      buttonColor: "bg-cyan-neon",
      tools: ["تحليل السوق", "استراتيجيات مخصصة", "تقارير ذكية"],
    },
    {
      id: "logo",
      icon: Crown,
      title: "توليد اللوجو",
      description: "شعارات فريدة بالذكاء الاصطناعي",
      link: "/logo-generator",
      color: "text-pink-neon",
      buttonColor: "bg-pink-neon",
      tools: ["AI Design", "Custom Styles", "Instant Download"],
    },
    {
      id: "social",
      icon: Share2,
      title: "إدارة السوشل ميديا",
      description: "ربط المتاجر وتوريد المنتجات",
      link: "/social-media",
      color: "text-purple-neon",
      buttonColor: "bg-purple-neon",
      tools: ["Facebook", "Instagram", "TikTok", "Twitter"],
    },
  ];

  const handleActivateService = (serviceId: string, serviceName: string) => {
    if (!isAuthenticated) {
      toast.error("يرجى تسجيل الدخول أولاً");
      window.location.href = getLoginUrl();
      return;
    }
    toast.success(`تم تفعيل خدمة ${serviceName} بنجاح!`);
  };

  return (
    <div className="min-h-screen bg-dark-midnight text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-midnight/80 backdrop-blur-md border-b border-cyan-neon/30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-pink-neon animate-pulse" />
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

          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-pulse">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-4 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5">
              <Check className="w-8 h-8 text-cyan-neon mx-auto mb-2" />
              <p className="text-sm">تخصيص فوري حسب السلوك</p>
            </div>
            <div className="p-4 rounded-lg border border-pink-neon/30 bg-pink-neon/5">
              <Check className="w-8 h-8 text-pink-neon mx-auto mb-2" />
              <p className="text-sm">مساعدة ذكية 24/7</p>
            </div>
            <div className="p-4 rounded-lg border border-purple-neon/30 bg-purple-neon/5">
              <Check className="w-8 h-8 text-purple-neon mx-auto mb-2" />
              <p className="text-sm">تحليلات متقدمة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-midnight border-t border-cyan-neon/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-pink-neon">خدماتنا المتقدمة</h2>
            <p className="text-xl text-muted-foreground">اختر الخدمة التي تناسب احتياجاتك وفعّلها الآن</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative p-6 rounded-lg border border-cyan-neon/30 bg-dark-midnight/50 hover:border-pink-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-neon/20"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-neon/5 to-pink-neon/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10">
                    <Icon className={`w-12 h-12 ${service.color} mb-4`} />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>

                    {/* Tools List */}
                    <div className="mb-6 space-y-2">
                      {service.tools.map((tool, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-neon"></div>
                          {tool}
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <Button
                        onClick={() => handleActivateService(service.id, service.title)}
                        className={`flex-1 ${service.buttonColor} text-dark-midnight hover:opacity-80`}
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        فعّل الآن
                      </Button>
                      <Link href={service.link} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10"
                        >
                          <ArrowRight className="w-4 h-4 mr-2" />
                          التفاصيل
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-neon/10 to-cyan-neon/10 border-t border-cyan-neon/20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">هل أنت مستعد لتحويل متجرك؟</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            انضم إلى مئات التجار الذين حققوا نتائج استثنائية مع لمسة رموز
          </p>
          <Link href="/subscriptions">
            <Button className="bg-pink-neon text-dark-midnight hover:bg-pink-neon/80 neon-glow px-8 py-6 text-lg">
              اختر الباقة المناسبة الآن
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-neon/20 bg-dark-midnight/50 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-pink-neon">عن لمسة رموز</h4>
              <p className="text-sm text-muted-foreground">منصة تسويق ذكية لتجار منصة سلة</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-neon">الخدمات</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/seo">SEO</Link></li>
                <li><Link href="/advertising">الحملات الإعلانية</Link></li>
                <li><Link href="/logo-generator">توليد اللوجو</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-purple-neon">التواصل</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>البريد: lmsah507@gmail.com</li>
                <li>الواتساب: 966508047159</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-neon">الدعم</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/support">اتصل بنا</Link></li>
                <li><Link href="/hams">تحدث مع همس</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-neon/20 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 لمسة رموز. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
