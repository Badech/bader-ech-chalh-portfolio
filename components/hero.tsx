"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Linkedin, Github, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <p className="text-primary font-semibold text-lg tracking-wide">Full-Stack Developer</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-balance mb-6"
          >
            Full-Stack Developer & Email Marketing Specialist
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl text-pretty"
          >
            I build fast, scalable web applications and automate complex business processes. Full-stack expertise across
            React, Next.js, AWS, and Azure—delivered as production-ready solutions that drive measurable business
            results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90" asChild>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Interview
              </a>
            </Button>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Reach Out Now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3 mb-16"
          >
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <p className="text-sm font-medium text-muted-foreground">
              Available for full-time positions and contract roles
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <span className="text-sm text-muted-foreground font-medium">Connect with me</span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/bader-ech-chalh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Badech?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:bader.echchalh1@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground/50 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
