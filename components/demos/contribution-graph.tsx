"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kidow/contribution-graph";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";

const maxCount = 20;
const maxLevel = 4;
const now = new Date();
const days = eachDayOfInterval({
  start: startOfYear(now),
  end: endOfYear(now),
});

// Math.random 을 쓰면 서버와 클라이언트의 값이 달라 hydration 이 깨진다.
// 날짜 인덱스로 값을 정하면 어디서 그려도 같은 그래프가 나온다.
const pseudo = (index: number) => ((index * 2654435761) % 1000) / 1000;

const data = days.map((date, index) => {
  const c = Math.round(
    pseudo(index) * maxCount - pseudo(index + 7) * (0.8 * maxCount)
  );
  const count = Math.max(0, c);
  const level = Math.ceil((count / maxCount) * maxLevel);

  return {
    date: formatISO(date, { representation: "date" }),
    count,
    level,
  };
});

const Example = () => (
  <ContributionGraph data={data}>
    <ContributionGraphCalendar>
      {({ activity, dayIndex, weekIndex }) => (
        <ContributionGraphBlock
          activity={activity}
          dayIndex={dayIndex}
          weekIndex={weekIndex}
        />
      )}
    </ContributionGraphCalendar>
    <ContributionGraphFooter>
      <ContributionGraphTotalCount />
      <ContributionGraphLegend />
    </ContributionGraphFooter>
  </ContributionGraph>
);

export default Example;
