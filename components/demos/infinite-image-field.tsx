import {
  INFINITE_IMAGE_FIELD_IMAGES,
  InfiniteImageField,
} from '@/components/kidow/infinite-image-field'

export default function InfiniteImageFieldDemo() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-lg">
      <InfiniteImageField images={INFINITE_IMAGE_FIELD_IMAGES} />
    </div>
  )
}
