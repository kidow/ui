"use client";

import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/kidow/animated-card"
import { Visual2 } from "@/components/kidow/visual-2"

export default function AnimatedCard2Demo() {
  return (
    <AnimatedCard>
      <CardVisual>
        <Visual2 mainColor="#ff6900" secondaryColor="#f54900" />
      </CardVisual>
      <CardBody>
        <CardTitle>Just find the right caption</CardTitle>
        <CardDescription>
          This card will tell everything you want
        </CardDescription>
      </CardBody>
    </AnimatedCard>
  )
}
