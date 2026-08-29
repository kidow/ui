import {
  FISHEYE_GRID_ITEMS,
  FisheyeInfiniteGrid,
} from '@/components/kidow/fisheye-infinite-grid'

export default function FisheyeInfiniteGridDemo() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-lg">
      <FisheyeInfiniteGrid items={FISHEYE_GRID_ITEMS} />
    </div>
  )
}
