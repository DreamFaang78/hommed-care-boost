import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export { gsap, ScrollTrigger, useGSAP };

/** Detect prefers-reduced-motion (SSR-safe). */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/** Count-up number, triggered when scrolled into view. */
export function CountUp({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.2,
  className,
  formatComma = true,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  formatComma?: boolean;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduced = useReducedMotion();

  const format = (n: number) => {
    const fixed = n.toFixed(decimals);
    if (!formatComma) return fixed;
    // Indian-style thousand separators would be nice, but a plain , is fine here.
    const [intPart, decPart] = fixed.split(".");
    const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decPart ? `${withCommas}.${decPart}` : withCommas;
  };

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (reduced) {
        el.textContent = `${prefix}${format(target)}${suffix}`;
        return;
      }
      el.textContent = `${prefix}${format(0)}${suffix}`;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = `${prefix}${format(obj.v)}${suffix}`;
        },
      });
    },
    { scope: ref, dependencies: [target, reduced] },
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(reduced ? target : 0)}
      {suffix}
    </span>
  );
}

/** Scroll-triggered fade-up reveal for children marked with .reveal. */
export function useRevealOnScroll(
  scopeRef: React.RefObject<HTMLElement | null>,
  opts?: { y?: number; stagger?: number; selector?: string },
) {
  const reduced = useReducedMotion();
  useGSAP(
    () => {
      if (reduced || !scopeRef.current) return;
      const targets = scopeRef.current.querySelectorAll(
        opts?.selector ?? ".reveal",
      );
      if (!targets.length) return;
      gsap.from(targets, {
        opacity: 0,
        y: opts?.y ?? 20,
        duration: 0.5,
        ease: "power2.out",
        stagger: opts?.stagger ?? 0.09,
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: scopeRef, dependencies: [reduced] },
  );
}
