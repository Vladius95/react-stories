import * as React from "react";
import { useStoryProgress } from "src/hooks/useStoryProgress";
import {
  StoriesBottomBarProps,
  UserStats,
  UserStatsBottomBar,
} from "src/presets/bottom-bars/UserStatsBottomBar/UserStatsBottomBar";
import { StoriesHeader } from "src/presets/headers/ProgressBar/StoryHeader";
import { StoryBody } from "src/fragments/StoryBody/StoryBody";
import { useStoryControls } from "src/fragments/useStory";
import { ReactStory } from "src/@types/story";

export interface StoryProps extends StoriesBottomBarProps {
  story: ReactStory[];
  onStoriesEnd?: VoidFunction;
  onStoriesRepeat?: VoidFunction;
  // TODO index
  onClose?(): void;
  style?: React.CSSProperties;
}

export function Story({
  story,
  onStoriesEnd,
  onStoriesRepeat,
  userStats,
  onClose,
  style,
}: StoryProps) {
  const {
    storySlide,
    index,
    incrementStory,
    decrementStory,
    onNextStory,
    onPrevStory,
  } = useStoryControls({
    stories: story,
    startIndex: 0,
    onStoriesEnd,
    onStoriesRepeat,
  });
  //const autostart = React.useRef(storySlide.value.autostart || true);
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

  const _onSourceLoad = React.useCallback(
    time => {
      time && setDuration(time);
      const dur = time || duration;

      // если есть время начинает отсчет
      dur !== 0 && onStart();
    },
    [duration, onStart]
  );

  return (
    <StoryBody
      storySlide={storySlide}
      size={{ width: "350px", height: "711px" }}
      onNextStoryClick={() => {
        incrementStory();
        onReset();
      }}
      onPrevStoryClick={() => {
        decrementStory();
        onReset();
      }}
      onSourceLoaded={_onSourceLoad}
      onSetPause={onPause}
      onPlayStory={onResume}
      header={
        <StoriesHeader
          progress={progress}
          storiesCount={story.length}
          currentStoryIndex={index}
          onClose={onClose}
        />
      }
      bottomBar={<UserStatsBottomBar userStats={userStats} />}
      style={style}
    />
  );
}
