"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { 
  Trophy, 
  Zap, 
  Users, 
  Brain, 
  Play, 
  Star, 
  ArrowRight,
  TrendingUp,
  Globe,
  Heart,
  Shield,
  Smartphone
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSport, setCurrentSport] = useState(0);
  const [liveScore, setLiveScore] = useState({ home: 2, away: 1 });
  
  const sports = ["Football", "Basketball", "Baseball", "Soccer", "Tennis"];
  const features = [
    {
      icon: Zap,
      title: "Live Scores & Updates",
      description: "Get real-time scores, play-by-play updates, and instant notifications for your favorite teams and matches.",
      highlight: "Real-time"
    },
    {
      icon: Globe,
      title: "Multi-Sport Coverage",
      description: "Follow NFL, NBA, MLB, Premier League, Tennis, and 50+ sports leagues from around the world.",
      highlight: "50+ Sports"
    },
    {
      icon: Users,
      title: "Community Features",
      description: "Connect with fellow fans, join discussions, share predictions, and compete in fantasy leagues.",
      highlight: "Join Fans"
    },
    {
      icon: Brain,
      title: "AI Personalization",
      description: "Smart recommendations, personalized news feed, and AI-powered insights tailored to your interests.",
      highlight: "AI-Powered"
    }
  ];

  const stats = [
    { number: "10M+", label: "Active Users" },
    { number: "50+", label: "Sports Covered" },
    { number: "1000+", label: "Teams Tracked" },
    { number: "99.9%", label: "Uptime" }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Fantasy League Champion",
      content: "The AI predictions helped me win my fantasy league three years running!",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Sports Enthusiast",
      content: "Best sports app I've ever used. The live updates are lightning fast.",
      rating: 5
    },
    {
      name: "Mike Johnson",
      role: "Die-hard Fan",
      content: "Love the community features. Found my new favorite sports podcast here!",
      rating: 5
    }
  ];

  // Simulate live score updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setLiveScore(prev => ({
          home: prev.home + (Math.random() > 0.5 ? 1 : 0),
          away: prev.away + (Math.random() > 0.5 ? 1 : 0)
        }));
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Rotate sports every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSport((prev) => (prev + 1) % sports.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  🏆 #1 Sports App 2024
                </Badge>
                <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
                  Your Ultimate{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {sports[currentSport]}
                  </span>{" "}
                  Experience
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  Get live scores, AI-powered insights, and connect with millions of sports fans worldwide. 
                  Your personalized sports universe awaits.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
                  <Link href="/sign-up">
                    <Play className="mr-2 h-5 w-5" />
                    Get Started Free
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link href="#features">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Live Score Demo */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/70">🔴 LIVE</div>
                  <div className="text-sm text-white/70">NBA Finals</div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-lg font-semibold">Lakers</div>
                  <div className="text-2xl font-bold">{liveScore.home} - {liveScore.away}</div>
                  <div className="text-lg font-semibold">Celtics</div>
                </div>
                <div className="text-xs text-white/60 mt-1">Q3 8:42 remaining</div>
              </div>
            </div>

            {/* Hero Image/Animation Area */}
            <div className="lg:justify-self-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-white/20 to-white/5 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Trophy className="w-32 h-32 text-yellow-400 animate-pulse" />
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                  LIVE
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AI Powered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From live scores to AI insights, we've built the most comprehensive sports platform 
              to keep you connected to the games you love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <Badge variant="secondary" className="absolute top-4 right-4 text-xs">
                    {feature.highlight}
                  </Badge>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by Sports Fans Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Join the Action?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get instant access to live scores, AI insights, and a community of passionate sports fans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
              <Link href="/sign-up">
                <Smartphone className="mr-2 h-5 w-5" />
                Start Free Trial
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/sign-in">
                Already have an account?
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-white/70">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              Free 7-day trial
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              No credit card required
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}