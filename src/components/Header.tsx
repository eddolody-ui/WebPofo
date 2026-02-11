import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { GiBoatHorizon } from "react-icons/gi";
import { ThemeTogglerButton } from "./animate-ui/components/buttons/theme-toggler";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div><GiBoatHorizon/></div>
            <span className="font-semibold">Min Thway</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="relative inline-block text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <a
              href="#projects"
              className="relative inline-block text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="relative inline-block text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="relative inline-block text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Experience
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <a href="/RESUME(WebPofo).pdf" download>
              Download Resume
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=eddlolody@gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noreferrer"
            >
              Contact Me
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
          <ThemeTogglerButton />
        </div>
      </div>
    </header>
  );
}
