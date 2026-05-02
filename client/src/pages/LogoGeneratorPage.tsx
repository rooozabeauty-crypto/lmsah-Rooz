import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles } from "lucide-react";
import { useState } from "react";

export default function LogoGeneratorPage() {
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!description.trim()) {
      alert("يرجى إدخال وصف للشعار");
      return;
    }
    setIsGenerating(true);
    // محاكاة عملية التوليد
    setTimeout(() => {
      setIsGenerating(false);
      alert("تم توليد الشعار! سيتم حفظه في حسابك");
    }, 2000);
  };

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
          <h1 className="text-5xl font-bold mb-6">توليد الشعار بالذكاء الاصطناعي</h1>
          <p className="text-xl text-muted-foreground mb-12">
            أنشئ شعاراً فريداً ومميزاً لمتجرك بوصف بسيط
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-lg border border-pink-neon/30 bg-pink-neon/5">
              <Crown className="w-12 h-12 text-pink-neon mb-4" />
              <h3 className="text-2xl font-bold text-pink-neon mb-4">شعار فريد</h3>
              <p className="text-muted-foreground mb-6">
                كل شعار يتم توليده بناءً على وصفك الخاص، مما يضمن تفرداً كاملاً
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-neon">✓</span>
                  <span>توليد فوري</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-neon">✓</span>
                  <span>تعديل سهل</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-neon">✓</span>
                  <span>تنزيل بجودة عالية</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5">
              <Sparkles className="w-12 h-12 text-cyan-neon mb-4" />
              <h3 className="text-2xl font-bold text-pink-neon mb-4">كيفية الاستخدام</h3>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-cyan-neon font-bold">1.</span>
                  <span>اكتب وصفاً لشعارك</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-neon font-bold">2.</span>
                  <span>اختر الأسلوب المفضل</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-neon font-bold">3.</span>
                  <span>اضغط على "توليد"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-neon font-bold">4.</span>
                  <span>احفظ الشعار</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-card border border-cyan-neon/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-pink-neon mb-8">توليد الشعار</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-cyan-neon mb-2">
                  وصف الشعار
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="مثال: شعار حديث لمتجر ملابس نسائية بألوان زاهية..."
                  className="w-full px-4 py-3 rounded-lg bg-dark-midnight border border-cyan-neon/30 text-foreground placeholder-muted-foreground focus:outline-none focus:border-pink-neon"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyan-neon mb-2">
                  الأسلوب
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-dark-midnight border border-cyan-neon/30 text-foreground focus:outline-none focus:border-pink-neon">
                  <option>حديث</option>
                  <option>كلاسيكي</option>
                  <option>فني</option>
                  <option>رسومي</option>
                </select>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-pink-neon text-dark-midnight hover:bg-pink-neon/80 neon-glow py-6 text-lg"
              >
                {isGenerating ? "جاري التوليد..." : "توليد الشعار"}
              </Button>
            </div>
          </div>

          <Link href="/subscriptions">
            <Button className="w-full bg-cyan-neon text-dark-midnight hover:bg-cyan-neon/80 py-6 text-lg">
              اشترك الآن للحصول على المزيد من الشعارات
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
