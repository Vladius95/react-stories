import * as React from "react"
import { withRemountOnChange } from "src/hoc/WithRemountOnChange"
import { StoryContent, StoryContentProps } from "../StoryContent/StoryContent"
import { useEventListener } from "src/hooks/useEventListener"
import { useWindowVisibilityChange } from "src/hooks/useWindowVisibility"
import { StoriesControls } from "../StoryControls/StoryControls"
import { StoryBodyStyles } from "./StoryBody.styles"
import { ReactStory } from "src/@types/story"

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

export interface StoryBodyProps {
  storySlide: ReactStory
  onStoryStart?(story: ReactStory): void
  // вызывается, когда на первой стори, была нажата кнопка "предыдущая стори"
  onNextStoryClick: VoidFunction
  onPrevStoryClick: VoidFunction
  onStoryEnd?: VoidFunction
  classNameContainer?: string
  size?: {
    width: string
    height: string
  }
  header?: React.ReactNode
  bottomBar?: React.ReactNode
  onPlayStory: VoidFunction
  onSetPause: VoidFunction
  onSourceLoaded?: (time?: number) => void
  style?: React.CSSProperties
}

export function StoryBody({
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
  style,
}: StoryBodyProps) {
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
      style={{ ...StoryBodyStyles["story"], ...size, ...style }}
    >
      {header && (
        <header style={StoryBodyStyles["story__header"]}>{header}</header>
      )}

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

      {bottomBar && (
        <footer style={StoryBodyStyles["story__footer"]}>{bottomBar}</footer>
      )}
    </article>
  )
}

// export const ForwardedRefStoriesCorousel = React.forwardRef<StoriesCarouselForwardRef, StoriesCarouselProps>(
//   StoriesCorousel
// );
