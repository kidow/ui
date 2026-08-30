"use client";

/**
 * Copyright (c) Spectrum UI — https://ui.spectrumhq.in
 * Licensed under the Apache License, Version 2.0.
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * 변경: import 경로를 이 레지스트리에 맞게 고쳤고, framer-motion 을
 * motion/react 로 통일했다. 그 밖의 내용은 원본과 같다.
 */

/* eslint-disable @next/next/no-img-element */
"use client";
import { ImgHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

export default function DiscloseImage({
  className,
  doorClassName,
  vertical = false,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  doorClassName?: string;
  vertical?: boolean;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const baseClassName =
    "ease-slow duration-mid absolute bg-sky-500 transition-all animate-out fill-mode-forwards";

  const { alt, ...imgProps } = props;
  return (
    <div className="relative h-64 w-52 overflow-hidden rounded-md bg-yellow-100">
      <img
        alt={alt || "Disclose image"}
        onLoad={() => setImageLoaded(true)}
        {...imgProps}
        className={cn("h-full w-full object-cover", className)}
      />

      {imageLoaded && (
        <>
          <div
            className={cn(baseClassName, doorClassName, {
              "top-0 h-1/2 w-full slide-out-to-top-full": vertical,
              "bottom-0 left-0 top-0 w-1/2 slide-out-to-left-full": !vertical,
            })}
          />
          <div
            className={cn(baseClassName, doorClassName, {
              "bottom-0 h-1/2 w-full slide-out-to-bottom-full": vertical,
              "bottom-0 right-0 top-0 w-1/2 slide-out-to-right-full": !vertical,
            })}
          />
        </>
      )}
    </div>
  );
}
