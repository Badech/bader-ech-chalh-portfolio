"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Brain, Code2, Zap, Wrench } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Web Applications",
      description:
        "Full-stack applications with integrated AI capabilities. From content generation to intelligent automation, I build modern apps that leverage cutting-edge AI APIs.",
      forWho: "Startups and businesses needing AI-enhanced solutions",
      value: "Production-ready AI apps built in weeks, not months",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Custom web applications built with modern frameworks. React, Next.js, TypeScript, and cloud platforms—everything you need for scalable, performant solutions.",
      forWho: "Companies needing robust custom applications",
      value: "Scalable apps that grow with your business",
    },
    {
      icon: Zap,
      title: "Automation Workflows & Integration",
      description:
        "Design and deploy intelligent automation systems. Email campaigns, data processing, API integrations—all connected and optimized for efficiency.",
      forWho: "Teams looking to reduce manual work by 80%+",
      value: "24/7 automation that increases productivity",
    },
    {
      icon: Wrench,
      title: "Maintenance & Optimization",
      description:
        "Keep your applications running at peak performance. Updates, security patches, performance optimization, and feature enhancements—ongoing expert support.",
      forWho: "Teams maintaining production applications",
      value: "Faster load times, improved uptime, reduced technical debt",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/50">
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
              Services
            </Badge>
          </div>
          <h2 className="text-balance mb-6">How I Can Help</h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
            I solve specific technical challenges with proven expertise. Whether you need AI integration, custom
            development, or intelligent automation—I deliver measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-premium h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground leading-relaxed">{service.description}</p>

                  <div className="space-y-3 pt-2 border-t border-border">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">For</p>
                      <p className="text-sm text-foreground">{service.forWho}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Value Delivered</p>
                      <p className="text-sm font-medium text-accent">{service.value}</p>
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
