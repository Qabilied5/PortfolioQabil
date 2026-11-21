"use client";

import { useEffect, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Global GSAP configuration. Per-component animations should use `useGSAP`
 * from "@/lib/gsap" and gsap.matchMedia() for reduced-motion handling.
 */
export default function AnimationProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.defaults({ ease: "power3.out", duration: 0.8 });
  }, []);

  return <>{children}</>;
}