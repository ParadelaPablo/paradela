
export default function About() {
  return (
<section id="about" className="scroll-mt-16">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
      About
    </h2>
  </div>
  <div className="flex flex-col gap-4">
    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground lg:px-6">
      FRONTEND · UX/UI · AI AUTOMATION
    </p>
    <p className="text-start text-muted-foreground lg:px-6">
      <span className="text-primary dark:text-white">Fullstack Developer</span> building{" "}
      <span className="text-primary dark:text-white">production products</span> with strong frontend, UX/UI and AI automation focus.
    </p>
    <p className="text-start text-muted-foreground lg:px-6">
      Currently working across scalable internal platforms using{" "}
      <span className="text-primary dark:text-white">React, TypeScript, APIs</span> and modern product workflows.
    </p>
    <p className="text-start text-muted-foreground lg:px-6">
      At Beatly, I own major <span className="text-primary dark:text-white">BO2</span> product areas while contributing across Discovery and Omni, improving interfaces, backend-connected flows, <span className="text-primary dark:text-white">AI-assisted automation</span> initiatives, and <span className="text-primary dark:text-white">Figma-to-production</span> execution.
    </p>
  </div>
</section>
  );
}
