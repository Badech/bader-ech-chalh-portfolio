"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code2, Brain, Cloud, Zap, GitBranch, Cpu } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      description: "Modern, responsive interfaces",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "AI & Automation",
      icon: Brain,
      description: "AI integration & workflow automation",
      skills: ["OpenAI APIs", "AI Integration", "Prompt Engineering", "Automation Workflows", "Data Processing"],
    },
    {
      title: "Backend & Databases",
      icon: Cpu,
      description: "Robust, scalable systems",
      skills: ["SQL Server", "C#", "Python", "Database Design", "Query Optimization"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Enterprise infrastructure",
      skills: ["AWS", "Microsoft Azure", "Cloud Architecture", "DevOps", "Deployment"],
    },
    {
      title: "Tools & Workflow",
      icon: GitBranch,
      description: "Development excellence",
      skills: ["Git", "GitHub", "CI/CD", "API Design", "REST APIs"],
    },
    {
      title: "Full-Stack Integration",
      icon: Zap,
      description: "End-to-end solutions",
      skills: ["System Architecture", "API Integration", "Performance Optimization", "Security", "Scalability"],
    },
  ]

  const softSkills = [
    "Problem-Solving",
    "Communication",
    "Technical Leadership",
    "Strategic Thinking",
    "Adaptability",
    "Project Management",
    "Attention to Detail",
    "Team Collaboration",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
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
              Technical Expertise
            </Badge>
          </div>
          <h2 className="text-balance mb-6">Full-Stack Development & AI Integration</h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
            Complete expertise across modern web development, cloud infrastructure, and AI integration. I build scalable
            applications that leverage intelligent automation for measurable business impact.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-premium h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <category.icon className="h-6 w-6 text-accent" />
                    <span className="text-xs font-medium text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                      {category.skills.length} Skills
                    </span>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs font-medium bg-primary/5 text-primary hover:bg-primary/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="card-premium">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-accent" />
                <div>
                  <CardTitle>Professional Attributes</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Core competencies that drive success</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm py-2 px-3 font-medium border-primary/30 hover:bg-primary/5"
                  >
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
