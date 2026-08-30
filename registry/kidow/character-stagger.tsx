"use client";

import React from 'react';
import { motion } from "motion/react";
import type { Variants } from "motion/react";

interface CharacterStaggerProps {
  text: string;
  duration?: number;
  staggerDelay?: number;
  yOffset?: number;
  className?: string;
}

export function CharacterStagger({
  text,
  duration = 0.4,
  staggerDelay = 0.015,
  yOffset = 15,
  className = '',
}: CharacterStaggerProps) {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: yOffset, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 18,
        mass: 0.8,
        duration,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants as Variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={`inline-block ${className}`}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants as Variants}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
