"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Email Marketing Specialist",
      company: "E-MARKET SOLUTIONS LPP",
      location: "Kenitra, Rabat-Salé-Kénitra, Morocco",
      period: "Dec 2020 – Aug 2022",
      type: "Full-time",
      responsibilities: [
        "Managed email marketing campaigns using AWS, Microsoft Azure, and Sendinblue Marketing Platform",
        "Executed digital marketing strategies and advertising campaigns with advanced analytical skills",
        "Conducted comprehensive online research to optimize campaign performance and targeting",
        "Maintained high operational standards while delivering consistent results across multiple platforms",
      ],
      skills: ["AWS", "Microsoft Azure", "Sendinblue", "Digital Marketing", "Campaign Analytics"],
    },
    {
      title: "Database Developer",
      company: "VPI INFO",
      location: "Kénitra Province, Rabat-Salé-Kénitra, Morocco",
      period: "Dec 2019 – Jan 2020",
      type: "Internship",
      responsibilities: [
        "Developed and maintained Microsoft SQL Server databases for company applications",
        "Programmed solutions using C#, Python, and SQL to enhance data management processes",
        "Utilized Windev for application development and database integration projects",
        "Collaborated with development teams on database optimization and query performance",
      ],
      skills: ["SQL Server", "C#", "Python", "Windev", "Database Design"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A track record of delivering high-quality solutions and driving results in dynamic environments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background md:transform md:-translate-x-1.5 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Building className="h-4 w-4 text-primary" />
                        <Badge variant={exp.type === "Full-time" ? "default" : "secondary"}>{exp.type}</Badge>
                      </div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
