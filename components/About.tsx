
export default function About() {
  return (
<section id="about" className="scroll-mt-16">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
      About
    </h2>
  </div>
  <div className="flex flex-col gap-4">
    <p className="text-start text-muted-foreground lg:px-6">
      Fullstack Developer building production products with strong frontend, UX/UI and AI automation focus.
    </p>
    <p className="text-start text-muted-foreground lg:px-6">
      Currently working across scalable internal platforms using React, TypeScript, APIs and modern product workflows.
    </p>
    <p className="text-start text-muted-foreground lg:px-6">
      At Beatly, I own major BO2 product areas while contributing across Discovery and Omni, improving interfaces, backend-connected flows, AI-assisted automation initiatives, and Figma-to-production execution.
    </p>
  </div>
</section>
  );
}
