"use client";
import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import { Background, Nav, ScrollProgress } from "@/components/Chrome";
import { Cursor, Loader, SmoothScroll } from "@/components/Effects";
import { Now, ResumeSection } from "@/components/NowResume";
import ExecutiveHero from "@/components/Executive";
import Media from "@/components/Media";
import { About, Achievements, Footer, Marquee, Strengths } from "@/components/Sections";

export default function Site() {
  useEffect(() => {
    document.body.dataset.site = "executive";
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Loader label="BW" />
      <SmoothScroll />
      <Cursor />
      <ScrollProgress />
      <Background />
      <Nav />
      <main>
        <ExecutiveHero />
        <About />
        <Now />
        <Achievements />
        <Marquee />
        <Media />
        <Strengths />
        <ResumeSection />
      </main>
      <Footer />
    </MotionConfig>
  );
}
