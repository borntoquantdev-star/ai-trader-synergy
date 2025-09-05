import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, BookOpen, Code, Brain, Users, ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";
import { useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const navigate = useNavigate();
  
  const courseModules = [
    {
      title: "Module 1: Foundations",
      duration: "2 Weeks",
      topics: [
        "Introduction to n8n and Multi-Agent Systems",
        "Setting Up Your Development Environment",
        "Basic Trading Concepts and Terminology",
        "Understanding API Integration"
      ]
    },
    {
      title: "Module 2: Building Your First Agent",
      duration: "2 Weeks",
      topics: [
        "Agent Architecture and Design Patterns",
        "Implementing Basic Trading Logic",
        "Error Handling and Monitoring",
        "Testing and Debugging Strategies"
      ]
    },
    {
      title: "Module 3: Advanced Multi-Agent Systems",
      duration: "3 Weeks",
      topics: [
        "Multi-Agent Communication Protocols",
        "Decision Making and Risk Management",
        "Performance Optimization",
        "Real-time Data Processing"
      ]
    },
    {
      title: "Module 4: Integration and Deployment",
      duration: "2 Weeks",
      topics: [
        "System Integration Best Practices",
        "Deployment Strategies",
        "Monitoring and Alerting",
        "Scaling Your System"
      ]
    }
  ];

  const highlights = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Learn everything from basics to advanced multi-agent systems"
    },
    {
      icon: Code,
      title: "Hands-on Projects",
      description: "Build real trading systems with practical assignments"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Master the integration of AI in trading systems"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a community of traders and developers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

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
              Course Details
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Multi-Agent Trading System Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master the art of building intelligent trading systems using n8n and multi-agent architecture
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                9 Weeks
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Limited Seats
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Brain className="w-4 h-4 mr-2" />
                Advanced Level
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Course Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/20 p-3 rounded-lg w-fit">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Course Modules
          </h2>
          <div className="space-y-8">
            {courseModules.map((module, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <h3 className="text-2xl font-semibold">{module.title}</h3>
                    <Badge variant="outline" className="w-fit">
                      {module.duration}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="glass-card p-8 max-w-3xl mx-auto border-2 border-primary/30">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-warning/20 text-warning border-warning/30">
                  🎁 Special Bonuses
                </Badge>
                <h2 className="text-3xl font-bold mb-4">
                  ราคานี้นอกจากจะได้ทีมเทรดหัวกระทิส่วนตัวแล้ว ยังมีของแถมให้อีกเพียบบ
                </h2>
              </div>
              <ul className="space-y-6">
                {[
                  "n8n Template พร้อมใช้งานมากกว่า 10 Template (แล้วจะมีอัพเดทให้เรื่อยๆด้วย)",
                  "Special Class สอนทำ Vibe Coding สร้าง Dashboard วิเคราะห์กราฟได้ง่ายๆ ดั่งใจนึก",
                  "Special Class สอนทำ Vibe Quant วิเคราะห์การเทรดแบบชาว Quant โดยไม่ต้องเขียนโค้ด",
                  "Special Class ชำแหละระบบเทรดที่ใช้รันจริง จากทีม Invesstic เพื่อต่อยอดความคิดหลังเรียนจบ"
                ].map((bonus, index) => (
                  <li key={index} className="flex items-start gap-4 bg-background/50 p-4 rounded-lg">
                    <div className="text-2xl">🎁</div>
                    <p className="text-lg">{bonus}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="glass-card p-8 max-w-3xl mx-auto">
            <CardContent className="p-0 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our next cohort and master the art of building intelligent trading systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Enroll Now
                </Button>
                <Button variant="outline" size="xl">
                  Download Syllabus
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
