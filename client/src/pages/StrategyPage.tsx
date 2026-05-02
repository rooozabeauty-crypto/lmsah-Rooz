import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Brain, Target, TrendingUp } from "lucide-react";

export default function StrategyPage() {
  const strategies = [
    {
      title: "تحليل السوق",
      description: "فهم عميق لسوقك والمنافسين",
      icon: Target,
    },
    {
      title: "استهداف العملاء",
      description: "تحديد وجذب العملاء المحتملين",
      icon: Brain,
    },
    {
      title: "تحسين التحويل",
      description: "زيادة نسبة تحويل الزوار إلى عملاء",
      icon: TrendingUp,
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
          <h1 className="text-5xl font-bold mb-6">استراتيجيات التسويق الذكية</h1>
          <p className="text-xl text-muted-foreground mb-12">
            خطط مخصصة للوصول إلى العملاء المحتملين وتحقيق أهدافك التسويقية
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {strategies.map((strategy, idx) => {
              const Icon = strategy.icon;
              return (
                <div key={idx} className="p-6 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5">
                  <Icon className="w-8 h-8 text-cyan-neon mb-4" />
                  <h3 className="text-xl font-bold text-pink-neon mb-2">{strategy.title}</h3>
                  <p className="text-muted-foreground">{strategy.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-card border border-pink-neon/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-pink-neon mb-6">كيف تعمل استراتيجياتنا</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-neon/20 flex items-center justify-center text-cyan-neon font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-pink-neon mb-2">تحليل شامل</h4>
                  <p className="text-muted-foreground">ندرس متجرك والسوق بعمق</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-neon/20 flex items-center justify-center text-cyan-neon font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-pink-neon mb-2">تطوير الخطة</h4>
                  <p className="text-muted-foreground">نبني استراتيجية مخصصة لك</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-neon/20 flex items-center justify-center text-cyan-neon font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-pink-neon mb-2">التنفيذ والمراقبة</h4>
                  <p className="text-muted-foreground">نطبق الخطة ونراقب النتائج</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-neon/20 flex items-center justify-center text-cyan-neon font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-pink-neon mb-2">التحسين المستمر</h4>
                  <p className="text-muted-foreground">نحسن الخطة بناءً على البيانات</p>
                </div>
              </div>
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
