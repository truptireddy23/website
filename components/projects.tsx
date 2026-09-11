import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    id: 1,
    title: 'AI Document Intelligence Platform',
    description: 'AI-powered platform to extract, process, and summarize unstructured documents using Python, OCR, and LLMs, with a RAG-based chatbot for document Q&A.',
    image: '/project-docs.png',
    tags: ['Python', 'OCR', 'LLMs', 'RAG'],
  },
  {
    id: 2,
    title: 'Ticketmaster Event Data Pipeline & BI Dashboard',
    description: 'End-to-end ETL pipeline integrating 50,000+ event records using Python, SQL, REST APIs, with Tableau dashboards for pricing and trend analysis.',
    image: '/project-pipeline.png',
    tags: ['ETL', 'Python', 'SQL', 'Tableau'],
  },
  {
    id: 3,
    title: 'Rainfall Analyzer Dashboard & Prediction System',
    description: 'Machine learning prediction model analyzing 50+ years of rainfall data with interactive Power BI and Python Dash dashboards.',
    image: '/project-rainfall.png',
    tags: ['ML', 'Power BI', 'Python', 'Dash'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32 bg-background/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-balance">Featured Projects</h2>
          <p className="text-lg text-foreground/60">A showcase of my technical journey</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-500/50 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardHeader className="flex-1">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-foreground/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:border-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                >
                  <a href="https://github.com/truptireddy23" target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
