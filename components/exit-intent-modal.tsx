"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Calendar } from "lucide-react"

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of page (typical exit intent)
      if (e.clientY <= 0) {
        const hasSeenModal = localStorage.getItem("exitIntentSeen")
        if (!hasSeenModal) {
          setIsOpen(true)
          localStorage.setItem("exitIntentSeen", "true")
        }
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Let's Work Together</DialogTitle>
          <DialogDescription className="text-base mt-2">
            Interested in connecting? I'm available for full-time positions, contract work, and projects. Let's discuss
            what you have in mind.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-6">
          <Button className="w-full bg-accent hover:bg-accent/90" size="lg" asChild>
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Interview
            </a>
          </Button>
          <Button variant="outline" className="w-full bg-transparent" size="lg" asChild>
            <a href="mailto:bader.echchalh1@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Send me an Email
            </a>
          </Button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Continue browsing
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
