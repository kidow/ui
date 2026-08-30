"use client";

/**
 * Copyright (c) Spectrum UI — https://ui.spectrumhq.in
 * Licensed under the Apache License, Version 2.0.
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * 변경: import 경로를 이 레지스트리에 맞게 고쳤고, framer-motion 을
 * motion/react 로 통일했다. 그 밖의 내용은 원본과 같다.
 */

import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
