'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

import { cn } from '@/lib/utils'

interface Props {
  code: string
  className?: string
}

export function CopyBlock({ code, className }: Props) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className={cn('group relative', className)}>
      <pre className="bg-muted/50 overflow-x-auto rounded-lg border p-3 pr-10 text-xs">
        <code className="font-mono">{code}</code>
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label="복사"
        className="text-muted-foreground hover:text-foreground hover:bg-background absolute top-2 right-2 rounded-md p-1.5 transition-colors"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      </button>
    </div>
  )
}
