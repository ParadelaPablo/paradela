"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Nov 2025 — Present",
    currentPosition: "Fullstack Developer • Beatly",
    place: "",
    previousPositions: [
      "Frontend, UX/UI, AI Automation & Product Systems",
    ],
    description:
      "Building and improving production internal platforms for campaign operations, creator workflows and business automation. Owned major frontend areas of BO2 using React + TypeScript, while contributing to UX design, Figma implementation, AI-assisted workflow initiatives, and cross-product improvements across BO2, Discovery and Omni.",
    skills: [
      "React",
      "TypeScript",
      "Frontend Architecture",
      "UX/UI",
      "Figma to Production",
      "AI Workflow Automation",
      "Internal Tools",
      "API Integrations",
      "Accessibility",
      "Product Ownership",
    ],
    links: [],
    featured: true,
  },
  {
    timeline: "Sep 2024 — Dec 2024",
    currentPosition: "Full Stack Java Developer",
    place: "SALT - School of Applied Technology",
    previousPositions: [],
    description:
      "Completed an intensive full stack program focused on Java, Spring Boot, PostgreSQL, REST APIs, and modern frontend delivery with React and TypeScript.",
    skills: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "React",
      "TypeScript",
      "Team Collaboration",
    ],
    links: [],
    featured: false,
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Professional Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className={`lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200 ${
              job.featured
                ? "border border-primary/20 bg-primary/5 dark:bg-primary/10"
                : ""
            }`}
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.place
                  ? `${job.currentPosition} • ${job.place}`
                  : job.currentPosition}
              </p>
              {job.previousPositions
                .filter(Boolean)
                .map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
                ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
              {job.links.length > 0 && (
                <CardFooter className="p-0 mt-4 flex flex-wrap gap-3">
                  {job.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </CardFooter>
              )}
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12 flex flex-col gap-4">
  <a
    href="/am-resume-2024.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center font-medium leading-tight text-foreground group"
  >
    <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
      View Full Resume
    </span>
    <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
  </a>
  <a
    href="/am-resume-2024.pdf"
    download="Pablo_Paradela_CV.pdf"
    className="inline-flex items-center font-medium leading-tight text-foreground group"
  >
    <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
      Download Full Resume
    </span>
    <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
  </a>
</div>


    </section>
  );
}
