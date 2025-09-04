import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Brain, BarChart3, Shield, Clock, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";
import testimonialBg from "@/assets/testimonial-bg.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              🤖 AI Multi-Agent Trading System
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              สร้าง AI เทรดที่{" "}
              <span className="gradient-text">"คิดเป็น"</span>{" "}
              ตัดสินใจเองอย่างรอบด้าน
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              ยกระดับการเทรดของคุณด้วยระบบ Multi-Agent ที่วิเคราะห์ครบทุกมิติ 
              พร้อมเก็บสถิติเพื่อเรียนรู้และทำกำไรอย่างยั่งยืน
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                ลงทะเบียนรับส่วนลด Early Bird
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                ดูรายละเอียดคอร์ส
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${testimonialBg})` }}
        />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ผลลัพธ์จริงจากนักเรียนของเรา!
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ผลงานเหล่านี้เป็นเพียงส่วนหนึ่งที่สะท้อนถึงศักยภาพการเรียนรู้ที่ก้าวกระโดด
              จากนักเรียนในคอร์สของเรา ที่ได้สร้างสรรค์ระบบเทรดและ AI ในฝันของตัวเอง
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "คุณสมชาย",
                result: "AI Bot ตัวนี้แม่นยำมากครับ!",
                profit: "+127% ใน 3 เดือน",
                avatar: "👨‍💼"
              },
              {
                name: "คุณนิภา",
                result: "ไม่น่าเชื่อว่าจะทำได้เอง!",
                profit: "+89% ใน 2 เดือน",
                avatar: "👩‍💻"
              },
              {
                name: "คุณวิชัย",
                result: "ระบบ Multi-Agent ยอดเยี่ยม",
                profit: "+156% ใน 4 เดือน",
                avatar: "👨‍🚀"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-lg font-semibold mb-2">"{testimonial.result}"</p>
                  <p className="text-muted-foreground mb-2">- {testimonial.name}</p>
                  <Badge variant="secondary" className="bg-success/20 text-success">
                    {testimonial.profit}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">รีวิวจากนักเรียนเก่า Investic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ทำไมคอร์สนี้จึงเป็นมากกว่าการเรียน n8n?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "ยกระดับการเทรด",
                description: "AI ตัดสินใจทุกอย่างเองอย่างรอบด้าน เข้าถึงข้อมูลเชิงลึกแบบที่คนคนเดียวทำไม่ได้"
              },
              {
                icon: Brain,
                title: "เพิ่มความแม่นยำ",
                description: "คิดอย่างเป็นระบบ ตัดสินใจร่วมกันอย่างแม่นยำด้วย Multi-Agent Full System"
              },
              {
                icon: BarChart3,
                title: "เรียนรู้จากความผิดพลาด",
                description: "ระบบเก็บสถิติและเรียนรู้จาก Pattern แพ้ชนะก่อนหน้า"
              },
              {
                icon: Shield,
                title: "ความรู้พร้อมใช้งาน",
                description: "นำไปปรับใช้ได้จริงทันทีด้วยระบบที่ทีม Investic ใช้รันจริง"
              }
            ].map((benefit, index) => (
              <Card key={index} className="glass-card p-8 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-success" />
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              เจาะลึกเนื้อหาในคอร์ส
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                level: "พื้นฐาน",
                title: "n8n Basic Bot Template",
                items: ["Notification System", "Execution Management", "Full Loop Bot Trade"]
              },
              {
                level: "กลาง",
                title: "Multi-Agent แบบพื้นฐาน",
                items: ["Fundamental + Technical Agent", "Sentiment + Technical Agent", "News + Technical Agent"]
              },
              {
                level: "ขั้นสูง",
                title: "Multi-Agent Full System",
                items: ["วิเคราะห์ครบทุกมิติ", "Multi-Agent + RAG", "Multi Layer Risk Validation"]
              }
            ].map((module, index) => (
              <Card key={index} className="glass-card p-8">
                <CardContent className="p-0">
                  <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                    {module.level}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-6">{module.title}</h3>
                  <ul className="space-y-3">
                    {module.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-warning/20 text-warning border-warning/30 animate-pulse">
              ⚡ โอกาสสุดท้าย!
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ราคา Early Bird สำหรับผู้ที่พร้อมจะยกระดับ
            </h2>
            
            <Card className="glass-card p-8 mt-12 border-2 border-primary/30">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <div className="text-lg text-muted-foreground mb-2">จากราคาเต็ม</div>
                  <div className="text-3xl line-through text-muted-foreground mb-2">16,990 บาท</div>
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">7,900 บาท</div>
                  <Badge className="bg-destructive/20 text-destructive border-destructive/30">
                    <Clock className="w-4 h-4 mr-1" />
                    ถึงวันที่ 1 ตุลาคม 2025 เท่านั้น!
                  </Badge>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/30">
                    <span>นักเรียนเก่า Investic</span>
                    <Badge className="bg-success/20 text-success">-500 บาท</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg border border-accent/30">
                    <span>30 คนแรก! คอมเมนต์ #agent + แชร์</span>
                    <Badge className="bg-accent/20 text-accent">-500 บาท</Badge>
                  </div>
                </div>
                
                <Button variant="premium" size="xl" className="w-full">
                  ลงทะเบียนเลย ราคาพิเศษ 7,900 บาท
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              คำถามที่หลายคนอยากรู้
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "ต้องมีพื้นฐานการเทรดมาก่อนไหม?",
                  a: "ไม่จำเป็นครับ เราจะสอนตั้งแต่พื้นฐานไปจนถึงระบบขั้นสูง พร้อมทั้งให้เทมเพลตที่พร้อมใช้งาน"
                },
                {
                  q: "ใช้เวลาเรียนนานไหม?",
                  a: "ประมาณ 2-3 สัปดาห์ในการเรียนรู้พื้นฐาน และสามารถพัฒนาต่อยอดได้ไม่จำกัด"
                },
                {
                  q: "รับประกันผลลัพธ์ไหม?",
                  a: "เรารับประกันความรู้และเครื่องมือที่ได้รับ หากไม่พอใจสามารถขอเงินคืนภายใน 7 วัน"
                }
              ].map((faq, index) => (
                <Card key={index} className="glass-card p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Investic</h3>
            <p className="text-muted-foreground mb-8">
              ยกระดับการเทรดด้วยเทคโนโลยี AI ที่ล้ำสมัย
            </p>
            <div className="flex justify-center gap-8 mb-8">
              <Button variant="ghost">Facebook</Button>
              <Button variant="ghost">Line OA</Button>
              <Button variant="ghost">ติดต่อเรา</Button>
            </div>
            <div className="text-sm text-muted-foreground space-x-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;