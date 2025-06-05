"use client"

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
        "End to end DE projects with Databricks, Azure and PowerBI.",
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
    {
      mainTags: ["Frontend Development"],
      title: "Portfolio Website",
      image: "/images/portfolio-website.png",
      gif: "/images/portfolio-website.gif",
      description:
        "My personal portfolio website, built with Next.js, Tailwind CSS, and TypeScript.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      codeLink: "https://github.com/kraftdrew/portfolio-website",
      liveLink: "https://www.andrewkravchuk.com", 
    },
    {
      mainTags: ["Database system design"],
      title: "Grocery warehouse database in 3NF",
      image: "/images/warehouse-database.png",
      gif: "",
      description:
        "Database system design for PostgreSQL in 3NF.",
      tags: ["PostgreSQL", "ERD", "3NF", "OLTP"],
      codeLink: "https://github.com/kraftdrew/warehouse-db",
      liveLink: "", 
    },
    {
      mainTags: ["Data Engineering"],
      title: "ETL Pipelines with Pandas on Snowflake",
      image: "/images/etl-snowflake.png",
      gif: "",
      description:
        "ETL pipelines with Pandas on Snowflake, with a focus on data quality and performance.",
      tags: ["Snowflake", "Pandas", "Python"],
      codeLink: "https://github.com/kraftdrew/ETL-with-pandas-on-snowflake",
      liveLink: "", 
    },
  ]

  const articles = [
    {
      title: "Deploying Python Code to Databricks Using .whl Files",
      description: "A step-by-step guide to packaging and deploying Python code to Databricks using wheel (.whl) files.",
      image: "/images/articles/wheel-article.png",
      link: "https://www.notion.so/Deploying-Python-Code-to-Databricks-Using-whl-Files-20749e74cc4b80dc9e20f196ded1bf64?source=copy_link",
    },
    {
      title: "Apache Airflow 3.0",
      description: "Airflow 3.0 introduces major architectural enhancements, native event-driven scheduling, asset-based workflows, and improved version control, significantly transforming data pipeline orchestration.",
      image: "/images/articles/airflow-3.png",
      link: "https://www.notion.so/Apache-Airflow-3-0-20949e74cc4b8002b929c56fa2380c5d",
    },
    {
      title: "Airflow XCom: A Practical Guide",
      description: "A practical guide to using Airflow XComs for effective task-to-task communication in your workflows.",
      image: "/images/articles/airflow-xcom.png",
      link: "https://www.notion.so/Airflow-XCom-A-Practical-Guide-20949e74cc4b80df80aee508b882d87d",
    },
  ];

  return (
    <>
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
                  const hasCardLink = !!cardLink;
                  const CardWrapper = hasCardLink ? 'a' : 'div';
                  return (
                    <CardWrapper
                      key={index}
                      {...(hasCardLink ? {
                        href: cardLink,
                        target: "_blank",
                        rel: "noopener noreferrer"
                      } : {})}
                      className={`project-card${project.gif && project.gif !== "" ? " has-gif" : ""} block no-underline hover:no-underline focus:no-underline w-full md:max-w-[400px]`}
                      style={{ cursor: hasCardLink ? 'pointer' : 'default' }}
                    >
                      <Card className="overflow-hidden h-full flex flex-col project-card">
                        <CardContent className="project-content flex-1 flex flex-col p-5">
                          <div className="mb-2 flex flex-wrap gap-2">
                            {project.mainTags.map((tag, i) => (
                              <span key={i} className="project-main-tag">{tag}</span>
                            ))}
                          </div>
                          {project.image && (
                            <div className="project-image-wrapper mb-3 w-full aspect-[16/9] bg-gray-100 relative overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className={`project-image static-img${project.gif ? '' : ' always-visible'} w-full h-full object-cover`}
                                style={{ position: project.gif ? 'absolute' : 'relative' }}
                              />
                              {project.gif && project.gif !== "" && (
                                <img
                                  src={project.gif}
                                  alt={project.title}
                                  className="project-image gif-img w-full h-full object-cover"
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
                            {project.codeLink && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="mr-2"
                                onClick={e => { e.stopPropagation(); window.open(project.codeLink, '_blank', 'noopener,noreferrer'); }}
                              >
                                <Github className="mr-1 h-4 w-4" /> Code
                              </Button>
                            )}
                            {project.liveLink && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={e => { e.stopPropagation(); window.open(project.liveLink, '_blank', 'noopener,noreferrer'); }}
                              >
                                <ExternalLink className="mr-1 h-4 w-4" /> Live
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </CardWrapper>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Articles Section */}
      <section id="articles" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Articles</h2>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {articles.map((article, idx) => (
                  <a
                    key={idx}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block max-w-md w-full p-6 bg-card border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 no-underline h-full"
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="mb-4 w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                        <p className="text-muted-foreground mb-2 text-base">{article.description}</p>
                      </div>
                      <span className="text-primary font-medium text-base mt-4">Read Article →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
