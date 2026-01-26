import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Code2,
  Palette,
  Database,
  Wrench} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      { name: "React", level: 65 },
      { name: "TypeScript", level: 74 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 60 },
      { name: "Tailwind CSS", level: 95 },
    ],
    color: "bg-blue-500"
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 92 },
    ],
    color: "bg-green-500"
  },
  {
    icon: Database,
    title: "Database & Storage",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "MySQL", level: 85 }
    ],
    color: "bg-orange-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Adobe XD", level: 85 },
      { name: "Design Systems", level: 95 }
    ],
    color: "bg-purple-500"
  },
  {
    icon: Wrench,
    title: "Tools & Others",
    skills: [
      { name: "VS Code", level: 98 },
      { name: "Postman", level: 90 },
      { name: "Vite", level: 90 }
    ],
    color: "bg-indigo-500"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Skills & Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A comprehensive overview of my technical skills and proficiency levels
            across various technologies and tools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg ${category.color} bg-opacity-10`}>
                    <category.icon className={`h-6 w-6 ${category.color.replace('bg-', 'text-')}`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${category.color} transition-all duration-1000 ease-out rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              "Agile/Scrum",
              "Team Leadership",
              "Code Review",
              "Technical Writing",
              "Accessibility (WCAG)",
              "Performance Optimization",
              "SEO",
              "Mobile-First Design",
              "Responsive Design",
              "Testing (Unit & E2E)",
              "API Design",
              "Microservices"
            ].map((skill, index) => (
              <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
