import * as React from "react";
import { StoryPreview, StoryPreviewProps } from "src/StoryPreview/StoryPreview";
import { StoryFeedStyles } from "./StoryFeed.styles";

export interface StoryFeedProps {
  stories: StoryPreviewProps[];
}

export function StoryFeed({ stories }: StoryFeedProps) {
  return (
    <div style={StoryFeedStyles["story-feed"]}>
      {stories.map((v, key) => (
        <StoryPreview {...v}>
          <p style={{ padding: "0" }}>{"Story with title and img"}</p>
        </StoryPreview>
      ))}
    </div>
  );
}
