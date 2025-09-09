"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Bader Ech-chalh</h3>
            <p className="text-muted-foreground">Email Marketing Specialist & Developer</p>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="mailto:Bradechchalh@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/bader-ech-chalh-6b651517b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              © {currentYear} Bader Ech-chalh. Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              and passion for great code.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
