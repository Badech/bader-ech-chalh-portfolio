"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Github, Globe, BarChart3 } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const project = {
    title: "Smart Geo Domain Generator",
    description:
      "A web application built using V0 AI that helps users quickly find geo-targeted domain names. The app allows users to search for domains based on a keyword, country, and state, generating results tailored to specific regions.",
    features: [
      "Keyword-based search with single keyword input",
      "Geo-targeted filtering by country and state",
      "Domain length filter with min/max character limits",
      "Word swap option for flexible keyword placement",
      "Real-time availability checking",
      "Domain insights with appraisal and market research tools",
      "Export options (CSV) and copy functionality",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "V0 AI", "Domain APIs"],
    images: [
      {
        src: "/images/project-1.png",
        alt: "Smart Geo Domain Generator - Search Interface",
        caption: "Main search interface with geo-targeting options",
      },
      {
        src: "/images/project-2.png",
        alt: "Smart Geo Domain Generator - Results Page",
        caption: "Domain results with availability status and insights",
      },
    ],
    liveUrl: "https://smartgeodomaingenerator.vercel.app/",
    githubUrl: "https://github.com/Badech?tab=repositories",
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Showcasing innovative solutions that demonstrate technical expertise and problem-solving capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Images */}
              <div className="space-y-4 p-6">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="relative overflow-hidden rounded-lg border border-border">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">{image.caption}</p>
                  </motion.div>
                ))}
              </div>

              {/* Project Details */}
              <div className="p-6 lg:p-8">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Web Application</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-4">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="px-0 space-y-6">
                  <p className="text-muted-foreground text-pretty">{project.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <BarChart3 className="h-4 w-4 mr-2 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 mt-6">
                    <p className="text-sm text-muted-foreground italic">
                      "This project demonstrates my ability to build practical, data-driven tools with clean UI/UX,
                      integrating multiple filters and APIs to provide actionable insights for businesses and domain
                      investors."
                    </p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
