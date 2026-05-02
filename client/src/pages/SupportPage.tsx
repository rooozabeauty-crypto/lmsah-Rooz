import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function SupportPage() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const sendMessageMutation = trpc.support.sendMessage.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      toast.error("يرجى ملء جميع الحقول");
      return;
    }
    try {
      await sendMessageMutation.mutateAsync({
        email,
        subject: "رسالة من العميل",
        message,
      });
      toast.success("تم إرسال رسالتك! سنرد عليك قريباً");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("حدث خطأ أثناء إرسال الرسالة");
    }
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
          <h1 className="text-5xl font-bold mb-6">الدعم والتواصل</h1>
          <p className="text-xl text-muted-foreground mb-12">
            نحن هنا لمساعدتك في أي وقت
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-lg border border-cyan-neon/30 bg-cyan-neon/5 text-center">
              <Mail className="w-12 h-12 text-cyan-neon mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pink-neon mb-2">البريد الإلكتروني</h3>
              <a href="mailto:lmsah507@gmail.com" className="text-cyan-neon hover:text-cyan-neon/80">
                lmsah507@gmail.com
              </a>
            </div>

            <div className="p-8 rounded-lg border border-pink-neon/30 bg-pink-neon/5 text-center">
              <Phone className="w-12 h-12 text-pink-neon mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pink-neon mb-2">الواتساب</h3>
              <a href="https://wa.me/966508047159" target="_blank" rel="noopener noreferrer" className="text-cyan-neon hover:text-cyan-neon/80">
                +966 50 8047159
              </a>
            </div>

            <div className="p-8 rounded-lg border border-purple-neon/30 bg-purple-neon/5 text-center">
              <MessageCircle className="w-12 h-12 text-purple-neon mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pink-neon mb-2">همس</h3>
              <Link href="/hams">
                <Button className="bg-purple-neon text-dark-midnight hover:bg-purple-neon/80 w-full mt-2">
                  تحدث الآن
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-card border border-cyan-neon/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-pink-neon mb-8">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-cyan-neon mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني"
                  className="w-full px-4 py-3 rounded-lg bg-dark-midnight border border-cyan-neon/30 text-foreground placeholder-muted-foreground focus:outline-none focus:border-pink-neon"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cyan-neon mb-2">
                  الرسالة
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full px-4 py-3 rounded-lg bg-dark-midnight border border-cyan-neon/30 text-foreground placeholder-muted-foreground focus:outline-none focus:border-pink-neon"
                  rows={6}
                />
              </div>

              <Button
                type="submit"
                disabled={sendMessageMutation.isPending}
                className="w-full bg-pink-neon text-dark-midnight hover:bg-pink-neon/80 neon-glow py-6 text-lg disabled:opacity-50"
              >
                {sendMessageMutation.isPending ? "جاري الإرسال..." : "إرسال الرسالة"}
              </Button>
            </form>
          </div>

          <div className="bg-card border border-pink-neon/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-pink-neon mb-6">الأسئلة الشائعة</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-cyan-neon mb-2">كم مدة التجربة المجانية؟</h3>
                <p className="text-muted-foreground">
                  التجربة المجانية تستمر لمدة 14 يوم كاملة، بدون الحاجة لبطاقة ائتمان
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-neon mb-2">هل يمكنني إلغاء الاشتراك في أي وقت؟</h3>
                <p className="text-muted-foreground">
                  نعم، يمكنك إلغاء الاشتراك في أي وقت بدون رسوم إضافية
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-neon mb-2">هل تدعمون الدفع بطرق مختلفة؟</h3>
                <p className="text-muted-foreground">
                  نعم، ندعم بطاقات الائتمان والتحويل البنكي والمحافظ الرقمية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
