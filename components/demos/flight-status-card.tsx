import { FlightStatusCard } from '@/components/kidow/flight-status-card'

export default function FlightStatusCardDemo() {
  return (
    <FlightStatusCard
      departureCode="ICN"
      arrivalCode="HND"
      departureCity="Seoul"
      arrivalCity="Tokyo"
      departureTime="09:20"
      arrivalTime="11:40"
      progress={62}
      remainingTime="52m"
    />
  )
}
