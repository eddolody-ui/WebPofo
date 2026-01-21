import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Leading development of enterprise web applications, mentoring junior developers, and architecting scalable solutions for Fortune 500 clients.",
    achievements: [
      "Improved application performance by 60% through optimization",
      "Led team of 5 developers on major client projects",
      "Implemented CI/CD pipeline reducing deployment time by 70%"
    ],
    tags: ["React", "Node.js", "AWS", "Team Leadership"]
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "StartupHub Inc.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple web applications, collaborated with design team, and contributed to product strategy decisions.",
    achievements: [
      "Built 3 production applications from scratch",
      "Reduced API response time by 40%",
      "Implemented design system used across all products"
    ],
    tags: ["Vue.js", "Python", "PostgreSQL", "Docker"]
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Digital Agency XYZ",
    period: "2018 - 2020",
    description: "Created responsive websites and web applications for various clients, ensuring pixel-perfect implementation of designs.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Improved website accessibility scores to 95+",
      "Mentored 3 junior developers"
    ],
    tags: ["JavaScript", "HTML/CSS", "React", "UI/UX"]
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "State University",
    period: "2014 - 2018",
    description: "Graduated with honors. Focused on software engineering, algorithms, and web technologies.",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List for 6 semesters",
      "Led university hackathon team to 1st place"
    ],
    tags: ["Computer Science", "Software Engineering"]
  }
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional",
  "Meta Frontend Developer Certificate",
  "MongoDB Certified Developer"
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Experience & Education
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            My professional journey and academic background in software development
            and technology.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/50" />
              <CardContent className="p-6 pl-8">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${exp.type === 'work' ? 'bg-primary/10' : 'bg-green-500/10'} flex-shrink-0 mt-1`}>
                      {exp.type === 'work' ? (
                        <Briefcase className="h-5 w-5 text-primary" />
                      ) : (
                        <GraduationCap className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {exp.period}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 ml-12">
                  {exp.description}
                </p>
                
                <div className="ml-12">
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-primary mr-2 flex-shrink-0">•</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <p className="font-medium">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
