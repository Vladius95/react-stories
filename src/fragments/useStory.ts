import { useMemo, useCallback, useState, useEffect } from "react";
import { ReactStory } from "src/@types/story";
import { LinkedList } from "src/utils/linked-list";

export interface StoriesConfig {
  stories: ReactStory[];
  startIndex?: number;
  // вызывается, когда на первой стори, была нажата кнопка "предыдущая стори"
  onStoriesRepeat?: VoidFunction;
  onStoriesEnd?: VoidFunction;
}

export function useStoryControls({
  stories,
  startIndex = 0,
  onStoriesRepeat,
  onStoriesEnd,
}: StoriesConfig) {
  const storyList = useMemo(() => new LinkedList(stories), [stories]);
  const [storySlide, setStorySlide] = useState(
    storyList.find(v => v.id === stories[startIndex || 0].id)
  );
  // const autostart = useRef(storySlide.value.autostart || true);

  useEffect(() => {
    setStorySlide(storyList.find(v => v.id === stories[startIndex || 0].id));
  }, [storyList, startIndex, stories]);

  const incrementStory = useCallback(() => {
    if (storySlide.next === null) {
      onStoriesEnd && onStoriesEnd();
      return;
    }

    setStorySlide(storySlide.next);
  }, [onStoriesEnd, storySlide]);

  const decrementStory = useCallback(() => {
    if (storySlide.prev === null) {
      onStoriesRepeat && onStoriesRepeat();
      return;
    }

    setStorySlide(storySlide.prev);
  }, [onStoriesRepeat, storySlide]);

  const _onChangeStory = useCallback(
    (direction: "prev" | "next") => {
      direction === "next" ? incrementStory() : decrementStory();
    },
    [decrementStory, incrementStory]
  );

  const onNextStory = useCallback(() => _onChangeStory("next"), [
    _onChangeStory,
  ]);

  const onPrevStory = useCallback(() => _onChangeStory("prev"), [
    _onChangeStory,
  ]);

  return {
    storySlide: storySlide.value,
    index: storyList.indexOf(storySlide),
    incrementStory,
    decrementStory,
    onNextStory,
    onPrevStory,
  };
}
