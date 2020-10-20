import * as React from "react";
import { StoryPreviewFrameStyles } from "./StoryPreviewFrame.styles";

const GAP = 8;
const STROKE_WIDTH = 2;

export interface StoryPreviewFrameProps {
  side: number;
  stroke?: string;
}

export function StoryPreviewFrame({
  side,
  stroke = "black",
}: StoryPreviewFrameProps) {
  const filterStyle = React.useMemo(() => getFilterStyle(stroke), [stroke]);

  return (
    <svg
      viewBox={`0 0 ${side + GAP + STROKE_WIDTH} ${side + GAP + STROKE_WIDTH}`}
      style={{
        ...StoryPreviewFrameStyles["story-preview-frame"],
        ...filterStyle,
      }}
    >
      <rect
        rx="10"
        height={side + GAP}
        width={side + GAP}
        y="1"
        x="1"
        strokeWidth={STROKE_WIDTH}
        fill="transparent"
        stroke={stroke}
      />
    </svg>
  );
}

const DROP_SHADOW = "drop-shadow(0px 4px 6px %stroke)";

function getFilterStyle(stroke: string) {
  return {
    WebkitFilter: DROP_SHADOW.replace("%stroke", stroke),
    filter: DROP_SHADOW.replace("%stroke", stroke),
  };
}
