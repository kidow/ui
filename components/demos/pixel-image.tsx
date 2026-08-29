import { PixelImage } from "@/components/kidow/pixel-image"

export default function Home() {
  return (
    <PixelImage
      src="/demo-image.svg"
      customGrid={{ rows: 4, cols: 6 }}
      grayscaleAnimation
    />
  )
}
