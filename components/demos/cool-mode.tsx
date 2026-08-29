import { Button } from "@/components/ui/button"
import { CoolMode } from "@/components/kidow/cool-mode"

export default function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  )
}
