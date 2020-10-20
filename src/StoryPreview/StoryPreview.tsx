import * as React from "react";
import { ReactStories, ReactStory } from "src/@types/story";
import { Button } from "src/common-components/Button";
import { StoryPreviewFrame } from "./fragments/StoryPreviewFrame/StoryPreviewFrame";
import { StoryPreviewStyles } from "./StoryPreview.styles";

export interface StoryPreviewProps extends ReactStories {
  style?: React.CSSProperties;
  onClick?(id: string | number): void;
  className?: string;
  side?: number;
}

export function StoryPreview({
  id,
  onClick,
  isViewed = false,
  className = "",
  style,
  side = 88,
  frameStroke,
  backgroundImage = "",
  backgroundColor = "",
  stories,
  theme = "white",
  children,
}: React.PropsWithChildren<StoryPreviewProps>) {
  const _onClick = React.useCallback(() => {
    onClick(id);
  }, []);

  return (
    <Button
      onClick={_onClick}
      className={className}
      style={{
        width: side,
        height: side,
        background: `${backgroundColor} url(${backgroundImage}) no-repeat 100% center`,
        ...StoryPreviewStyles["story-preview"],
        ...style,
        color: theme === "white" ? "white" : "black",
      }}
    >
      {!isViewed && <StoryPreviewFrame side={side} stroke={frameStroke} />}
      {children}
    </Button>
  );
}
