"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Github, Star, Zap } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      id: 2,
      title: "AI Story Maker",
      featured: true,
      problem: "Content creators struggle with creative blocks and need AI-assisted story generation",
      solution:
        "Built an AI-powered full-stack application integrating OpenAI APIs with real-time streaming. Implemented advanced state management and smooth animations for seamless UX with intelligent content generation.",
      impact: "2M+ stories generated with AI, 100+ variations per session",
      metrics: [
        { label: "AI Processing Speed", value: "Real-time" },
        { label: "Stories Generated", value: "2M+" },
      ],
      features: [
        "OpenAI API integration with streaming",
        "AI-customizable narrative generation",
        "Smart prompt engineering for better outputs",
        "Real-time generation feedback with animations",
      ],
      technologies: ["Next.js", "React", "TypeScript", "OpenAI APIs", "Tailwind CSS", "Framer Motion"],
      images: [
        {
          src: "/images/ai-story-maker-1.png",
          alt: "AI Story Maker - Main Interface",
        },
        {
          src: "/images/ai-story-maker-2.png",
          alt: "AI Story Maker - Generated Story",
        },
      ],
      liveUrl: "https://ai-ideas-to-story.vercel.app/",
      githubUrl: "https://github.com/Badech?tab=repositories",
    },
    {
      id: 1,
      title: "Smart Geo Domain Generator",
      featured: true,
      problem: "Domain discovery wastes hours and lacks market intelligence for geographic targeting",
      solution:
        "Built a full-stack search application with real-time API integration, intelligent filtering, and market analytics. Optimized for performance with sub-200ms response times.",
      impact: "10x faster discovery across 500+ entrepreneurs",
      metrics: [
        { label: "Response Time", value: "<200ms" },
        { label: "Uptime", value: "99.9%" },
      ],
      features: [
        "Real-time domain availability checking",
        "Geographic targeting & market segmentation",
        "AI-powered domain recommendations",
        "SEO research integration",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
      images: [
        {
          src: "/images/project-1.png",
          alt: "Smart Geo Domain Generator - Search Interface",
        },
        {
          src: "/images/project-2.png",
          alt: "Smart Geo Domain Generator - Results",
        },
      ],
      liveUrl: "https://smartgeodomaingenerator.vercel.app/",
      githubUrl: "https://github.com/Badech?tab=repositories",
    },
    {
      id: 3,
      title: "Job Application Email Automation",
      featured: false,
      problem: "Job seekers waste 40+ hours on manual application processes across multiple companies",
      solution:
        "Engineered a backend automation service for bulk email delivery with secure authentication, intelligent file handling, and delivery tracking. Built for reliability and scale.",
      impact: "80% time savings, 300+ automated applications per user",
      metrics: [
        { label: "Success Rate", value: "99.2%" },
        { label: "Bulk Capacity", value: "1000s/day" },
      ],
      features: [
        "Secure Gmail automation with app passwords",
        "Bulk recipient management with CSV import",
        "Template engine with intelligent variable substitution",
        "Real-time delivery tracking & reporting",
      ],
      technologies: ["Python", "Flask", "JavaScript", "Email Automation", "File Processing", "Bootstrap"],
      images: [
        {
          src: "/images/job-email-sender-1.png",
          alt: "Job Email Sender - Setup",
        },
        {
          src: "/images/job-email-sender-2.png",
          alt: "Job Email Sender - Application",
        },
      ],
      liveUrl: "https://job-email-sender-jvt8.onrender.com/",
      githubUrl: "https://github.com/Badech?tab=repositories",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
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
              Portfolio
            </Badge>
          </div>
          <h2 className="text-balance mb-6">Production Projects & Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
            Full-stack applications demonstrating my ability to design, build, and deploy scalable solutions. Each
            project showcases real technical skills and delivers measurable business value.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`card-premium overflow-hidden ${project.featured ? "ring-2 ring-primary/20" : ""}`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Images */}
                  <div className="bg-muted/50 p-6 space-y-4">
                    {project.images.map((image, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group"
                      >
                        <div className="relative overflow-hidden rounded-xl border border-border bg-card">
                          <Image
                            src={image.src || "/placeholder.svg?height=300&width=400&query=project"}
                            alt={image.alt}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div className="space-y-6">
                      {project.featured && (
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="text-xs font-semibold text-accent uppercase tracking-wide">Featured</span>
                        </div>
                      )}

                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      </div>

                      {/* Key Metrics - CHANGE: Added metrics for recruiter impact */}
                      <div className="grid grid-cols-2 gap-4 bg-primary/5 p-4 rounded-lg">
                        {project.metrics.map((metric, i) => (
                          <div key={i}>
                            <p className="text-xs font-semibold text-muted-foreground mb-1">{metric.label}</p>
                            <p className="text-lg font-bold text-accent">{metric.value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Case Study Elements */}
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1">Challenge</p>
                          <p className="text-foreground leading-relaxed">{project.problem}</p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1">Technical Approach</p>
                          <p className="text-foreground leading-relaxed">{project.solution}</p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1">Business Impact</p>
                          <div className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <p className="text-foreground font-medium">{project.impact}</p>
                          </div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-3">Key Features</p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="text-sm text-foreground flex items-start gap-2">
                              <span className="text-accent text-lg leading-none">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-primary/5 text-primary hover:bg-primary/10 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                      <Button className="flex-1" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
