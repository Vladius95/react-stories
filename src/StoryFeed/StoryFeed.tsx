import * as React from "react";
import { ReactStories, ReactStory } from "src/@types/story";
import { StoryPreview } from "src/StoryPreview/StoryPreview";
import { StoryFeedStyles } from "./StoryFeed.styles";

export interface StoryFeedProps {
  stories: ReactStories[];
  onPreviewClick?(story: ReactStories): void;
  side?: number;
}

export function StoryFeed({ stories, onPreviewClick, side }: StoryFeedProps) {
  return (
    <div style={StoryFeedStyles["story-feed"]}>
      {stories.map((v, key) => (
        <div key={key} style={StoryFeedStyles["story-feed__item"]}>
          <StoryPreview story={v} onClick={onPreviewClick} side={side} />
        </div>
      ))}
    </div>
  );
}
