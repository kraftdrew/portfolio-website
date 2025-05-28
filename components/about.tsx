import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "Expert in JavaScript, TypeScript, React.js, Node.js, and Laravel with 5+ years of experience",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Cloud & AWS Solutions",
      description:
        "Specialized in AWS services including SQS, EventBridge, Lambda, and Step Functions for scalable architecture",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Technical Leadership",
      description: "Successfully led cross-functional teams of 15+ members across development, design, DevOps, and QA",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Collaboration",
      description: "Proven track record coordinating with remote teams across the US, Australia, and Nepal",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Senior Software Engineer with 5+ years of expertise in full-stack development, specializing in
                JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS cloud solutions.
              </p>
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I excel at designing scalable, secure, and efficient systems with a proven track record of delivering
                impactful solutions in highly regulated environments, including healthcare projects with HIPAA and SOC2
                compliance. My experience spans from optimizing system performance to mentoring teams and achieving
                sustained technical excellence across global, cross-functional teams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
