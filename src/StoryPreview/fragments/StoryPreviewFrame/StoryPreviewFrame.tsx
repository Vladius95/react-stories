import * as React from "react";
import { StoryPreviewFrameStyles } from "./StoryPreviewFrame.styles";

export interface StoryPreviewFrameProps {
  side: number;
  stroke?: string;
}

export function StoryPreviewFrame({
  side,
  stroke = "black",
}: StoryPreviewFrameProps) {
  const filterStyle = React.useMemo(
    () => ({
      WebkitFilter: `drop-shadow(0px 4px 6px ${stroke})`,
      filter: `drop-shadow(0px 4px 6px ${stroke})`,
    }),
    [stroke]
  );

  return (
    <svg
      viewBox={`0 0 ${side + 8 + 2} ${side + 8 + 2}`}
      style={{
        ...StoryPreviewFrameStyles["story-preview-frame"],
        ...filterStyle,
      }}
    >
      <rect
        rx="10"
        height={side + 8}
        width={side + 8}
        y="1"
        x="1"
        strokeWidth="2"
        fill="transparent"
        stroke={stroke}
      />
    </svg>
  );
}
