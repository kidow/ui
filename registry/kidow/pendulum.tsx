"use client";
 

/**
 * Copyright (c) 2025 Voxlet (Muhammad Kaif Nazeer)
 * Source: Voxlet UI — https://ui.voxletstudio.com
 *
 * 이 컴포넌트의 라이선스는 저작권 표시를 그대로 유지할 것을 요구한다.
 * 파일을 수정하더라도 위 표시를 지우거나 다른 이름을 추가하지 않는다.
 */

// Visit https://voxlet-ui.vercel.app/ for more components like this

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
 
interface PendulumProps {
  className?: string;
}
 
const Pendulum: React.FC<PendulumProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full max-w-screen overflow-hidden h-screen flex items-start justify-center",
        className
      )}
    >
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          className="pendulum flex flex-col items-center justify-center"
          style={{
            transformOrigin: "50% 0%",
          }}
          animate={{
            rotate: [60, -60, 60],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: [0.6, 0, 0.4, 1],
          }}
        >
          <div className="w-[1px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-white"></div>
 
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white"
            style={{
              boxShadow: "inset 0 0 80px white, 0 0 30px white",
            }}
            animate={{
              boxShadow: [
                "inset 0 0 50px white, 0 0 20px white",
                "inset 0 0 80px white, 0 0 30px white",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
 
export default Pendulum;