"use client";

/**
 * Copyright (c) Spectrum UI — https://ui.spectrumhq.in
 * Licensed under the Apache License, Version 2.0.
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * 변경: import 경로를 이 레지스트리에 맞게 고쳤고, framer-motion 을
 * motion/react 로 통일했다. 그 밖의 내용은 원본과 같다.
 */

import React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

type AnchorProps = {
  anchor?: string;
  anchorVisibility?: "hover" | "always" | "never";
  disableCopyToClipboard?: boolean;
};

const Anchor = ({
  anchor,
  disableCopyToClipboard = false,
  anchorVisibility = "always",
}: AnchorProps) => {
  function copyToClipboard() {
    if (disableCopyToClipboard) return;
    const currentUrl = window.location.href.replace(/#.*$/, "");
    const urlWithId = `${currentUrl}#${anchor}`;

    void navigator.clipboard.writeText(urlWithId);
  }

  return (
    <div
      className={cn(
        "ms-2 pt-1",
        anchorVisibility === "always" && "visible",
        anchorVisibility === "never" && "hidden",
        anchorVisibility === "hover" && "invisible group-hover:visible",
      )}
    ></div>
  );
};

const headingVariants = cva("font-bold text-primary", {
  variants: {
    variant: {
      h1: "leading-14 text-3xl ",
      h2: "leading-14 text-2xl ",
      h3: "leading-10 text-xl lg:text-3xl",
      h4: "leading-8 text-lg ",
      h5: "leading-8 text-lg ",
      h6: "leading-7 text-sm ",
      p: "leading-5 text-lg  font-normal",
    },
  },
  defaultVariants: {
    variant: "h6",
  },
});

type BaseHeadingProps = {
  children?: React.ReactNode;
  variant?: string;
  className?: string;
  asChild?: boolean;
  anchor?: string;
  anchorAlignment?: "close" | "spaced";
  anchorVisibility?: "hover" | "always" | "never";
  disableCopyToClipboard?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

const BaseHeading = ({
  children,
  className,
  variant = "h6",
  asChild = false,
  anchor,
  anchorAlignment = "spaced",
  anchorVisibility = "always",
  disableCopyToClipboard = false,
  ...props
}: BaseHeadingProps) => {
  const Comp = asChild ? Slot : variant;
  return (
    <>
      <Comp
        id={anchor}
        {...props}
        className={cn(
          anchor && "flex scroll-m-20 items-center gap-1", // modify `scroll-m-20` according to your header height.
          anchorAlignment === "spaced" && "justify-between",
          anchorVisibility === "hover" && "group",
          headingVariants({ variant, className }),
        )}
      >
        {children}
        {anchor && (
          <Anchor
            anchor={anchor}
            anchorVisibility={anchorVisibility}
            disableCopyToClipboard={disableCopyToClipboard}
          />
        )}
      </Comp>
    </>
  );
};

type TypographyProps = Omit<BaseHeadingProps, "variant" | "asChild">;

const H1 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h1" />;
};

const H2 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h2" />;
};

const H3 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h3" />;
};

const H4 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h4" />;
};

const H5 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h5" />;
};

const H6 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h6" />;
};

const P = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="p" />;
};

export { H1, H2, H3, H4, H5, H6, P };
