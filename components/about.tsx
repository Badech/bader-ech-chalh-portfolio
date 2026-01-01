"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MapPin, Calendar, Award, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function About() {
  const highlights = [
    "Built 3 production apps with 99.9% uptime across 10k+ users",
    "Expert in AI integration and automation workflows using modern APIs",
    "Designed cloud architectures on AWS and Azure with cost optimization",
    "Led full-stack development from concept to deployment at scale",
  ]

  return (
    <section id="about" className="py-20 bg-background">
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
              About Me
            </Badge>
          </div>
          <h2 className="text-balance mb-6">Full-Stack Developer & AI Integration Specialist</h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
            I architect intelligent web applications that leverage AI tools for automation and scale. From frontend to
            backend to deployment—I deliver production-ready solutions that solve complex problems with elegant,
            maintainable code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-premium overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/bader-photo.jpg"
                    alt="Bader Ech-chalh - Professional Photo"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card-premium p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Location</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Kenitra, Morocco</p>
                </div>
                <div className="card-premium p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Experience</span>
                  </div>
                  <p className="text-sm text-muted-foreground">2+ Years in Tech</p>
                </div>
                <div className="card-premium p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Award className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Certified</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>✓ IBM Web Development Certified</p>
                    <p>✓ Microsoft Azure AI Fundamentals</p>
                  </div>
                </div>
                <div className="card-premium p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Status</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Open to Opportunities</p>
                </div>
              </div>
            </div>

            {/* Key achievements */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h4 className="font-semibold mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">English (Native)</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Arabic (Native)</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">French (Professional)</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
