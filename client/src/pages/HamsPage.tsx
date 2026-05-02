import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, Heart } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

interface Message {
  id: string;
  text: string;
  sender: "user" | "hams";
  timestamp: Date;
}

export default function HamsPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "مرحباً! أنا همس، مساعدتك الذكية الشخصية. كيف يمكنني مساعدتك اليوم؟",
      sender: "hams",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const saveMessageMutation = trpc.hams.saveMessage.useMutation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || !user) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // محاكاة رد من همس
    setTimeout(async () => {
      const hamsResponses = [
        "رائع! أنا هنا لمساعدتك. هل تريد نصائح حول تحسين متجرك؟",
        "أفهم احتياجاتك. دعني أقترح عليك بعض الاستراتيجيات المناسبة.",
        "بناءً على سلوكك، أعتقد أنك قد تستفيد من حملة إعلانية موجهة.",
        "هل تريد أن أساعدك في توليد محتوى جديد لمتجرك؟",
        "يمكنني مساعدتك في تحليل أداء متجرك وتقديم توصيات.",
      ];
      const randomResponse = hamsResponses[Math.floor(Math.random() * hamsResponses.length)];

      const hamsMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "hams",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, hamsMessage]);
      setIsLoading(false);

      // حفظ الرسالة في قاعدة البيانات
      try {
        await saveMessageMutation.mutateAsync({
          userMessage: input,
          hamsResponse: randomResponse,
        });
      } catch (error) {
        console.error("Failed to save message", error);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-dark-midnight text-foreground flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-midnight/80 backdrop-blur-md border-b border-cyan-neon/30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-pink-neon animate-pulse" />
            <h1 className="text-2xl font-bold text-pink-neon">همس</h1>
          </div>
          <Link href="/">
            <Button variant="outline" className="border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10">
              العودة للرئيسية
            </Button>
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex flex-col pt-20">
        {/* Chat Container */}
        <div className="flex-1 overflow-y-auto container max-w-4xl mx-auto py-8 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-6 py-4 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-pink-neon/20 border border-pink-neon/50 text-foreground"
                    : "bg-cyan-neon/20 border border-cyan-neon/50 text-foreground"
                }`}
              >
                {msg.sender === "hams" && (
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-cyan-neon" />
                    <span className="text-sm font-semibold text-cyan-neon">همس</span>
                  </div>
                )}
                <p className="text-sm md:text-base">{msg.text}</p>
                <span className="text-xs text-muted-foreground mt-2 block">
                  {msg.timestamp.toLocaleTimeString("ar-SA", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-cyan-neon/20 border border-cyan-neon/50 px-6 py-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-neon rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-cyan-neon rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-cyan-neon rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-cyan-neon/20 bg-dark-midnight/50 backdrop-blur-md py-6">
          <div className="container max-w-4xl mx-auto">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="اكتب رسالتك هنا..."
                className="flex-1 px-4 py-3 rounded-lg bg-dark-midnight border border-cyan-neon/30 text-foreground placeholder-muted-foreground focus:outline-none focus:border-pink-neon"
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim() || !user}
                className="bg-pink-neon text-dark-midnight hover:bg-pink-neon/80 px-6"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                onClick={() => setInput("كيف أحسن أداء متجري؟")}
                variant="outline"
                size="sm"
                className="border-cyan-neon text-cyan-neon hover:bg-cyan-neon/10"
              >
                تحسين الأداء
              </Button>
              <Button
                onClick={() => setInput("ساعدني في إنشاء حملة إعلانية")}
                variant="outline"
                size="sm"
                className="border-pink-neon text-pink-neon hover:bg-pink-neon/10"
              >
                حملة إعلانية
              </Button>
              <Button
                onClick={() => setInput("أريد توليد شعار جديد")}
                variant="outline"
                size="sm"
                className="border-purple-neon text-purple-neon hover:bg-purple-neon/10"
              >
                توليد شعار
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="border-t border-cyan-neon/20 bg-card/50 py-6">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-cyan-neon font-bold mb-2">متاح 24/7</h4>
              <p className="text-sm text-muted-foreground">أنا هنا لمساعدتك في أي وقت</p>
            </div>
            <div className="text-center">
              <h4 className="text-pink-neon font-bold mb-2">تخصيص كامل</h4>
              <p className="text-sm text-muted-foreground">أتعلم من تفاعلاتك معي</p>
            </div>
            <div className="text-center">
              <h4 className="text-purple-neon font-bold mb-2">ذكاء متقدم</h4>
              <p className="text-sm text-muted-foreground">أقدم اقتراحات ذكية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
