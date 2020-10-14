import * as React from "react"
import { StoryFeed } from "src/StoryFeed/StoryFeed"
import { defaultStoryFeedConfig } from "./default-story-feed.config"

export function DefaultStoriesFeed() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Stories Preview Feed</h1>
      <StoryFeed stories={defaultStoryFeedConfig} />
    </div>
  )
}
