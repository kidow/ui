"use client";

/**
 * Copyright (c) Spectrum UI — https://ui.spectrumhq.in
 * Licensed under the Apache License, Version 2.0.
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * 변경: import 경로를 이 레지스트리에 맞게 고쳤고, framer-motion 을
 * motion/react 로 통일했다. 그 밖의 내용은 원본과 같다.
 */

import Image, { StaticImageData } from "next/image";

const AnimatedCard = ({
  imgSrc,
  title,

  aboutProduct,
}: {
  imgSrc: StaticImageData | string;
  title: string;

  aboutProduct: string;
}) => {
  return (
    <div className="md:w-80 border rounded-2xl shadow-lg border-white dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-5 flex flex-col items-center">
        <Image
          className="w-32 h-32 object-contain mb-4"
          src={imgSrc}
          alt={`${title} logo`}
          width={128}
          height={128}
        />
        <div className="text-center space-y-1">
          <div className="text-2xl font-bold tracking-tight text-foreground">{title}</div>

          <p className="text-sm text-muted-foreground mt-2">{aboutProduct}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
