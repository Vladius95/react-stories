import * as React from "react";
import { StoryPreviewFrame } from "./fragments/StoryPreviewFrame/StoryPreviewFrame";
import { StoryPreviewStyles } from "./StoryPreview.styles";

export interface StoryPreviewProps {
  style?: React.CSSProperties;
  onClick?: VoidFunction;
  isViewed?: boolean;
  className?: string;
  side?: number;
  frameStroke?: string;
}

export function StoryPreview({
  onClick,
  isViewed = false,
  className = "",
  style,
  side,
  frameStroke,
  children,
}: React.PropsWithChildren<StoryPreviewProps>) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        width: side,
        height: side,
        ...StoryPreviewStyles["story-preview"],
        ...style,
      }}
    >
      {!isViewed && <StoryPreviewFrame side={side} stroke={frameStroke} />}
      {children}
    </button>
  );
}
