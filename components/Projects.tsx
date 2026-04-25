"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight, X } from "lucide-react";

type ProductWorkCard = {
  title: string;
  subtitle: string;
  description: string;
  impactBullets: string[];
  skills: string[];
  featured: boolean;
  imagePath?: string;
  productUrl: string;
};

type LightboxImage = {
  src: string;
  alt: string;
};

const productWorkCards: ProductWorkCard[] = [
  {
    title: "Beatly BO2",
    subtitle: "Internal Backoffice Platform",
    description:
      "Production internal platform used for campaign operations, teams, payouts, workflows and dashboards. Owned major frontend areas using React + TypeScript, improving UX, reliability, scalable interfaces and AI-assisted internal automation flows.",
    impactBullets: [
      "Reduced friction across campaign operations and internal execution workflows.",
      "Improved consistency and reliability in high-usage backoffice interfaces.",
      "Strengthened day-to-day operational efficiency through AI-assisted internal flows.",
    ],
    skills: [
      "React",
      "TypeScript",
      "UX/UI",
      "Internal Tools",
      "Dashboards",
      "AI Automation",
      "APIs",
      "Product Ownership",
    ],
    featured: true,
    imagePath: "/images/beatly-bo2-campaigns.png",
    productUrl: "https://bo2.beatly.com/",
  },
  {
    title: "Beatly Discovery",
    subtitle: "Creator Discovery & Campaign Curation",
    description:
      "Product focused on creator search, campaign curation and selection workflows. Contributed to frontend improvements, embedded flows, usability enhancements and smoother campaign discovery experiences.",
    impactBullets: [
      "Streamlined creator discovery flows for faster campaign curation decisions.",
      "Improved usability in embedded product journeys used by internal teams.",
      "Enhanced cross-product continuity between discovery and campaign workflows.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Search UX",
      "Campaign Flows",
      "Embedded UI",
      "Frontend",
    ],
    featured: false,
    imagePath: "/images/beatly-discovery.png",
    productUrl: "https://discovery.beatly.com/",
  },
  {
    title: "Beatly Omni",
    subtitle: "Business Operations Platform",
    description:
      "Operational platform supporting internal business processes connected to campaigns and cross-team workflows. Contributed to interface quality, consistency and scalable product improvements.",
    impactBullets: [
      "Increased interface consistency across operational product surfaces.",
      "Supported scalable internal operations through more structured workflows.",
      "Improved cross-team usability in business-critical platform interactions.",
    ],
    skills: ["Product Systems", "UX/UI", "Operations", "Frontend", "Scalable UI"],
    featured: false,
    imagePath: "/images/beatly-omni.png",
    productUrl: "https://omni.beatly.com/",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);

  const openLightbox = (image: LightboxImage) => {
    setSelectedImage(image);
    requestAnimationFrame(() => setIsLightboxVisible(true));
  };

  const closeLightbox = () => {
    setIsLightboxVisible(false);
    setTimeout(() => setSelectedImage(null), 220);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedImage]);

  return (
    <section id="professional-work" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Professional Product Work
        </h2>
      </div>
      <div className="mb-6 lg:px-6">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          SELECTED PRODUCT WORK
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Production platforms and internal tools I&apos;ve contributed to.
        </p>
      </div>
      <>
        {productWorkCards.map((project, index) => (
          <Card
            key={index}
            className={`group mb-5 flex w-full min-h-fit flex-col gap-3 border-transparent p-5 sm:p-6 hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200 ${
              project.featured
                ? "border border-primary/20 bg-primary/5 dark:bg-primary/10"
                : ""
            }`}
          >
            <CardHeader className="p-0">
              {project.imagePath && (
                <div className="mb-4 w-full aspect-video overflow-hidden rounded-xl border border-border/60 shadow-sm">
                  <button
                    type="button"
                    onClick={() =>
                      openLightbox({
                        src: project.imagePath!,
                        alt: `${project.title} preview`,
                      })
                    }
                    className="h-full w-full cursor-pointer"
                    aria-label={`Open ${project.title} preview`}
                  >
                    <Image
                      src={project.imagePath}
                      alt={`${project.title} preview`}
                      width={1600}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    />
                  </button>
                </div>
              )}
              <CardTitle className="text-primary font-bold text-lg leading-tight">
                {project.title}
              </CardTitle>
              <p className="mt-1 text-sm font-semibold text-slate-400">
                {project.subtitle}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 p-0">
              <CardDescription className="text-muted-foreground leading-relaxed">
                {project.description}
              </CardDescription>
              <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                {project.impactBullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-1.5">
                <a
                  href={project.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                >
                  Explore Product →
                  <MoveUpRight className="h-3.5 w-3.5" />
                </a>
                <p className="text-sm text-muted-foreground/80">
                  Source Code: Private Enterprise Repository
                </p>
              </div>
              <CardFooter className="p-0 pt-1 flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
        <div className="lg:px-6 mt-2">
          <a
            href="https://github.com/ParadelaPablo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Additional personal projects available on GitHub.
            <MoveUpRight className="h-4 w-4" />
          </a>
        </div>
      </>
      {selectedImage && (
        <div
          onClick={closeLightbox}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-all duration-200 ${
            isLightboxVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={`relative max-h-[85vh] max-w-[85vw] overflow-hidden rounded-xl shadow-2xl transition-all duration-200 ${
              isLightboxVisible ? "scale-100" : "scale-95"
            }`}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image preview"
              className="absolute right-3 top-3 z-10 rounded-full border border-border/60 bg-background/80 p-1.5 text-foreground transition-colors hover:bg-background"
            >
              <X className="h-4 w-4" />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1920}
              height={1080}
              className="max-h-[85vh] w-auto max-w-[85vw] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
