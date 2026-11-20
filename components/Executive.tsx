"use client";
/** Hero: editorial layout, light grey / charcoal / denim, from Brendan's headshot. */
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { now, profile } from "@/content/profile";
import { Magnetic } from "./Effects";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="mask" style={{ display: "block" }}>
      <motion.span
        className={`mask-inner ${className ?? ""}`}
        style={{ display: "block" }}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ delay, duration: 1.1, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function ExecutiveHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const archY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const outlineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 110, damping: 16 });
  const sry = useSpring(ry, { stiffness: 110, damping: 16 });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => {
      ry.set((e.clientX / window.innerWidth - 0.5) * 10);
      rx.set(-(e.clientY / window.innerHeight - 0.5) * 8);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [rx, ry]);

  const linkedin = profile.contact.links.find((l) => l.label === "LinkedIn")!;

  return (
    <section className="exec-hero" id="top" ref={ref}>
      <div className="container">
        <motion.div
          className="exec-meta mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <span>Portfolio · {new Date().getFullYear()}</span>
          <span className="exec-hide-sm">{profile.location}</span>
          <span className="exec-avail">
            <i /> Leading technology at Ramsey
          </span>
        </motion.div>

        <div className="exec-grid">
          <motion.div className="exec-copy" style={{ y: textY }}>
            <motion.div
              className="exec-eyebrow mono"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
            >
              {now.venture.role} · {now.venture.name}
            </motion.div>
            <h1 className="exec-name">
              <Line delay={1.05}>{profile.firstName}</Line>
              <Line delay={1.18} className="exec-italic">
                {profile.name.split(" ").slice(1).join(" ")}.
              </Line>
            </h1>
            <motion.p
              className="exec-lead"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease }}
            >
              Technology leader at <strong>Ramsey Solutions</strong>, lifelong entrepreneur, and accredited Kanban trainer.
              Building consumer software since the late 1990s and teaching leaders to <strong>act or argue</strong>.
            </motion.p>
            <motion.div
              className="exec-ctas"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.8, ease }}
            >
              <Magnetic>
                <a className="btn btn-primary" href={linkedin.href} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn <span aria-hidden>↗</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a className="btn" href="#media">
                  Listen to interviews
                </a>
              </Magnetic>
            </motion.div>

            <motion.dl
              className="exec-facts"
              initial="h"
              animate="s"
              variants={{ s: { transition: { staggerChildren: 0.1, delayChildren: 1.7 } } }}
            >
              {[
                { k: "CTO", v: "Ramsey Solutions", d: "2022 – now" },
                { k: "Founder", v: "ArtistData", d: "and HUGE I/O" },
                { k: "Course", v: "Starting Kanban", d: "Addison-Wesley, 2020" },
              ].map((f) => (
                <motion.div key={f.k} variants={{ h: { opacity: 0, y: 14 }, s: { opacity: 1, y: 0 } }} transition={{ duration: 0.7, ease }}>
                  <dt className="mono">{f.k}</dt>
                  <dd>{f.v}</dd>
                  <dd className="exec-fact-d">{f.d}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>

          <div className="exec-visual" aria-hidden>
            <motion.div className="exec-outline" style={{ y: outlineY }} />
            <motion.div
              className="exec-arch"
              style={{ y: archY, rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
              initial={{ clipPath: "inset(100% 0 0 0 round 999px 999px 28px 28px)" }}
              animate={{ clipPath: "inset(0% 0 0 0 round 999px 999px 28px 28px)" }}
              transition={{ delay: 0.95, duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
            >
              <motion.img
                src="/images/brendan-headshot.jpg"
                alt=""
                className="exec-photo"
                style={{ y: photoY, scale: 1.12 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15, duration: 1.2, ease }}
              />
              <div className="exec-arch-grain" />
            </motion.div>
            <motion.div
              className="exec-chip"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9, duration: 0.8, ease }}
            >
              <span className="mono">NOW</span>
              <strong>Leading ~300 technologists</strong>
              <span className="exec-chip-sub">CTO, Ramsey Solutions</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
