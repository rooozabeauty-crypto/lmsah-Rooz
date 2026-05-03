import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getLoginUrl } from "@/const";
import { Menu, X, CheckCircle, TrendingUp, Zap, Palette, Brain, Crown, Share2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      id: "seo",
      title: "تحسين محركات البحث",
      description: "خدمة SEO متقدمة مع Google Analytics",
      link: "/seo",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663509519180/bKXxk3Gp8wxSSo5MuxHJaU/seo-service-illustration-eazs8yv6xZmkqxBvodzCTi.webp",
      tools: ["Google Analytics", "SEO Tools", "Keyword Research"],
    },
    {
      id: "advertising",
      title: "الحملات الإعلانية",
      description: "أدوات ذكاء اصطناعي متخصصة للإعلانات",
      link: "/advertising",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663509519180/bKXxk3Gp8wxSSo5MuxHJaU/advertising-campaigns-illustration-NCd7P2mz7ETBgmaLMdfpFU.webp",
      tools: ["ShortFast", "Bunu AI", "Vidio AI", "InVideo AI"],
    },
    {
      id: "content",
      title: "تصميم المحتوى",
      description: "أدوات تصميم احترافية ومتقدمة",
      link: "/content-design",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663509519180/bKXxk3Gp8wxSSo5MuxHJaU/content-design-illustration-6ugudepcff6TtcqLuBwWuS.webp",
      tools: ["Canva", "PicsArt", "Procreate", "Adobe Photoshop"],
    },
    {
      id: "strategy",
      title: "استراتيجيات التسويق",
      description: "خطط ذكية للوصول للعملاء",
      link: "/strategy",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663509519180/bKXxk3Gp8wxSSo5MuxHJaU/marketing-strategy-illustration-eazs8yv6xZmkqxBvodzCTi.webp",
      tools: ["تحليل السوق", "استراتيجيات مخصصة", "تقارير ذكية"],
    },
    {
      id: "logo",
      title: "توليد اللوجو",
      description: "شعارات فريدة بالذكاء الاصطناعي",
      link: "/logo-generator",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663509519180/bKXxk3Gp8wxSSo5MuxHJaU/cute-robot-hamsa-jrQJ3imn7ZNfeL2jpApW9r.webp",
      tools: ["AI Design", "Custom Styles", "Instant Download"],
    },
    {
      id: "social",
      title: "إدارة السوشل ميديا",
      description: "ربط المتاجر وتوريد المنتجات",
      link: "/social-media",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663509519180/bKXxk3Gp8wxSSo5MuxHJaU/cute-robot-hamsa-jrQJ3imn7ZNfeL2jpApW9r.webp",
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
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-soft border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">لمسة</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">لمسة رموز</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/seo" className="text-foreground hover:text-primary transition-smooth">
              الخدمات
            </Link>
            <Link href="/subscriptions" className="text-foreground hover:text-primary transition-smooth">
              المميزات
            </Link>
            <Link href="/support" className="text-foreground hover:text-primary transition-smooth">
              تواصل معنا
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              دخول
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
              ابدأ الآن
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-border p-4 space-y-3">
            <Link href="/seo" className="block text-foreground hover:text-primary transition-smooth py-2">
              الخدمات
            </Link>
            <Link href="/subscriptions" className="block text-foreground hover:text-primary transition-smooth py-2">
              المميزات
            </Link>
            <Link href="/support" className="block text-foreground hover:text-primary transition-smooth py-2">
              تواصل معنا
            </Link>
          </nav>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                🚀 الذكاء الاصطناعي في التسويق
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                منصة تسويق ذكية متكاملة
              </h1>

              <p className="text-lg text-muted-foreground">
                منصة تسويق ذكية متكاملة لتجار منصة سلة، مدعومة بالذكاء الاصطناعي لتحقيق نتائج استثنائية
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">تخصيص فوري حسب السلوك</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">مساعدة ذكية 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">تحليلات متقدمة</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/subscriptions">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg w-full sm:w-auto">
                    ابدأ الآن - 14 يوم مجاني
                  </Button>
                </Link>
                <Link href="/hams">
                  <Button variant="outline" className="px-8 py-6 text-lg border-2 w-full sm:w-auto">
                    تحدث مع همس
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663509519180/bKXxk3Gp8wxSSo5MuxHJaU/cute-robot-hamsa-jrQJ3imn7ZNfeL2jpApW9r.webp"
                alt="Hamsa Robot Assistant"
                className="w-full max-w-md h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              خدماتنا المتقدمة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختر الخدمة التي تناسب احتياجاتك وفعّلها الآن
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="card-hover bg-white p-6 rounded-lg border border-border"
              >
                <div className="mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => handleActivateService(service.id, service.title)}
                    className="flex-1 bg-primary text-white hover:bg-primary/90"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    فعّل الآن
                  </Button>
                  <Link href={service.link} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-blue-50"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      التفاصيل
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              المميزات الرئيسية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تمتع بمميزات متقدمة تساعدك على تحقيق أهدافك التسويقية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-base p-8 text-center border border-border">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-lg">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                تخصيص فوري حسب السلوك
              </h3>
              <p className="text-muted-foreground">
                تحليل ذكي لسلوك العملاء وتقديم توصيات مخصصة
              </p>
            </div>

            <div className="card-base p-8 text-center border border-border">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-lg">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                مساعدة ذكية 24/7
              </h3>
              <p className="text-muted-foreground">
                دعم فوري من مساعد همس الذكي في أي وقت
              </p>
            </div>

            <div className="card-base p-8 text-center border border-border">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                تحليلات متقدمة
              </h3>
              <p className="text-muted-foreground">
                تقارير شاملة وإحصائيات دقيقة لنمو عملك
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            هل أنت مستعد لتحويل متجرك؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            انضم إلى مئات التجار الذين حققوا نتائج استثنائية مع لمسة رموز
          </p>
          <Link href="/subscriptions">
            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg">
              اختر الباقة المناسبة الآن
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">لمسة</span>
                </div>
                <span className="font-bold text-lg">لمسة رموز</span>
              </div>
              <p className="text-gray-300">
                منصة تسويق ذكية متكاملة لتجار منصة سلة
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">الخدمات</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/seo" className="hover:text-primary transition-smooth">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link href="/advertising" className="hover:text-primary transition-smooth">
                    الحملات الإعلانية
                  </Link>
                </li>
                <li>
                  <Link href="/logo-generator" className="hover:text-primary transition-smooth">
                    توليد اللوجو
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">الموارد</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-primary transition-smooth">
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-smooth">
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-primary transition-smooth">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">التواصل</h4>
              <ul className="space-y-2 text-gray-300">
                <li>البريد: lmsah507@gmail.com</li>
                <li>الواتساب: 966508047159</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>© 2026 لمسة رموز. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
