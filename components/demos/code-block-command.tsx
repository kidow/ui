import { CodeBlockCommand } from '@/components/kidow/code-block-command/code-block-command'

export default function CodeBlockCommandDemo() {
  return (
    <div className="w-full max-w-md">
      <CodeBlockCommand
        pnpm="pnpm dlx shadcn@latest add @kidow/marquee"
        npm="npx shadcn@latest add @kidow/marquee"
        yarn="yarn dlx shadcn@latest add @kidow/marquee"
        bun="bunx --bun shadcn@latest add @kidow/marquee"
      />
    </div>
  )
}
