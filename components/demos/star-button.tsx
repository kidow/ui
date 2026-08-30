"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { StarButton } from "@/components/kidow/star-button"

export default function StarButtonDemo() {
  const { theme } = useTheme()
  const [lightColor, setLightColor] = useState("#FAFAFA")

  useEffect(() => {
    setLightColor(theme === "dark" ? "#FAFAFA" : "#FF2056")
  }, [theme])

  return (
    <div>
      <StarButton lightColor={lightColor} className="rounded-3xl">
        Hover me
      </StarButton>
    </div>
  )
}
