"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Quote, Star, CheckCircle2 } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Jamal Oukazzou",
      role: "Team Leader",
      company: "E-Market Solutions",
      content:
        "Bader consistently delivered exceptional email marketing campaigns that exceeded our performance targets. His expertise in AWS and Azure platforms helped us scale our operations efficiently.",
      rating: 5,
    },
    {
      name: "Ahmed El-Mansouri",
      role: "Senior Developer",
      company: "VPI Info",
      content:
        "Working with Bader on database optimization projects was a pleasure. His SQL skills and attention to detail significantly improved our application performance.",
      rating: 5,
    },
    {
      name: "Fatima Benali",
      role: "Project Manager",
      company: "Digital Solutions Inc.",
      content:
        "Bader's ability to bridge technical development with marketing strategy makes him a valuable asset. His communication skills and problem-solving approach are outstanding.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
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
              Social Proof
            </Badge>
          </div>
          <h2 className="text-balance mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
            Verified feedback from engineering leaders, project managers, and colleagues who have directly experienced
            my technical abilities and collaborative approach to problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-premium h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Header with quote and rating */}
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="h-8 w-8 text-accent/40" />
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-foreground font-medium mb-6 text-pretty flex-1">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author info */}
                  <div className="border-t border-border pt-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <Badge variant="outline" className="text-accent border-accent/30 text-xs font-medium">
                      {testimonial.company}
                    </Badge>
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
