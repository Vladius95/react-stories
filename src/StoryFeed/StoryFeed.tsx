import * as React from "react";
import { ReactStories, ReactStory } from "src/@types/story";
import { StoryPreview, StoryPreviewProps } from "src/StoryPreview/StoryPreview";
import { StoryFeedStyles } from "./StoryFeed.styles";

export interface StoryFeedProps {
  stories: ReactStories[];
  onPreviewClick?(id: string | number): void;
}
var test
export function StoryFeed({ stories, onPreviewClick }: StoryFeedProps) {
  return (
    <div style={StoryFeedStyles["story-feed"]}>
      {stories.map((v, key) => (
        <div key={key} style={StoryFeedStyles["story-feed__item"]}>
          <StoryPreview {...v} onClick={onPreviewClick}>
            <p style={{ padding: "0" }}>{"Story with title and img"}</p>
          </StoryPreview>
        </div>
      ))}
    </div>
  );
}
