import { CodeBlock } from '@/components/kidow/code-block/code-block'

const code = `export function greet(name: string) {
  return \`안녕, \${name}\`
}`

export default function CodeBlockDemo() {
  return (
    <CodeBlock code={code} language="ts" title="greet.ts" className="w-full max-w-md" />
  )
}
