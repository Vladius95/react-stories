import * as React from "react";
import { StoryProgressStyles } from "./StoryProgress.styles";

const LINES_GAP = 8;
const WIDTH = 500; // эмпирическая константа

export interface StoryProgressProps {
  progress: number; // проценты
  currentIndex: number;
  storiesCount: number;
  className?: string;
}

export function StoryProgress({ progress, currentIndex, storiesCount, className = "" }: StoryProgressProps) {
  const lineWidth = React.useMemo(() => Math.round((WIDTH - LINES_GAP * (storiesCount - 1)) / storiesCount), [
    storiesCount,
  ]);

  // длина линии просмотренных сторис + длина линии просматриваемой сторис + отступ между линиями
  const progressWidth = Math.round(lineWidth * currentIndex + (lineWidth * progress) / 100 + LINES_GAP * currentIndex);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${WIDTH} 4`} className={className}>
      <line
        x1="0"
        y1="0"
        x2={WIDTH}
        y2="0"
        strokeDasharray={`${lineWidth} ${LINES_GAP}`}
        strokeWidth="6"
        style={StoryProgressStyles["story-progress__line"]}
      />
      <line
        id="sp_progress-line"
        x1="0"
        y1="0"
        x2={progressWidth}
        y2="0"
        strokeDasharray={`${lineWidth} ${LINES_GAP}`}
        strokeWidth="6"
        style={StoryProgressStyles["story-progress__line-progress"]}
      />
    </svg>
  );
}
