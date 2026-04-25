import { useEffect, useMemo, useState } from "react";

const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "");
  const sectionKey = useMemo(() => sectionIds.join("|"), [sectionIds]);

  useEffect(() => {
    const ids = sectionKey ? sectionKey.split("|") : [];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const getClosestSection = () => {
      const targetLine = window.innerHeight * 0.4;
      const aboutSection = sections.find((section) => section.id === "about");
      const experienceSection = sections.find(
        (section) => section.id === "experience"
      );

      // Keep About active early in the page flow, even if it is short.
      if (aboutSection && experienceSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const experienceRect = experienceSection.getBoundingClientRect();
        const isAboutVisible = aboutRect.bottom > 0;
        const hasExperienceReachedFocus = experienceRect.top <= targetLine;

        if (isAboutVisible && !hasExperienceReachedFocus) {
          setActiveSection((previous) =>
            previous === "about" ? previous : "about"
          );
          return;
        }
      }

      // Near page bottom, force the final section (e.g. Contact) as active.
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;
      if (nearBottom) {
        const lastSectionId = sections[sections.length - 1]?.id;
        if (lastSectionId) {
          setActiveSection((previous) =>
            previous === lastSectionId ? previous : lastSectionId
          );
          return;
        }
      }

      // Progressive focus-based activation: choose the last section whose top
      // has crossed the visual focus line in the document flow.
      const focusLineInDocument = window.scrollY + targetLine;
      let closestId = sections[0].id;
      sections.forEach((section) => {
        const sectionTopInDocument =
          section.getBoundingClientRect().top + window.scrollY;
        if (sectionTopInDocument <= focusLineInDocument) {
          closestId = section.id;
        }
      });

      setActiveSection((previous) =>
        previous === closestId ? previous : closestId
      );
    };

    let ticking = false;
    const scheduleUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        getClosestSection();
        ticking = false;
      });
    };

    const observer = new IntersectionObserver(
      () => {
        scheduleUpdate();
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sectionKey]);

  return activeSection;
};

export default useActiveSection;
