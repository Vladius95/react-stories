import * as React from "react";
import { withRemountOnChange } from "src/hoc/WithRemountOnChange";
import { StoryContent, StoryContentProps } from "../StoryContent/StoryContent";
import { useEventListener } from "src/hooks/useEventListener";
import { useWindowVisibilityChange } from "src/hooks/useWindowVisibility";
import { StoriesControls } from "../StoryControls/StoryControls";
import { StoryBodyStyles } from "./StoryBody.styles";
import { ReactStory } from "src/@types/story";
import { useStoryControls } from "src/fragments/useStory";
import { useStoryProgress } from "src/hooks/useStoryProgress";
import { StoriesHeader } from "src/fragments/ProgressBar/StoryHeader";

const WithRemountStory = withRemountOnChange<StoryContentProps, StoryContent>(
  StoryContent,
  (props, prevProps) =>
    props.media.url !== prevProps.media.url ||
    props.component?.toString() !== prevProps.component?.toString()
);

export type StoryState = "loading" | "pause" | "playing";

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
  stories: ReactStory[];
  onStoryEnd?: VoidFunction;
  classNameContainer?: string;
  size?: {
    width: string;
    height: string;
  };
  bottomBar?: React.ReactNode;
  onStoriesEnd?: VoidFunction;
  // вызывается, когда на первой стори, была нажата кнопка "предыдущая стори"
  onStoriesRepeat?: VoidFunction;
  onPlayStory?: VoidFunction;
  onSetPause?: VoidFunction;
  onSourceLoaded?: (time?: number) => void;
  onClose?: VoidFunction;
  style?: React.CSSProperties;
}

export function StoryBody({
  stories,
  onSourceLoaded,
  onSetPause,
  onPlayStory,
  onStoriesEnd,
  onStoriesRepeat,
  size = { width: "350px", height: "711px" },
  classNameContainer,
  bottomBar,
  onClose,
  style,
}: StoryBodyProps) {
  const storyRef = React.useRef<StoryContent>(null);

  const {
    storySlide,
    index,
    incrementStory,
    decrementStory,
    onNextStory,
    onPrevStory,
  } = useStoryControls({
    stories,
    startIndex: 0,
    onStoriesRepeat,
    onStoriesEnd,
  });

  const [duration, setDuration] = React.useState(storySlide.duration || 0);

  const { progress, onStart, onPause, onResume, onReset } = useStoryProgress({
    time: duration,
    onEnd: () => {
      onReset();
      // _onStoryEnd();
      incrementStory();
    },
    interval: 100,
  });

  const onNextStoryClick = React.useCallback(() => {
    incrementStory();
    onReset();
  }, [incrementStory, onReset]);

  const onPrevStoryClick = React.useCallback(() => {
    decrementStory();
    onReset();
  }, [decrementStory, onReset]);

  const _onSourceLoad = React.useCallback(
    time => {
      time && setDuration(time);
      const dur = time || duration;

      // если есть время начинает отсчет
      dur !== 0 && onStart();
      storyRef.current?.videoNode?.current?.play();
    },
    [duration, onStart]
  );

  const _onPlayStory = React.useCallback(() => {
    onResume();
    onPlayStory && onPlayStory();
    storyRef.current?.videoNode?.current?.play();
  }, [onPlayStory, onResume]);

  const _onPauseStory = React.useCallback(() => {
    onPause();
    onSetPause && onSetPause();
    storyRef.current?.videoNode?.current?.pause();
  }, [onPause, onSetPause]);

  useWindowVisibilityChange(_onPlayStory, _onPauseStory);

  // TODO из-за "playing" не работает пауза на видосе
  // useEventListener(
  //   "waiting",
  //   _onPauseStory,
  //   storyRef.current?.videoNode?.current
  // );
  // useEventListener(
  //   "playing",
  //   _onPlayStory,
  //   storyRef.current?.videoNode?.current
  // );

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

  return (
    <article
      className={classNameContainer}
      style={{ ...StoryBodyStyles["story"], ...size, ...style }}
    >
      <header style={StoryBodyStyles["story__header"]}>
        <StoriesHeader
          progress={progress}
          storiesCount={stories.length}
          currentStoryIndex={index}
          onClose={onClose}
        />
      </header>

      <StoriesControls
        onNextStory={onNextStoryClick}
        onPrevStory={onPrevStoryClick}
        onPause={_onPauseStory}
        onResume={_onPlayStory}
      />

      <WithRemountStory
        ref={storyRef}
        {...storySlide}
        onSourceLoad={_onSourceLoad}
      />

      {bottomBar && (
        <footer style={StoryBodyStyles["story__footer"]}>{bottomBar}</footer>
      )}
    </article>
  );
}

// export const ForwardedRefStoriesCorousel = React.forwardRef<StoriesCarouselForwardRef, StoriesCarouselProps>(
//   StoriesCorousel
// );
