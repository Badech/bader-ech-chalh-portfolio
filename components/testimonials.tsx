"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
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
      name: "Maria Rodriguez",
      role: "Project Manager",
      company: "Digital Solutions Inc.",
      content:
        "Bader's ability to bridge technical development with marketing strategy makes him a valuable asset. His communication skills and problem-solving approach are outstanding.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Testimonials from colleagues and clients who have experienced my work firsthand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-8 w-8 text-primary" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</blockquote>

                  <div className="border-t border-border pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
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
