'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Props {
  command: string
  label?: string
  className?: string
}

export function CopyCommand({ command, label, className }: Props) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={copy}
      className={cn('h-auto max-w-full justify-start gap-2 py-1.5', className)}
    >
      <span className="font-mono truncate text-xs">{label ?? command}</span>
      {copied ? (
        <Check className="size-3.5 shrink-0" />
      ) : (
        <Copy className="size-3.5 shrink-0" />
      )}
    </Button>
  )
}
