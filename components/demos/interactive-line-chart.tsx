import { Chart } from '@/components/kidow/interactive-line-chart'

const data = [12, 28, 21, 44, 38, 57]
const labels = ['1월', '2월', '3월', '4월', '5월', '6월']

export default function InteractiveLineChartDemo() {
  return (
    <div className="w-full max-w-md">
      <Chart data={data} labels={labels} name="설치 수" />
    </div>
  )
}
