"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building, CheckCircle2 } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Email Marketing Specialist",
      company: "E-MARKET SOLUTIONS LPP",
      location: "Kenitra, Morocco",
      period: "Dec 2020 – Aug 2022",
      type: "Full-time",
      achievements: [
        "Executed 50+ email campaigns achieving 40%+ open rates (35% above industry average)",
        "Optimized campaigns using AWS and Azure cloud analytics, increasing ROI by 35%",
        "Implemented Sendinblue automation workflows reducing manual work by 80%",
        "Increased conversion rates by 28% through data-driven A/B testing",
      ],
      skills: ["AWS", "Microsoft Azure", "Sendinblue", "Email Strategy", "Analytics"],
    },
    {
      title: "Database Developer",
      company: "VPI INFO",
      location: "Kénitra, Morocco",
      period: "Dec 2019 – Jan 2020",
      type: "Internship",
      achievements: [
        "Optimized SQL Server databases reducing query response time by 45%",
        "Built C# and Python solutions for data management and system automation",
        "Documented database best practices improving team efficiency",
        "Collaborated with teams to implement scalable data architecture",
      ],
      skills: ["SQL Server", "C#", "Python", "Windev", "Database Optimization"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block mb-4">
            <Badge variant="outline" className="text-primary font-medium">
              Career
            </Badge>
          </div>
          <h2 className="text-balance mb-6">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
            Results-driven professional with proven ability to deliver measurable impact through technical expertise and
            strategic execution.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-premium overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="default" className="bg-accent/20 text-accent hover:bg-accent/30">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-muted-foreground flex items-center gap-1 justify-end">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2 text-foreground font-medium">
                      <Building className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-primary/5 text-primary hover:bg-primary/10 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
