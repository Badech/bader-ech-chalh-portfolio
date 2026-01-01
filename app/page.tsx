import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { AISpecialization } from "@/components/ai-specialization"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ExitIntentModal } from "@/components/exit-intent-modal"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AISpecialization />
        <Services />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ExitIntentModal />
    </div>
  )
}
