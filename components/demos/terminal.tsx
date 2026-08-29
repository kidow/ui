import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/registry/ui/terminal/terminal'

export default function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; npx shadcn@latest add @kidow/terminal</TypingAnimation>
      <AnimatedSpan className="text-muted-foreground">
        ✔ Checking registry.
      </AnimatedSpan>
      <AnimatedSpan className="text-muted-foreground">
        ✔ Installing dependencies.
      </AnimatedSpan>
      <AnimatedSpan className="text-muted-foreground">
        ✔ Created 1 file: components/kidow/terminal.tsx
      </AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">
        Success! Component added.
      </TypingAnimation>
    </Terminal>
  )
}
