import { CronSchedule } from '@/components/kidow/cron-schedule/cron-schedule'

export default function CronScheduleDemo() {
  return <CronSchedule expression="0 9 * * 1-5" />
}
