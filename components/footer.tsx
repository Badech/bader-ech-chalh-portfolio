"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Heart, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:bader.echchalh1@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bader-ech-chalh/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Badech?tab=repositories",
      label: "GitHub",
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-4">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-primary">Bader Ech-chalh</h3>
            <p className="text-muted-foreground max-w-md mx-auto text-pretty text-sm">
              Full-Stack Developer & AI Integration Specialist building intelligent solutions
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-3 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
              >
                <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Divider and copyright */}
          <div className="border-t border-border pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                © {currentYear} Bader Ech-chalh. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
                <Badge variant="outline" className="text-xs">
                  Next.js
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
