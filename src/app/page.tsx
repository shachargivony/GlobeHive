'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Home as HomeIcon, 
  Clock, 
  DollarSign, 
  GraduationCap, 
  CheckCircle,
  MessageCircle,
  Plane,
  MapPin,
  Star,
  Users,
  TrendingUp,
  Zap,
  Award,
  Heart,
  ThumbsUp,
  Target,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Play,
  Rocket
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

interface PulsingElementProps {
  children: ReactNode;
  delay?: number;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  earnings: string;
  timeframe: string;
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const whatsappUrl = "https://wa.me/972584848111?text=היי,%20אשמח%20לשמוע%20פרטים%20על%20GlobeHive";

  const testimonials: Testimonial[] = [
    {
      name: "דנה כהן",
      text: "הצטרפתי לפני חודשיים ואני כבר מרוויחה יותר ממה שהרווחתי בעבודה הקודמת שלי. הליווי מדהים והקהילה תומכת ומפרגנת!",
      rating: 5,
      earnings: "₪6,500",
      timeframe: "בחודש האחרון"
    },
    {
      name: "יוסי לוי",
      text: "אני עובד מהבית בשעות שנוחות לי, מתעסק בתחום שאני אוהב ומרוויח טוב. מה עוד אפשר לבקש?",
      rating: 5,
      earnings: "₪8,200",
      timeframe: "בחודש האחרון"
    },
    {
      name: "מיכל אברהם",
      text: "התחלתי בתור עבודה צדדית והתאהבתי! היום זו העבודה העיקרית שלי. ממליצה בחום למי שרוצה להתפתח בתחום התיירות.",
      rating: 5,
      earnings: "₪7,800",
      timeframe: "בחודש האחרון"
    },
    {
      name: "אבי שמעוני",
      text: "הדרך הכי טובה להרוויח כסף מהבית שמצאתי עד היום. הצוות מקצועי והתמיכה מעולה.",
      rating: 5,
      earnings: "₪5,900",
      timeframe: "בחודש הראשון"
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Floating elements animation
  const FloatingElement = ({ children, delay = 0, duration = 3 }: FloatingElementProps) => (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );

  // Pulsing elements
  const PulsingElement = ({ children, delay = 0 }: PulsingElementProps) => (
    <motion.div
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" dir="rtl">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-teal-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-40 left-32 w-6 h-6 bg-cyan-400 rounded-full opacity-40"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-8 h-8 bg-green-400 rounded-full opacity-30"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-60 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-50"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: "spring", duration: 1 }}
      >
        <PulsingElement delay={3}>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300"
            whileHover={{ 
              y: -5, 
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.div>
            <span className="font-medium hidden sm:inline">צרו קשר</span>
          </motion.a>
        </PulsingElement>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-8">
              <FloatingElement delay={0} duration={4}>
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    GlobeHive
                  </span>
                </div>
              </FloatingElement>
              
              <div className="hidden md:flex gap-6 text-sm">
                <motion.button 
                  onClick={() => scrollToSection('benefits')} 
                  className="text-slate-600 hover:text-teal-600 transition-colors font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  למה זה מתאים לי?
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="text-slate-600 hover:text-teal-600 transition-colors font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  איך זה עובד?
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="text-slate-600 hover:text-teal-600 transition-colors font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  המלצות
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-slate-100"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgb(240, 253, 250), rgb(236, 254, 255), rgb(248, 250, 252))",
                "linear-gradient(to bottom right, rgb(236, 254, 255), rgb(240, 253, 250), rgb(241, 245, 249))",
                "linear-gradient(to bottom right, rgb(248, 250, 252), rgb(240, 253, 250), rgb(236, 254, 255))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <FloatingElement delay={0} duration={6}>
            <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
          </FloatingElement>
          <FloatingElement delay={2} duration={5}>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
          </FloatingElement>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <PulsingElement delay={1}>
                <Badge className="mb-6 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 border-teal-200 text-sm px-4 py-2 shadow-lg">
                  <Sparkles className="w-4 h-4 ml-2" />
                  ✈️ הזדמנות זהב בתחום התיירות
                </Badge>
              </PulsingElement>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              עבודה מהבית<br />
              <motion.span 
                className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                בתחום התיירות
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              הצטרפו ל-GlobeHive, סוכנות עצמאית העובדת עם Travelor, והתחילו להרוויח מהבית 
              בעזרת שיווק חבילות נופש – בלי ניסיון, בלי משרד.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <PulsingElement delay={2}>
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300"
                  whileHover={{ 
                    y: -3, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <MessageCircle className="w-6 h-6" />
                  </motion.div>
                  רוצים לדעת עוד? דברו איתנו עכשיו בווטסאפ
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </PulsingElement>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is GlobeHive */}
      <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <FloatingElement delay={0} duration={4}>
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.3 }}
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>
            </FloatingElement>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              מה זה GlobeHive?
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              GlobeHive היא קהילה של אנשים שמרוויחים כסף מהבית דרך שיווק חופשות אונליין. 
              אנחנו עובדים עם Travelor – פלטפורמה עולמית להזמנת חופשות – ונותנים לכם את כל מה שצריך כדי להצליח.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section id="how-it-works" className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-teal-100 rounded-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-100 rounded-full opacity-30"
            animate={{
              scale: [1, 0.8, 1],
              y: [0, -30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              איך זה עובד?
            </motion.h2>
            <PulsingElement>
              <p className="text-lg text-slate-600">
                שלושה שלבים פשוטים להתחלה 🚀
              </p>
            </PulsingElement>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-teal-300 to-cyan-300 opacity-50"></div>
            
            {[
              {
                icon: GraduationCap,
                title: "הצטרפות והדרכה אונליין",
                description: "קבלת הכשרה מלאה והדרכה אישית לשיווק חבילות נופש. נלמד אתכם הכל מהבסיס - איך לבחור חופשות, איך לשתף בצורה יעילה ואיך למקסם הכנסות.",
                color: "from-blue-500 to-indigo-600",
                stats: "98% מצליחים",
                duration: "7 ימים",
                features: ["הדרכה 1-על-1", "חומרי למידה", "קהילת תמיכה"]
              },
              {
                icon: Target,
                title: "שיווק חבילות נופש יעיל",
                description: "שיתוף חבילות נופש מרהיבות עם הרשת שלכם, קבוצות פייסבוק, ואנשים שמחפשים חופשות. אנחנו נותנים לכם תמונות, טקסטים וכלים מוכנים.",
                color: "from-teal-500 to-cyan-600",
                stats: "ממוצע 15 הזמנות",
                duration: "בחודש",
                features: ["תוכן מוכן", "כלי שיווק", "טיפים מתקדמים"]
              },
              {
                icon: Rocket,
                title: "הכנסה אוטומטית וגדלה",
                description: "הכנסה פסיבית על כל הזמנה שמתבצעת דרך הקישור שלכם. ככל שתשקיעו יותר ותבנו רשת גדולה יותר, כך ההכנסות שלכם יגדלו באופן מעריכי.",
                color: "from-green-500 to-emerald-600",
                stats: "עד ₪8,000",
                duration: "בחודש",
                features: ["עמלות גבוהות", "הכנסה פסיבית", "בונוסים"]
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Step number */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-white border-2 border-teal-500 rounded-full flex items-center justify-center font-bold text-teal-600 text-sm z-10"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  <Card className="h-full bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 opacity-5"
                      animate={{
                        background: [
                          `linear-gradient(45deg, transparent 30%, ${step.color.includes('blue') ? '#3b82f6' : step.color.includes('teal') ? '#14b8a6' : '#10b981'} 50%, transparent 70%)`,
                          `linear-gradient(225deg, transparent 30%, ${step.color.includes('blue') ? '#3b82f6' : step.color.includes('teal') ? '#14b8a6' : '#10b981'} 50%, transparent 70%)`,
                          `linear-gradient(45deg, transparent 30%, ${step.color.includes('blue') ? '#3b82f6' : step.color.includes('teal') ? '#14b8a6' : '#10b981'} 50%, transparent 70%)`
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <CardContent className="p-8 relative">
                      <FloatingElement delay={index * 0.5} duration={3 + index}>
                        <motion.div 
                          className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}
                          whileHover={{ 
                            rotate: [0, -5, 5, 0],
                            scale: 1.1
                          }}
                        >
                          <step.icon className="w-10 h-10 text-white" />
                        </motion.div>
                      </FloatingElement>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Stats */}
                      <div className="bg-slate-100 rounded-xl p-4 mb-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-bold text-teal-600">{step.stats}</span>
                          <span className="text-slate-500">{step.duration}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-slate-600"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * featureIndex }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: featureIndex * 0.3 }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            </motion.div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to action in this section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <PulsingElement delay={1}>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300"
                whileHover={{ 
                  y: -3, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-6 h-6" />
                מוכנים להתחיל? בואו נדבר!
              </motion.a>
            </PulsingElement>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              למה זה מתאים לך?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: HomeIcon,
                title: "עבודה מהבית או מכל מקום",
                description: "גמישות מלאה במקום העבודה"
              },
              {
                icon: Clock,
                title: "שעות גמישות",
                description: "אתם קובעים את השעות שלכם"
              },
              {
                icon: TrendingUp,
                title: "הכנסה שיכולה לגדול עם הזמן",
                description: "ככל שתשקיעו יותר, תרוויחו יותר"
              },
              {
                icon: GraduationCap,
                title: "ליווי והכשרה מלאה בעברית",
                description: "תמיכה צמודה בכל השלבים"
              },
              {
                icon: Zap,
                title: "אין צורך בניסיון קודם",
                description: "נלמד אתכם את כל מה שצריך"
              },
              {
                icon: Users,
                title: "קהילה תומכת",
                description: "חלק מקהילה של אנשים מוצלחים"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                    />
                    <CardContent className="p-6 text-center relative">
                      <FloatingElement delay={index * 0.2} duration={3}>
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <benefit.icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </FloatingElement>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              מה אומרים אנשים שכבר הצטרפו?
            </h2>
            <PulsingElement>
              <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
                <Award className="w-4 h-4 ml-1" />
                +{testimonials.length} חברים מרוויחים כבר עכשיו
              </Badge>
            </PulsingElement>
          </motion.div>

          {/* Animated testimonial slider */}
          <div className="max-w-4xl mx-auto mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100, rotateY: 20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white border-slate-200 shadow-2xl relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-teal-50 via-transparent to-cyan-50 opacity-50"
                  />
                  <CardContent className="p-8 relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                          >
                            <Star className="w-6 h-6 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                      <div className="text-left">
                        <PulsingElement delay={0.5}>
                          <div className="text-2xl font-bold text-green-600">
                            {testimonials[currentTestimonial].earnings}
                          </div>
                        </PulsingElement>
                        <div className="text-sm text-slate-500">
                          {testimonials[currentTestimonial].timeframe}
                        </div>
                      </div>
                    </div>
                    <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <p className="font-semibold text-slate-900 text-lg">
                      – {testimonials[currentTestimonial].name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-teal-500 w-8' : 'bg-slate-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Grid of additional testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <PulsingElement delay={index * 0.3}>
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            {testimonial.earnings}
                          </Badge>
                        </PulsingElement>
                      </div>
                      <p className="text-slate-700 mb-4 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <p className="font-semibold text-slate-900">
                        – {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership with Travelor */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <FloatingElement delay={0} duration={5}>
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0]
                }}
              >
                <MapPin className="w-8 h-8 text-white" />
              </motion.div>
            </FloatingElement>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              עובדים עם Travelor
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Travelor היא פלטפורמת תיירות שפועלת ביותר מ-100 מדינות. עם מאות אלפי משתמשים מסביב לעולם 
              – זו ההזדמנות שלך לקחת חלק בתחום שכולם אוהבים: תיירות.
            </p>
            <motion.div 
              className="bg-slate-100 rounded-2xl p-6 max-w-2xl mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-slate-500">
                גילוי נאות: GlobeHive אינה החברה עצמה אלא סוכנות עצמאית העובדת עמה
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-20 w-24 h-24 bg-white/10 rounded-full"
            animate={{
              scale: [1, 0.8, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              animate={{ 
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              רוצים הסבר מלא + קישור להתחלה מיידית?
            </motion.h2>
            <PulsingElement>
              <p className="text-xl text-teal-100 mb-8">
                שלחו לנו הודעה עכשיו – אנחנו זמינים לכם! 💬
              </p>
            </PulsingElement>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-teal-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl transition-all duration-300"
              whileHover={{ 
                y: -5, 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
              שלחו לי את כל הפרטים עכשיו בווטסאפ »
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <FloatingElement delay={0} duration={4}>
              <div className="flex items-center justify-center gap-2 mb-6">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Globe className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-xl font-bold text-white">GlobeHive</span>
              </div>
            </FloatingElement>
            <p className="text-sm mb-4">
              GlobeHive © כל הזכויות שמורות
            </p>
            <p className="text-xs text-slate-500 mb-6">
              האתר אינו האתר הרשמי של Travelor אך פועל מולה בשיתוף פעולה
            </p>
            <div className="flex justify-center gap-6 text-xs">
              <motion.a 
                href="#" 
                className="hover:text-teal-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                תנאי שימוש
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-teal-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                מדיניות פרטיות
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
