"use client";

import React, { useRef, useEffect, useState } from "react";

export default function AnimatedGuideLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      // Find the hero subtitle (starting point - bottom of hero section)
      const heroSubtitle = document.querySelector("[data-hero-subtitle]");
      // Find the baseline selector text (ending point)
      const baselineText = document.querySelector("[data-baseline-text]");
      // Find the parent container
      const parentContainer = lineRef.current?.parentElement;

      if (heroSubtitle && baselineText && lineRef.current && parentContainer) {
        const parentRect = parentContainer.getBoundingClientRect();
        const heroRect = heroSubtitle.getBoundingClientRect();
        const baselineRect = baselineText.getBoundingClientRect();

        // Calculate positions relative to parent container
        // Start from bottom of hero subtitle to fill the gap
        // Add padding for breathing room (8px top, 8px bottom)
        const paddingTop = 12;
        const paddingBottom = 8;
        const startY = heroRect.bottom - parentRect.top + paddingTop;
        const endY = baselineRect.top - parentRect.top - paddingBottom;
        const calculatedHeight = endY - startY;

        if (calculatedHeight > 0) {
          setHeight(calculatedHeight);
          setTop(startY);
        }
      }
    };

    // Initial calculation with multiple attempts to ensure DOM is ready
    updateHeight();
    const timeout1 = setTimeout(updateHeight, 100);
    const timeout2 = setTimeout(updateHeight, 300);
    const timeout3 = setTimeout(updateHeight, 500);

    // Recalculate on resize
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div
      ref={lineRef}
      className="absolute left-1/2 -translate-x-1/2 w-[3px] animated-vertical-line z-10 pointer-events-none"
      style={{
        height: height > 0 ? `${height}px` : "0px",
        top: top > 0 ? `${top}px` : "0px",
        opacity: height > 0 ? 1 : 0,
      }}
    />
  );
}
