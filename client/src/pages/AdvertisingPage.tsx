import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap, Video, Sparkles } from "lucide-react";

export default function AdvertisingPage() {
  const tools = [
    { name: "ShortFast", url: "https://shortfast.ai", icon: "⚡" },
    { name: "Bunu AI", url: "https://bunu.ai", icon: "🎬" },
    { name: "Vidio AI", url: "https://vidio.ai", icon: "🎥" },
    { name: "InVideo AI", url: "https://invideo.io", icon: "📹" },
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
          <h1 className="text-5xl font-bold mb-6">الحملات الإعلانية الذكية</h1>
          <p className="text-xl text-muted-foreground mb-12">
            أدوات متخصصة بالذكاء الاصطناعي لإنشاء حملات إعلانية فعالة وجذابة
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-lg border border-pink-neon/30 bg-pink-neon/5">
              <Zap className="w-8 h-8 text-pink-neon mb-4" />
              <h3 className="text-xl font-bold text-pink-neon mb-2">إنشاء سريع</h3>
              <p className="text-muted-foreground">أنشئ حملات احترافية في دقائق معدودة</p>
            </div>
            <div className="p-6 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5">
              <Video className="w-8 h-8 text-cyan-neon mb-4" />
              <h3 className="text-xl font-bold text-pink-neon mb-2">محتوى فيديو</h3>
              <p className="text-muted-foreground">فيديوهات احترافية بدون خبرة</p>
            </div>
          </div>

          <div className="bg-card border border-cyan-neon/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-pink-neon mb-8">أدوات الذكاء الاصطناعي</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tools.map((tool, idx) => (
                <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-cyan-neon text-dark-midnight hover:bg-cyan-neon/80 py-6 text-lg justify-start gap-3">
                    <span className="text-xl">{tool.icon}</span>
                    {tool.name}
                  </Button>
                </a>
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
