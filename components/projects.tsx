import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      mainTags: ["Data Engineering", "BI"],
      title: "Stock Market end-to-end ETL + BI",
      image: "/images/stock-market.png",
      gif: "/images/stock-market.gif",
      description:
        "End to end ETL pipeline for stock market data, with a PowerBI dashboard for visualization.",
      tags: ["Databricks", "Azure", "Python", "PowerBI", "VNet", "KeyVault"],
      codeLink: "https://github.com/kraftdrew/azure-stock-market",
      liveLink: "https://app.powerbi.com/view?r=eyJrIjoiNzFiOGZlZGQtZjdjYi00NTQ0LWI0OGYtNzYxMzY1YzA4NzlhIiwidCI6ImM1OGE5N2E3LTkzZTEtNDI4NC05ZDY5LWM2NzUyYmFmNzdhZiJ9",
    },
    {
      mainTags: ["BI"],
      title: "Oil & Gas incidents report",
      image: "/images/sustaiment-report.png",
      gif: "/images/sustaiment-report.gif",
      description:
        "Power Bi report styled to web page, presenting incidents data for oil and gas industry.",
      tags: ["PowerBI"],
      codeLink: "https://github.com/kraftdrew/power-bi-reports/tree/main/src/oil-gas-incidents-report",
      liveLink: "https://app.powerbi.com/view?r=eyJrIjoiZDkzYTBiZDctMDUyZi00OGI2LThiNGEtNjU0ODg1YzExNDM5IiwidCI6IjAyOTE4OGU3LTE1MjgtNDE4Zi1iY2RlLTQxNzQzZDEwNjI2ZCIsImMiOjN9",
    },
    {
      mainTags: ["BI"],
      title: "Data Jobs Report",
      image: "/images/data-jobs-report.png",
      gif: "/images/data-jobs-report.gif",
      description:
        "Data Job market report, with a focus on the skills and salary",
      tags: ["PowerBI"],
      codeLink: "https://github.com/kraftdrew/power-bi-reports/tree/main/src/data-jobs-report",
      liveLink: "https://app.powerbi.com/view?r=eyJrIjoiYzAxYjRlNzQtN2JjMC00NWY2LWJhMDktMWE5ZjRiYjhkYTM5IiwidCI6IjAyOTE4OGU3LTE1MjgtNDE4Zi1iY2RlLTQxNzQzZDEwNjI2ZCIsImMiOjN9", 
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            {/* <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and professional projects
            </p> */}
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 mx-auto px-2">
              {projects.map((project, index) => {
                const cardLink = project.liveLink || project.codeLink;
                return (
                  <div
                    key={index}
                    className={`project-card${project.gif && project.gif !== "" ? " has-gif" : ""} block no-underline hover:no-underline focus:no-underline w-full md:max-w-[400px]`}
                    style={{ cursor: 'pointer' }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col project-card">
                      <CardContent className="project-content flex-1 flex flex-col p-5">
                        <div className="mb-2 flex flex-wrap gap-2">
                          {project.mainTags.map((tag, i) => (
                            <span key={i} className="project-main-tag">{tag}</span>
                          ))}
                        </div>
                        {project.image && (
                          <div className="project-image-wrapper mb-3">
                            <img
                              src={project.image}
                              alt={project.title}
                              className={`project-image static-img${project.gif ? '' : ' always-visible'}`}
                              style={{ position: project.gif ? 'absolute' : 'relative' }}
                            />
                            {project.gif && project.gif !== "" && (
                              <img
                                src={project.gif}
                                alt={project.title}
                                className="project-image gif-img"
                              />
                            )}
                          </div>
                        )}
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                        <div className="project-tags mt-3">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="project-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="project-links mt-4">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-1 h-4 w-4" /> Code
                            </Link>
                          </Button>
                          {project.liveLink && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-1 h-4 w-4" /> Live
                              </Link>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
