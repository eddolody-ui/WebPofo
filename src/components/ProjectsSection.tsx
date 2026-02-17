import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const projects = [
  {
    title: "Delivery Management System",
    description:
      "Full-stack logistics solution with payment integration, inventory management and admin dashboard. Built for scalability and performance.",
    tags: ["React", "Node.js", "MongoDB", "Render"],
    image:
      "https://i.pinimg.com/1200x/d4/38/51/d43851eead92f237c1663e9b0cffce81.jpg",
    githubUrl: "https://github.com/eddolody-ui/DeliManagementSys",
    liveUrl: "#",
  },
  {
    title: "Mini Library",
    description:
      "Mini Library is a simple and user-friendly online platform where users can browse, search, and manage books easily. It allows readers to explore a collection of books, view details, and keep track of their favorite titles. Designed with a clean interface and smooth navigation, Mini Library makes discovering and organizing books convenient and enjoyable. 📚",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    image:
      "https://i.pinimg.com/736x/9b/59/3b/9b593bd7bc1866f17961d2391e00670f.jpg",
    githubUrl: "https://github.com/eddolody-ui/LibraryForClient.git",
    liveUrl: "https://libraryforclient.onrender.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of projects that showcase my skills in
            full-stack development, UI/UX design, and
            problem-solving abilities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            >
              <Card className="flex h-full flex-col overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1"
                      disabled={project.liveUrl === "#"}
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                        aria-disabled={project.liveUrl === "#"}
                        onClick={(e) => {
                          if (project.liveUrl === "#") e.preventDefault();
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
