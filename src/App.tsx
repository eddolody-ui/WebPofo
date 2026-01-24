import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { AntigravityBackground } from "./components/AntigravityBackground";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import {LogoLoop} from './components/LogoLoop'
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];
export default function App() {
// Alternative with image sources
  return (
    <div className="min-h-screen relative">
      <AntigravityBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
    <div style={{ position: 'relative', overflow: 'hidden',}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={25}
        direction="left"
        gap={20}
        renderItem={(item, key) => {
          if ('node' in item) {
            return (
              <div
                key={key}
                className="flex items-center justify-center p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/40 hover:bg-white/20 transition-all duration-500"
                title={item.title}
              >
                <div className="text-4xl text-black">
                  {item.node}
                </div>
              </div>
            );
          }
          return null;
        }}
      />

      {/* Vertical loop with deceleration on hover */}
      </div>
          <ExperienceSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}