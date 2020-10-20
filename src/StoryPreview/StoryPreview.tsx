import * as React from "react";
import { ReactStories, ReactStory } from "src/@types/story";
import { Button } from "src/common-components/Button";
import { StoryPreviewFrame } from "./fragments/StoryPreviewFrame/StoryPreviewFrame";
import { StoryPreviewStyles } from "./StoryPreview.styles";

export interface StoryPreviewProps {
  story: ReactStories;
  style?: React.CSSProperties;
  onClick?(story: ReactStories): void;
  className?: string;
  side?: number;
}

export function StoryPreview({
  story,
  onClick,
  className = "",
  style,
  side = 88,
  children,
}: React.PropsWithChildren<StoryPreviewProps>) {
  const {
    id,
    frameStroke,
    isViewed,
    backgroundColor,
    backgroundImage,
    title,
    theme,
    stories,
  } = story;

  const _onClick = React.useCallback(() => {
    onClick(story);
  }, [story, onClick]);

  return (
    <Button
      onClick={_onClick}
      className={className}
      style={{
        width: side,
        height: side,
        background: getStoryPreviewBackground(backgroundColor, backgroundImage),
        ...StoryPreviewStyles["story-preview"],
        ...style,
        color: theme === "white" ? "white" : "black",
      }}
    >
      {!isViewed && <StoryPreviewFrame side={side} stroke={frameStroke} />}
      {!children && title ? (
        <p style={StoryPreviewStyles["story-preview__text"]}>{title}</p>
      ) : (
        children
      )}
    </Button>
  );
}

function getStoryPreviewBackground(
  backgroundColor?: string,
  backgroundImage?: string
) {
  if (!backgroundColor && !backgroundImage) return;

  return `${backgroundColor} ${
    backgroundImage ? `url(${backgroundImage}) no-repeat 100% center` : ""
  }`;
}
