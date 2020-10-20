import * as React from "react"
import { StoryFeed } from "src/StoryFeed/StoryFeed"
import { testConfig } from "./test-config"

export function DefaultStoriesFeed() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Stories Preview Feed</h1>
      <StoryFeed stories={testConfig} />
    </div>
  )
}
