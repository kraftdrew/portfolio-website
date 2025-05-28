import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      category: "Cloud & Data Platforms",
      skills: ["Snowflake", "Databricks", "Azure Data Factory", "Azure Synapse", "Azure SQL", "Azure Data Lake", "MS Fabric", "MS SQL Server"],
    },
    {
      category: "BI & Analytics",
      skills: ["Power BI", "Power BI Embedded", "Data Analysis", "Data Visualization", "Excel", "SSAS"],
    },
    {
      category: "Programming & Frameworks",
      skills: ["Python", "PySpark", "SQL", "dbt", "Power Query (M)", "Unit Testing"],
    },
    {
      category: "Data Engineering & ETL",
      skills: ["ETL/ELT Pipelines", "SSIS", "Airflow", "Data Modeling", "Data Migration", "Data Integration"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub Actions", "CI/CD", "Cloud Computing", "Data Governance"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technical expertise and professional competencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card">
                <Card className="h-full border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 