"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor's Degree - Software Engineering & Information Systems",
      institution: "École Nationale des Sciences Appliquées",
      location: "Kénitra, Morocco",
      period: "Oct 2020 – May 2021",
      description: "Specialized in software engineering, system design, and advanced programming concepts.",
      type: "Bachelor's Degree",
    },
    {
      degree: "Bac +2 Technicien Spécialisé - Technique de Développement Informatique",
      institution: "ISTA Maamora",
      location: "Kénitra, Morocco",
      period: "Sep 2018 – Sep 2020",
      description: "Technical program covering programming, web development, databases, and software testing.",
      type: "Technical Diploma",
    },
    {
      degree: "English as a Second Language (ESL)",
      institution: "Bay Atlantic University",
      location: "Washington, D.C., USA",
      period: "Dec 2022 – Oct 2024",
      description: "Advanced English program for academic and professional communication in business environments.",
      type: "Language Program",
    },
  ]

  const certifications = [
    {
      name: "IBM Certified Introduction to Web Development",
      issuer: "IBM",
      date: "Jul 2025",
      description: "Foundational certification in front-end web development with focus on responsive design.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      name: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Dec 2025",
      description:
        "Comprehensive certification demonstrating foundational knowledge of AI concepts and Microsoft Azure AI services.",
      skills: ["AI Fundamentals", "Azure AI Services", "Machine Learning", "Generative AI"],
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
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
              Learning & Growth
            </Badge>
          </div>
          <h2 className="text-balance mb-6">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
            Continuous professional development through formal education and industry-recognized certifications.
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-accent" />
            Academic Education
          </h3>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-premium">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
                      <div>
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      </div>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {edu.type}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 font-medium text-foreground">
                        <GraduationCap className="h-4 w-4 text-accent flex-shrink-0" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="h-6 w-6 text-accent" />
            Professional Certifications
          </h3>
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-premium ring-2 ring-accent/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
                      <div>
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                      </div>
                      <Badge className="bg-accent/20 text-accent hover:bg-accent/30 whitespace-nowrap">Certified</Badge>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 font-medium text-foreground">
                        <Award className="h-4 w-4 text-accent flex-shrink-0" />
                        {cert.issuer}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        {cert.date}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-pretty">{cert.description}</p>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                        Skills Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
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
      </div>
    </section>
  )
}
