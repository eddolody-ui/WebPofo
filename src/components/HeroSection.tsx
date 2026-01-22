import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Full Stack Developer & Creative Designer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust speed as needed

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const cards = scene.querySelectorAll('.floating-card');
    
    const animateCards = () => {
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const time = Date.now() * 0.001;
        const offset = index * 0.5;
        
        const x = Math.sin(time + offset) * 30;
        const y = Math.cos(time + offset * 1.2) * 20;
        const rotateX = Math.sin(time + offset) * 10;
        const rotateY = Math.cos(time + offset * 0.8) * 15;
        
        element.style.transform = `
          translate3d(${x}px, ${y}px, 0) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      });
      
      requestAnimationFrame(animateCards);
    };
    
    animateCards();
  }, []);

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6">
          ✨ Available for New Opportunities
        </Badge>
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          {displayedText.includes("Creative Designer") ? (
            <>
              Full Stack Developer &{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Creative Designer
              </span>
            </>
          ) : (
            displayedText
          )}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          Building beautiful, performant web applications with modern technologies. 
          Passionate about creating seamless user experiences and scalable solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="w-full sm:w-auto">
            View My Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
        
        {/* 3D Graphics Scene */}
        <div className="relative mx-auto max-w-5xl h-96 lg:h-[500px]">
          <div 
            ref={sceneRef}
            className="relative w-full h-full perspective-1000"
            style={{ perspective: '1000px' }}
          >
            {/* Central Hub */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-3xl shadow-2xl flex items-center justify-center z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
            </div>
            
            {/* Floating Tech Stack Cards */}
            
            {/* React */}
            <div className="floating-card absolute top-16 left-20 w-40 h-24 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">React</div>
              <div className="space-y-2">
                <div className="h-3 bg-blue-500 rounded w-16"></div>
                <div className="h-3 bg-blue-400 rounded w-20"></div>
              </div>
            </div>
            
            {/* TypeScript */}
            <div className="floating-card absolute top-32 right-16 w-36 h-28 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">TypeScript</div>
              <div className="grid grid-cols-4 gap-1">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <div className="w-4 h-4 bg-blue-400 rounded"></div>
                <div className="w-4 h-4 bg-blue-300 rounded"></div>
                <div className="w-4 h-4 bg-sky-500 rounded"></div>
                <div className="w-4 h-4 bg-sky-400 rounded"></div>
                <div className="w-4 h-4 bg-sky-300 rounded"></div>
                <div className="w-4 h-4 bg-sky-200 rounded"></div>
              </div>
            </div>
            
            {/* Node.js */}
            <div className="floating-card absolute bottom-20 left-12 w-44 h-32 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Node.js</div>
              <div className="space-y-2">
                <div className="h-4 bg-green-600 rounded w-32"></div>
                <div className="h-3 bg-green-500 rounded w-28"></div>
                <div className="h-2 bg-green-400 rounded w-24"></div>
              </div>
            </div>
            
            {/* UI/UX Design */}
            <div className="floating-card absolute bottom-24 right-20 w-38 h-36 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">UI/UX</div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pink-500 rounded"></div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-rose-500 rounded"></div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
              </div>
            </div>
            
            {/* Database */}
            <div className="floating-card absolute top-20 right-32 w-32 h-20 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Database</div>
              <div className="space-y-1">
                <div className="h-1 bg-orange-500 rounded w-4"></div>
                <div className="h-1 bg-orange-500 rounded w-8"></div>
                <div className="h-1 bg-orange-500 rounded w-12"></div>
                <div className="h-1 bg-orange-500 rounded w-16"></div>
              </div>
            </div>
            
            {/* API Development */}
            <div className="floating-card absolute bottom-32 left-32 w-36 h-24 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">APIs</div>
              <div className="grid grid-cols-4 gap-2">
                <div className="w-4 h-4 bg-indigo-500 rounded"></div>
                <div className="w-4 h-4 bg-indigo-400 rounded"></div>
                <div className="w-4 h-4 bg-indigo-300 rounded"></div>
                <div className="w-4 h-4 bg-indigo-200 rounded"></div>
              </div>
            </div>
            
            {/* Cloud Services */}
            <div className="floating-card absolute top-40 left-40 w-40 h-28 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Cloud</div>
              <div className="space-y-1">
                <div className="h-2 bg-cyan-500 rounded w-full"></div>
                <div className="h-2 bg-cyan-400 rounded w-3/4"></div>
                <div className="h-2 bg-cyan-300 rounded w-5/6"></div>
                <div className="h-2 bg-cyan-200 rounded w-2/3"></div>
              </div>
            </div>
            
            {/* Git/Version Control */}
            <div className="floating-card absolute top-12 right-48 w-34 h-26 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Git</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="text-xs">main</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <div className="text-xs">dev</div>
                </div>
              </div>
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
              <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            </svg>
            
            {/* Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}