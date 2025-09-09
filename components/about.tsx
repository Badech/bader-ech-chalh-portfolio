"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MapPin, Calendar, Award } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about creating impactful digital solutions and driving results through innovative technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-8">
                  <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="/images/bader-photo.jpg"
                      alt="Bader Ech-chalh - Professional Photo"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Results-driven Email Marketing Specialist and Database Developer with 2+ years of experience at E-Market
                Solutions and VPI Info. I specialize in cloud platforms (AWS, Azure), email marketing automation, and
                database optimization, consistently delivering high-performance campaigns and robust SQL Server
                solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">Kenitra, Morocco</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm">2+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm">IBM Certified</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Innovation</Badge>
                <Badge variant="secondary">Quality</Badge>
                <Badge variant="secondary">Collaboration</Badge>
                <Badge variant="secondary">Continuous Learning</Badge>
                <Badge variant="secondary">Problem Solving</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Languages</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-muted-foreground">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>Arabic</span>
                  <span className="text-muted-foreground">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>French</span>
                  <span className="text-muted-foreground">Professional</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
