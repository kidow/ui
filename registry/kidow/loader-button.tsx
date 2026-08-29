"use client";

/**
 * Copyright (c) 2024 Muhammad Kaif Nazeer
 * Source: Kaif UI — https://kaif-ui.vercel.app
 *
 * 이 컴포넌트의 라이선스는 저작권 표시를 그대로 유지할 것을 요구한다.
 * 파일을 수정하더라도 위 표시를 지우거나 다른 이름을 추가하지 않는다.
 */

// Visit https://kaif-ui.vercel.app/ for more components like this

import * as React from "react";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type LoaderButtonProps = {
  isLoading: boolean;
  className?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const LoaderButton: React.FC<LoaderButtonProps> = ({
  buttonVariant,
  isLoading,
  className,
  children,
  onClick,
}) => {
  return (
    <Button
      variant={buttonVariant}
      className={className}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default LoaderButton;
