import { Spinner } from '@/components/kidow/gradient-spinner'

export default function GradientSpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </div>
  )
}
