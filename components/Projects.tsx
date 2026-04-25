"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const myProjects = [
  {
    imagePath: "https://raw.githubusercontent.com/ParadelaPablo/project-images/main/wanderwise.png",
    title: "WanderWise - Travel Planner",
    description:
      "Solves the complexity of road-trip planning by centralizing route organization, destination discovery, and travel cost visibility. I built a fullstack travel planning product focused on clear user flows and practical trip management. Tech used: React, Node.js, Express, MongoDB, HTML, and CSS.",
    skills: ["React", "Node.js", "Express", "MongoDB", "CSS", "HTML"],
    links: [
      { label: "Source Code", url: "https://github.com/ParadelaPablo/wanderwise" },
    ],
  },
  {
    imagePath: "https://raw.githubusercontent.com/ParadelaPablo/project-images/main/collabtask.png",
    title: "CollabTask - Task Manager",
    description:
      "Solves team coordination challenges by giving collaborators a shared workspace to organize tasks, assign ownership, and track progress. I built an end-to-end task management application across frontend and backend layers. Tech used: React, TypeScript, Java, Spring Boot, PostgreSQL, and Render.",
    skills: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Render",
    ],
    links: [
      { label: "Live Demo", url: "https://collabtask-frontend.onrender.com/" },
      { label: "Source Code", url: "https://github.com/ParadelaPablo/task-manager" },
    ],
  },
  {
    imagePath: "https://raw.githubusercontent.com/ParadelaPablo/project-images/main/indracafe.png",
    title: "Indra Cafe - Website",
    description:
      "Solves the need for a clear digital presence for a local cafe with a lightweight and easy-to-navigate website. I built and structured the full frontend experience to showcase the menu, location, and gallery with a clean visual hierarchy. Tech used: HTML and CSS.",
    skills: ["HTML", "CSS"],
    links: [
      { label: "Live Demo", url: "https://indracafe.onrender.com/" },
      { label: "Source Code", url: "https://github.com/ParadelaPablo/IndraCafe" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {myProjects.map((project, index) => (
          <Card
            key={index}
            className="group lg:p-6 mb-5 flex flex-col lg:flex-row w-full min-h-fit gap-3 lg:gap-6 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full lg:w-1/3 mb-3 lg:mb-0 p-0">
              <Image
                src={project.imagePath}
                alt={`Screenshot of ${project.title}`}
                width={1920}
                height={1080}
                priority
                className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-3 p-0 w-full lg:w-2/3">
              <p className="text-primary font-bold text-lg leading-tight">
                {project.title}
              </p>
              <CardDescription className="text-muted-foreground leading-relaxed">
                {project.description}
              </CardDescription>
              <CardFooter className="p-0 pt-1 flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex}>{skill}</Badge>
                ))}
              </CardFooter>
              <CardFooter className="p-0 pt-1 flex flex-wrap gap-4">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
                  >
                    {link.label}
                    <MoveUpRight className="h-4 w-4" />
                  </a>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
    </section>
  );
}
