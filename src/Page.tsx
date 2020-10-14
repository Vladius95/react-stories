import * as React from "react"
import { Story } from "./@types/story"
import { useStopwatch } from "./hooks/useStopwatch"
import { UserStatsBottomBar } from "./presets/bottom-bars/UserStatsBottomBar/UserStatsBottomBar"
import { StoriesHeader } from "./presets/headers/ProgressBar/StoryHeader"
import { StoriesBody } from "./Story/Story"
import { useStoryControls } from "./Story/useStory"
import { StoryFeed } from "./StoryFeed/StoryFeed"
import { StoryPreviewProps } from "./StoryPreview/StoryPreview"
import { calcProgress } from "./utils/calc-progress"

const yepyConfig: StoryPreviewProps[] = [
  {
    // title: "Story with title and img",
    style: {
      backgroundColor: "#4B246A",
      color: "white",
    },
    frameStroke: "#4B246A",
    side: 88,
  },
  {
    // title: "Another text, id",
    style: {
      backgroundColor: "#BB60C3",
      color: "white",
    },
    frameStroke: "#BB60C3",
    side: 88,
  },
  {
    // title: "Weekly expenses",
    style: {
      backgroundColor: "#8386FF",
      color: "white",
    },
    frameStroke: "#8386FF",
    side: 88,
  },
]

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

// export function Page() {
//   return (
//     <div>
//       <h1> React Swipeable Stories</h1>
//       <StoryFeed stories={yepyConfig} />
//       <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//         <Stories stories={yepyStories} storyId={0} onClose={console.log} size={{ width: "350px", height: "711px" }} />
//       </div>
//     </div>
//   );
// }

export function CustomStory() {
  const {
    storySlide,
    index,
    incrementStory,
    decrementStory,
    onNextStory,
    onPrevStory,
  } = useStoryControls({
    stories: yepyStories,
    startIndex: 0,
  })
  //const autostart = React.useRef(storySlide.value.autostart || true);
  const [duration, setDuration] = React.useState(storySlide.duration || 0)

  const { tick, onStart, onPause, onResume, onReset } = useStopwatch({
    time: duration,
    onEnd: () => {
      onReset()
      // _onStoryEnd();
      incrementStory()
    },
    interval: 100,
  })

  const _onSourceLoad = React.useCallback(
    time => {
      time && setDuration(time)
      const dur = time || duration

      // если есть время начинает отсчет
      // dur !== 0 && onStart()
    },
    [duration]
  )

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <StoriesBody
        storySlide={storySlide}
        size={{ width: "350px", height: "711px" }}
        onNextStoryClick={() => {
          incrementStory()
          onReset()
        }}
        onPrevStoryClick={() => {
          decrementStory()
          onReset()
        }}
        onSourceLoaded={_onSourceLoad}
        onSetPause={onPause}
        onPlayStory={onResume}
        header={
          <StoriesHeader
            progress={calcProgress(tick, duration)}
            storiesCount={yepyStories.length}
            currentStoryIndex={index}
            onClose={() => {}}
          />
        }
        bottomBar={<UserStatsBottomBar isDisliked isLiked isFavorite={false} />}
      />
    </div>
  )
}
