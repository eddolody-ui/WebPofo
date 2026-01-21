import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { AntigravityBackground } from "./components/AntigravityBackground";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <AntigravityBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}