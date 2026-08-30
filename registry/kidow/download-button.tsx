"use client";

/**
 * Copyright (c) 2025 Voxlet (Muhammad Kaif Nazeer)
 * Source: Voxlet UI — https://ui.voxletstudio.com
 *
 * 이 컴포넌트의 라이선스는 저작권 표시를 그대로 유지할 것을 요구한다.
 * 파일을 수정하더라도 위 표시를 지우거나 다른 이름을 추가하지 않는다.
 */

import { Download, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DownloadButtonProps {
    downloadStatus: "idle" | "downloading" | "downloaded" | "complete"
    progress: number
    onClick: () => void
    className?: string
}

export default function DownloadButton({ downloadStatus, progress, onClick, className }: DownloadButtonProps) {
    return (
        <Button
            onClick={onClick}
            className={cn(
                "rounded-xl w-40 relative overflow-hidden select-none",
                downloadStatus === "downloading" && "bg-primary/50 hover:bg-primary/50",
                downloadStatus !== "idle" && "pointer-events-none",
                className,
            )}
        >
            {downloadStatus === "idle" && (
                <>
                    <Download className="h-4 w-4" />
                    Download
                </>
            )}
            {downloadStatus === "downloading" && (
                <div className="z-[5] flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {progress}%
                </div>
            )}
            {downloadStatus === "downloaded" && (
                <>
                    <CheckCircle className="h-4 w-4" />
                    <span className="t">Downloaded</span>
                </>
            )}
            {downloadStatus === "complete" && <span className="text-primary">Download</span>}
            {downloadStatus === "downloading" && (
                <div
                    className="absolute bottom-0 z-[3] h-full left-0 bg-primary inset-0 transition-all duration-200 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            )}
        </Button>
    )
}

