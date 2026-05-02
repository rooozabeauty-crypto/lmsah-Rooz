import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Zap, Search } from "lucide-react";

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-dark-midnight text-foreground">
      {/* Navigation */}
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
          <h1 className="text-5xl font-bold mb-6">تحسين محركات البحث (SEO)</h1>
          <p className="text-xl text-muted-foreground mb-12">
            خدمة متقدمة لتحسين ظهور متجرك في نتائج البحث مع أدوات تحليل قوية
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5">
              <TrendingUp className="w-8 h-8 text-cyan-neon mb-4" />
              <h3 className="text-xl font-bold text-pink-neon mb-2">تحسين الترتيب</h3>
              <p className="text-muted-foreground">رفع ترتيب متجرك في محركات البحث</p>
            </div>
            <div className="p-6 rounded-lg border border-pink-neon/30 bg-pink-neon/5">
              <BarChart3 className="w-8 h-8 text-pink-neon mb-4" />
              <h3 className="text-xl font-bold text-pink-neon mb-2">تحليل شامل</h3>
              <p className="text-muted-foreground">بيانات تفصيلية عن أداء متجرك</p>
            </div>
            <div className="p-6 rounded-lg border border-purple-neon/30 bg-purple-neon/5">
              <Zap className="w-8 h-8 text-purple-neon mb-4" />
              <h3 className="text-xl font-bold text-pink-neon mb-2">تحسين السرعة</h3>
              <p className="text-muted-foreground">تحسين سرعة تحميل الصفحات</p>
            </div>
          </div>

          <div className="bg-card border border-cyan-neon/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-pink-neon mb-6">الأدوات المتاحة</h2>
            <div className="space-y-4">
              <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-cyan-neon text-dark-midnight hover:bg-cyan-neon/80">
                  Google Analytics
                </Button>
              </a>
              <p className="text-muted-foreground text-center">تتبع شامل لأداء متجرك وسلوك الزوار</p>
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
