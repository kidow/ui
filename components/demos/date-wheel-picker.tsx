"use client";

import { useState } from "react";
import { DateWheelPicker } from "@/components/kidow/date-wheel-picker";

export default function DateWheelPickerDemo() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center gap-4">
      <DateWheelPicker value={date} onChange={setDate} />
      <p className="text-muted-foreground text-sm">
        Selected: {date.toLocaleDateString()}
      </p>
    </div>
  );
}
