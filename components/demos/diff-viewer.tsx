import { DiffViewer } from '@/components/kidow/diff-viewer/diff-viewer'

const oldCode = 'import opentype from "opentype.js"'
const newCode = 'import * as opentype from "opentype.js"'

export default function DiffViewerDemo() {
  return (
    <DiffViewer
      oldCode={oldCode}
      newCode={newCode}
      language="ts"
      className="w-full max-w-md"
    />
  )
}
