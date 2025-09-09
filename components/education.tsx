"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "English as a Second Language (ESL)",
      institution: "Bay Atlantic University",
      location: "Washington, D.C., USA",
      period: "Dec 2022 – Oct 2024",
      description:
        "Advanced English language program focusing on academic and professional communication skills for international business environments.",
      type: "Language Program",
    },
    {
      degree: "Bachelor's Degree - Software Engineering & Information Systems",
      institution: "École Nationale des Sciences Appliquées",
      location: "Kénitra, Morocco",
      period: "Oct 2020 – May 2021",
      description:
        "Specialized in software engineering methodologies, system design, advanced programming concepts, and information systems architecture.",
      type: "Bachelor's Degree",
    },
    {
      degree: "Bac +2 Technicien Spécialisé - Technique de Développement Informatique",
      institution: "ISTA Maamora",
      location: "Kénitra, Morocco",
      period: "Sep 2018 – Sep 2020",
      description:
        "Comprehensive technical program covering programming fundamentals, web development, database management, and software testing methodologies.",
      type: "Technical Diploma",
    },
  ]

  const certifications = [
    {
      name: "IBM Certified Introduction to Web Development",
      issuer: "IBM",
      date: "Jul 2025",
      description:
        "Foundational certification in front-end web development including responsive design, CSS3 styling, and JavaScript interactivity",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Continuous learning and professional development through formal education and industry certifications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Education
            </h3>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{edu.type}</Badge>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-balance">{edu.degree}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <GraduationCap className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-pretty">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 text-primary mr-3" />
              Certifications
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <Badge variant="default">Certification</Badge>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-balance">{cert.name}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>{cert.issuer}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-pretty">{cert.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Skills Covered</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
