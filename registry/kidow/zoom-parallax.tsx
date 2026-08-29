"use client"


/**
 * Copyright (c) 2024 Muhammad Kaif Nazeer
 * Source: Kaif UI — https://kaif-ui.vercel.app
 *
 * 이 컴포넌트의 라이선스는 저작권 표시를 그대로 유지할 것을 요구한다.
 * 파일을 수정하더라도 위 표시를 지우거나 다른 이름을 추가하지 않는다.
 */
// Visit https://kaif-ui.vercel.app/ for more components like this

import { FC, useRef } from "react";
import Image from "next/image";

import { useScroll, useTransform, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Props {
  classes?: string;
}

const ZoomParallax: FC<Props> = ({ classes }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "/demo-1.svg",
      scale: scale1,
      classes: "relative w-[25%] h-[25%]",
    },
    {
      src: "/demo-2.svg",
      scale: scale2,
      classes: "relative top-[-30%] left-[5%] w-[35%] h-[30%]",
    },
    {
      src: "/demo-3.svg",
      scale: scale3,
      classes: "relative top-[-29%] left-[-25%] w-[20%] h-[28%]",
    },
    {
      src: "/demo-4.svg",
      scale: scale2,
      classes: "relative left-[27.5%] w-[25%] h-[25%]",
    },
    {
      src: "/demo-1.svg",
      scale: scale3,
      classes: "relative left-[-27.5%] w-[25%] h-[25%]",
    },
    {
      src: "/demo-2.svg",
      scale: scale4,
      classes: "relative top-[27.5%] left-[5%] w-[20%] h-[25%]",
    },
    {
      src: "/demo-3.svg",
      scale: scale5,
      classes: "relative top-[22.5%] left-[25%] w-[15%] h-[15%]",
    },
  ];

  return (
    <section
      ref={container}
      className={cn("relative h-[140vh] w-full", classes)}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale, classes }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className={classes}>
                <Image
                  src={src}
                  fill
                  objectFit="cover"
                  alt="image"
                />
              </div>
            </motion.div>
          );     
        })}
      </div>
    </section>
  );
};

export default ZoomParallax;