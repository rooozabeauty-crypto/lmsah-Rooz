import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Share2, Package, Zap } from "lucide-react";

export default function SocialMediaPage() {
  const integrations = [
    {
      name: "ربط المتاجر",
      description: "ربط متاجرك الإلكترونية المختلفة",
      icon: Package,
    },
    {
      name: "توريد المنتجات",
      description: "استيراد منتجات من المخازن الإلكترونية",
      icon: Zap,
    },
    {
      name: "إدارة موحدة",
      description: "إدارة جميع حساباتك من مكان واحد",
      icon: Share2,
    },
  ];

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">إدارة السوشل ميديا</h1>
          <p className="text-xl text-muted-foreground mb-12">
            ربط متاجرك وإدارة المنتجات من مكان واحد
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {integrations.map((integration, idx) => {
              const Icon = integration.icon;
              return (
                <div key={idx} className="p-6 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5">
                  <Icon className="w-8 h-8 text-cyan-neon mb-4" />
                  <h3 className="text-xl font-bold text-pink-neon mb-2">{integration.name}</h3>
                  <p className="text-muted-foreground">{integration.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-card border border-pink-neon/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-pink-neon mb-6">المنصات المدعومة</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Instagram", "Facebook", "TikTok", "Twitter", "LinkedIn", "Pinterest"].map((platform, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5 text-center">
                  <p className="font-semibold text-pink-neon">{platform}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-cyan-neon/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-pink-neon mb-6">المخازن الإلكترونية</h2>
            <p className="text-muted-foreground mb-6">
              استيراد منتجات من المخازن الموثوقة
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["علي بابا", "أمازون", "eBay", "Alibaba"].map((store, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-pink-neon/30 bg-pink-neon/5">
                  <p className="font-semibold text-pink-neon">{store}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/subscriptions">
            <Button className="w-full bg-pink-neon text-dark-midnight hover:bg-pink-neon/80 neon-glow py-6 text-lg">
              اشترك الآن
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
