"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Code, Cloud, Database, Mail, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "C#", level: 85 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "HTML5/CSS3", level: 85 },
      ],
    },
    {
      title: "Cloud & Platforms",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 80 },
        { name: "Microsoft Azure", level: 85 },
        { name: "Sendinblue", level: 90 },
        { name: "Windev", level: 75 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "Database Design", level: 85 },
        { name: "Query Optimization", level: 80 },
      ],
    },
    {
      title: "Marketing",
      icon: Mail,
      skills: [
        { name: "Email Marketing", level: 95 },
        { name: "Campaign Analytics", level: 85 },
        { name: "Digital Marketing", level: 80 },
        { name: "Online Research", level: 90 },
      ],
    },
  ]

  const softSkills = [
    "Communication",
    "Problem-Solving",
    "Adaptability",
    "Teamwork",
    "Attention to Detail",
    "Leadership",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <category.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
