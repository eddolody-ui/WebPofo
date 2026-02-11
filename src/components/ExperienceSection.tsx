import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    type: "work",
    title: "IT Support",
    company: "Kings International School",
    period: "2025 May - Present",
    description: "Support end-users (software and hardware) and website issues",
    achievements: [
      "Provide technical support during school events",
      "Manage inventory and stock control and coordinate with the Admin and Management departments",
      "Monitor and manage requests from various departments."
    ],
    tags: ["Odoo", "Python"]
  },
  {
    type: "work",
    title: "Data Entry",
    company: "Kings International School",
    period: "2025 Jan - May",
    description: "Handle daily data document tasks for academic and office departments across all campuses.",
    achievements: [
      "Analyze the data of employee from all campush",
      "Upload the data into the Software system",
      "Analyze the data of employee from all campus"
    ],
    tags: ["Microsoft Office", "Teams", "OutLook"]
  },
  {
    type: "work",
    title: "Purchasing Data Controller",
    company: "Myanmar pharmaceutical industrial enterprise (MPIE)",
    period: "2024 - 2025",
    description: "Verified pricing, inspected product quality, and ensured smooth procurement processes. ",
    achievements: [
      "Conduct price verification for companies or individuals that meet the required standards.",
      "Perform quality inspection and acceptance of products awarded by the factory.",
      "Submit Purchase Completion and Business Completion reports."
    ],
    tags: ["ERP", "Microsoft Office"]
  },
  {
    type: "work",
    title: "Operation Assistant",
    company: "Ninjavan Myanmar",
    period: "2023 - 2024",
    description: "Managed multiple operational areas, supervised a team of 21 employees, and maintained daily reports for management.",
    achievements: [
      "Assigned daily tasks and job duties to employees.",
      "Checked and managed operational areas and shared updates with relevant teams.",
      "Monitored performance and motivated teams to meet target success rates."
    ],
    tags: ["Ninjavan Webapp", "Microsoft Office"]
  },
  {
    type: "education",
    title: "Bachelor of Art In History",
    company: "Dagon University",
    period: "2023 - Present",
    description: "",
    achievements: [],
    tags: []
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
          {experiences.map((exp, index) => {
            const experienceCard = (
              <Card className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-primary to-primary/50" />
                <CardContent className="p-6 pl-8">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-2 rounded-lg ${
                          exp.type === "work" ? "bg-primary/10" : "bg-green-500/10"
                        } shrink-0 mt-1`}
                      >
                        {exp.type === "work" ? (
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

                  <p className="text-muted-foreground mb-4 ml-12">{exp.description}</p>

                  <div className="ml-12">
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-primary mr-2 shrink-0">*</span>
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
            );

            if (exp.type !== "education") {
              return <div key={index}>{experienceCard}</div>;
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              >
                {experienceCard}
              </motion.div>
            );
          })}
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
