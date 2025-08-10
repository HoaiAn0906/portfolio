"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import ComputerJson from "./computer.json";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Tektur } from "next/font/google";

const tektur = Tektur({ subsets: ["latin"] });

// Avoid SSR usage of react-lottie-player which touches `document` at import time
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((m) => m.Player),
  { ssr: false }
);

const DURATION = 0.6;
const STAGGER = 0.05;
const DELAY_DEFAULT = 0.6;
const SCROLL_SECTION_HEIGHT_VH = 120; // reduce initial scroll length

enum Stage {
  INITIAL,
  EXPAND,
}

export const Pha = () => {
  const targetRef = useRef(null);
  const letterRef = useRef<HTMLParagraphElement>(null);
  const [fontSize, setFontSize] = useState(0);
  const [latest, setLatest] = useState(0);

  const [stage, setStage] = useState<Stage>();
  useLayoutEffect(() => {
    const updateSize = () => {
      if (!letterRef.current) return;
      const size = window
        .getComputedStyle(letterRef.current, null)
        .getPropertyValue("font-size");
      setFontSize(parseFloat(size));
    };

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [letterRef]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setLatest(latest);
    if (latest > 0.05) {
      setStage(Stage.EXPAND);
    } else {
      setStage(Stage.INITIAL);
    }
  });

  const config = useMemo(() => {
    return [
      {
        letter: "P",
        children: {
          letter: "han",
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: stage === Stage.EXPAND ? 1 : 0,
          },
        },
        initial: {
          y: fontSize * 4,
          x: fontSize * 4,
          opacity: 0,
        },
        animate: {
          y: stage === Stage.EXPAND ? -(fontSize * 1.8) : 0,
          x: stage === Stage.EXPAND ? fontSize * 2 : fontSize * 3.7,
          opacity: 1,
        },
        transition: {
          duration: stage === Stage.EXPAND ? DURATION / 1 : DURATION,
          delay: stage === undefined ? STAGGER * 0 + DELAY_DEFAULT : 0,
        },
      },
      {
        letter: "H",
        children: {
          letter: "oài",
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: stage === Stage.EXPAND ? 1 : 0,
          },
        },
        initial: {
          y: 100,
          opacity: 0,
        },
        animate: {
          y: stage === Stage.EXPAND ? -(fontSize * 1) : 0,
          x: stage === Stage.EXPAND ? fontSize * 0.5 : fontSize * 1.8,
          opacity: 1,
          scale: 1,
        },
        transition: {
          duration: stage === Stage.EXPAND ? DURATION / 1 : DURATION,
          delay: stage === undefined ? STAGGER * 1 + DELAY_DEFAULT : 0,
        },
      },
      {
        letter: "A",
        children: {
          letter: "n",
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: stage === Stage.EXPAND ? 1 : 0,
          },
        },
        initial: {
          y: 100,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          x: stage === Stage.EXPAND ? 0 : 0,
        },
        transition: {
          duration: stage === Stage.EXPAND ? DURATION / 1 : DURATION,
          delay: stage === undefined ? STAGGER * 2 + DELAY_DEFAULT : 0,
        },
      },
    ];
  }, [stage, fontSize]);

  return (
    <section
      ref={targetRef}
      className={`block gap-2  text-white
    text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
      ${tektur.className}
    `}
      style={{
        height: `${SCROLL_SECTION_HEIGHT_VH}vh`,
      }}
    >
      <div className="sticky top-1/4 tracking-widest text-center text-nowrap overflow-x-clip h-screen pt-0 lg:p-16 ml-10">
        <motion.p className="z-0">
          {config.map((item, idx) => (
            <motion.span
              key={`mtosity-${item.letter}-${idx}`}
              initial={item.initial}
              animate={item.animate}
              transition={item.transition}
              className="inline-block"
              layout="position"
            >
              <span
                className="text-lime-300"
                ref={item.letter === "S" ? letterRef : null}
              >
                {item.letter}
              </span>
              {item.children ? (
                <motion.span
                  initial={item.children.initial}
                  animate={item.children.animate}
                  transition={item.transition}
                  className="inline-block"
                >
                  {item.children.letter}
                </motion.span>
              ) : null}
            </motion.span>
          ))}
        </motion.p>
        <div className="flex flex-col items-center p-2">
          <motion.div
            className="-z-10 mt-4 flex items-center p-4 flex-col lg:flex-row"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={
              stage === Stage.EXPAND
                ? {
                    scale: 1,
                    opacity: 1,
                    borderRadius: "40px",
                    overflow: "hidden",
                  }
                : undefined
            }
            transition={{
              delay: DELAY_DEFAULT / 4,
            }}
          >
            <Player autoplay loop src={ComputerJson} />
            <div className="relative h-[35vh] w-[35vh] rounded-[10px] overflow-hidden">
              <Image
                src="/pha.jpg"
                alt="mt"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            className="-z-10 mt-2 p-4 text-xl lg:text-4xl tracking-normal text-wrap max-w-[1200px]"
            initial={{
              scale: 0,
              opacity: 0,
              translateX: 50,
            }}
            animate={
              latest > 0.3
                ? {
                    scale: 1,
                    opacity: 1,
                    translateX: 0,
                  }
                : undefined
            }
            transition={{
              delay: DELAY_DEFAULT / 3,
            }}
          >
            <p>Fullstack Engineer specialize in Web Technologies</p>
            <p className="text-lime-300 mt-1">
              Web Performance at Scale - User Experience - Design System -
              Accessibility - Frameworks Architecture - Cloud Services
            </p>
          </motion.div>
        </div>
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
          className="fixed inset-0 opacity-10"
        />
      </div>
    </section>
  );
};
