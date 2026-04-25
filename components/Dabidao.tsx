"use client";
import { MoveUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dabidaoImpactBullets = [
  "Built rapid product concepts from idea to launch",
  "Worked across frontend, UX and product validation",
  "Contributed to live tools and experimental products",
  "Collaborated in AI-assisted workflows and prototypes",
];

const dabidaoTags = [
  "AI",
  "Frontend",
  "Product Thinking",
  "UX/UI",
  "Rapid Prototyping",
  "Shipping",
];

export default function Dabidao() {
  return (
    <section id="dabidao" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Dabidao
        </h2>
      </div>
      <div className="mb-6 lg:px-6">
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          INDEPENDENT AI PRODUCT WORK
        </p>
        <h3 className="mt-1 text-2xl font-bold text-foreground">
          Dabidao AI Lab
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Non-profit AI innovation lab focused on rapid prototyping and launched
          digital products.
        </p>
      </div>
      <Card className="group mb-5 flex w-full min-h-fit flex-col gap-3 border border-primary/20 bg-primary/5 dark:bg-primary/10 lg:p-6 hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
        <CardHeader className="p-0">
          <CardTitle className="text-primary font-bold text-lg leading-tight">
            Dabidao
          </CardTitle>
          <p className="mt-1 text-sm font-semibold text-slate-400">
            Product Builder · Frontend · AI Prototyping
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 p-0">
          <CardDescription className="text-muted-foreground leading-relaxed">
            Contributed to experimental product ideas, user-facing tools and
            rapid concept-to-launch initiatives across multiple digital
            platforms.
          </CardDescription>
          <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
            {dabidaoImpactBullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <div className="flex flex-col gap-1.5">
            <a
              href="https://dabidao.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
            >
              Visit Lab →
              <MoveUpRight className="h-3.5 w-3.5" />
            </a>
            <p className="text-sm text-muted-foreground/80">
              Source Code: Private / Collaborative Projects
            </p>
          </div>
          <CardFooter className="p-0 pt-1 flex flex-wrap gap-2">
            {dabidaoTags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </CardFooter>
        </CardContent>
      </Card>
    </section>
  );
}
