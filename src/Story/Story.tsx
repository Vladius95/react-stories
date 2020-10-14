import * as React from "react"
import { useStopwatch } from "src/hooks/useStopwatch"
import { withRemountOnChange } from "src/hoc/WithRemountOnChange"
import { StoryContent, StoryContentProps } from "./StoryContent/StoryContent"
import { useEventListener } from "src/hooks/useEventListener"
import { useWindowVisibilityChange } from "src/hooks/useWindowVisibility"
import { StoriesHeader } from "../presets/headers/ProgressBar/StoryHeader"
import { LinkedList } from "src/utils/linked-list"
import { calcProgress } from "src/utils/calc-progress"
import { StoriesControls } from "./StoryControls/StoryControls"
import { StoryStyles } from "./Story.styles"
import { Story } from "src/@types/story"
import { useStoryControls } from "./useStory"

const WithRemountStory = withRemountOnChange<StoryContentProps, StoryContent>(
  StoryContent,
  (props, prevProps) =>
    props.media.url !== prevProps.media.url ||
    props.component?.toString() !== prevProps.component?.toString()
)

export type StoryState = "loading" | "pause" | "playing"

// внешнее апи
// export interface StoriesCarouselForwardRef {
//   onStartStopwatch: VoidFunction;
//   onPauseStopwatch: VoidFunction;
//   onResetStopwatch: VoidFunction;
//   onPlayStory: VoidFunction;
//   onNextStory: VoidFunction;
//   onPrevStory: VoidFunction;
//   onRefreshStory: VoidFunction;
// }

export interface StoriesCarouselProps {
  storySlide: Story
  onStoryStart?(story: Story): void
  // вызывается, когда на первой стори, была нажата кнопка "предыдущая стори"
  onNextStoryClick: VoidFunction
  onPrevStoryClick: VoidFunction
  onStoryEnd?: VoidFunction
  classNameContainer?: string
  size?: {
    width: string
    height: string
  }
  header: React.ReactNode
  bottomBar: React.ReactNode
  onPlayStory: VoidFunction
  onSetPause: VoidFunction
  onSourceLoaded?: (time?: number) => void
}

export function StoriesBody({
  storySlide,
  onStoryStart,
  onNextStoryClick,
  onPrevStoryClick,
  onSourceLoaded,
  onSetPause,
  onPlayStory,
  size,
  classNameContainer,
  header,
  bottomBar,
}: StoriesCarouselProps) {
  const storyRef = React.useRef<StoryContent>(null)

  useEventListener("waiting", onSetPause, storyRef.current?.videoNode?.current)
  useEventListener("playing", onPlayStory, storyRef.current?.videoNode?.current)

  const onWindowFocus = React.useCallback(() => {
    onPlayStory()
    storyRef.current?.videoNode?.current?.play()
  }, [onPlayStory])

  const onWindowBlur = React.useCallback(() => {
    onSetPause()
    storyRef.current?.videoNode?.current?.pause()
  }, [onSetPause])

  useWindowVisibilityChange(onWindowFocus, onWindowBlur)

  const _onSetPause = React.useCallback(() => {
    onSetPause()
    storyRef.current?.videoNode?.current?.pause()
  }, [onSetPause])

  const _onPlayStory = React.useCallback(() => {
    onPlayStory()
    storyRef.current?.videoNode?.current?.play()
  }, [onPlayStory])

  // const onRefreshStory = React.useCallback(() => {
  //   onReset();

  //   if (storyRef.current?.videoNode?.current) {
  //     storyRef.current.videoNode.current.currentTime = 0;
  //   }
  // }, [onReset]);

  // React.useImperativeHandle(ref, () => ({
  //   onStartStopwatch: onStart,
  //   onPauseStopwatch: onPause,
  //   onResetStopwatch: onReset,
  //   onPlayStory,
  //   onNextStory,
  //   onPrevStory,
  //   onRefreshStory,
  // }));

  // единственный колбэк, который начинает отсчет
  const _onSourceLoaded = React.useCallback(
    (time?: number) => {
      storyRef.current?.videoNode?.current?.play()

      onSourceLoaded(time)
    },
    [onSourceLoaded]
  )

  return (
    <article
      className={classNameContainer}
      style={{ ...StoryStyles["story"], ...size }}
    >
      <header style={StoryStyles["story__header"]}>{header}</header>

      <StoriesControls
        onNextStory={onNextStoryClick}
        onPrevStory={onPrevStoryClick}
        onPause={_onSetPause}
        onResume={_onPlayStory}
      />

      <WithRemountStory
        ref={storyRef}
        {...storySlide}
        onSourceLoad={_onSourceLoaded}
      />

      <footer
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {bottomBar}
      </footer>
    </article>
  )
}

// export const ForwardedRefStoriesCorousel = React.forwardRef<StoriesCarouselForwardRef, StoriesCarouselProps>(
//   StoriesCorousel
// );
