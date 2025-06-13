import { animate } from "framer-motion";

export const useSmoothScroll = () => {
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = document.querySelector('header')?.clientHeight || 0;
        const yOffset = -headerHeight + 80;
        
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        animate(window.scrollY, y, {
          duration: 2.4, // Luxuriously slow (2.4 seconds)
          ease: [0.33, 1, 0.68, 1], // Custom "gently accelerating" curve
          onUpdate: (latest) => {
            window.scrollTo(0, latest);
          },
        });
      }
    }
  };

  return { scrollToSection };
};