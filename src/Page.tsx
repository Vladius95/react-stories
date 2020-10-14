import * as React from "react"
import { Story } from "./@types/story"
import { Stories } from "./Story/Story"

import { StoryPreviewProps } from "./StoryPreview/StoryPreview"
import { calcProgress } from "./utils/calc-progress"

const yepyStories: Story[] = [
  {
    id: 0,
    media: {
      url:
        "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/ZLLZSQW/videoblocks-vertical-dynamic-slides_rwzdzfsmn__p__19e5b95605f18ae2e5a0333a6e9b90d0__P360.mp4",
      mediaType: "video",
    },
    duration: 50000,
  },
  {
    id: 1,
    media: {
      url:
        "https://images.unsplash.com/photo-1602395714441-e4a5686cbb59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      mediaType: "image",
    },
    duration: 50000,
  },
  {
    id: 2,
    media: {
      url:
        "https://images.unsplash.com/photo-1602409049594-25f0d27dc2cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      mediaType: "image",
    },
    duration: 50000,
  },
  {
    id: 3,
    media: {
      url:
        "https://images.unsplash.com/photo-1602387688969-82606117b9e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      mediaType: "image",
    },
    duration: 50000,
  },
]

export function CustomStories() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Stories stories={yepyStories} />
    </div>
  )
}
