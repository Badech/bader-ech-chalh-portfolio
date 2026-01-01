"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Brain, Zap, Workflow, Lightbulb } from "lucide-react"

export function AISpecialization() {
  const specializations = [
    {
      icon: Brain,
      title: "AI API Integration",
      description:
        "Seamless integration of OpenAI, Azure AI, and other AI services. I architect solutions that leverage cutting-edge models for content generation, data analysis, and intelligent automation.",
      capabilities: [
        "OpenAI API Integration",
        "Prompt Engineering",
        "AI Model Selection",
        "Streaming Responses",
        "Error Handling",
      ],
    },
    {
      icon: Workflow,
      title: "Automation Workflows",
      description:
        "Design and build intelligent automation workflows that reduce manual tasks by 80%+. From email campaigns to data processing, I create systems that work 24/7.",
      capabilities: [
        "Email Automation",
        "Data Processing Pipelines",
        "Scheduled Workflows",
        "Bulk Operations",
        "Event-Driven Automation",
      ],
    },
    {
      icon: Lightbulb,
      title: "Intelligent Features",
      description:
        "Add AI-powered features to existing applications. Content recommendations, smart search, AI chatbots, automated reporting—all integrated with your existing systems.",
      capabilities: [
        "Content Generation",
        "Smart Recommendations",
        "AI Chatbots",
        "Predictive Analysis",
        "Automated Reporting",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimize AI applications for speed and cost. Caching strategies, model selection, prompt optimization, and infrastructure scaling for production-grade systems.",
      capabilities: [
        "Response Time Optimization",
        "Cost Reduction",
        "Caching Strategies",
        "Load Balancing",
        "Scalability",
      ],
    },
  ]

  return (
    <section id="ai-specialization" className="py-20 bg-primary/5">
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
              Specialization
            </Badge>
          </div>
          <h2 className="text-balance mb-6">AI & Automation Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
            I specialize in integrating AI tools into production applications and building intelligent automation
            workflows. Whether you need AI capabilities added to your app or a complete automation solution—I deliver
            enterprise-grade implementations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-premium h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <spec.icon className="h-8 w-8 text-accent flex-shrink-0" />
                    <CardTitle className="text-xl">{spec.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground leading-relaxed">{spec.description}</p>

                  <div className="pt-2 border-t border-border">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">Key Capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      {spec.capabilities.map((capability) => (
                        <Badge
                          key={capability}
                          variant="secondary"
                          className="bg-accent/10 text-accent hover:bg-accent/20 text-xs"
                        >
                          {capability}
                        </Badge>
                      ))}
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
