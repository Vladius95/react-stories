import * as React from "react";
import { ReactStories, ReactStory } from "src/@types/story";
import { Story } from "src/Story/Story";
import { StoryFeed } from "src/StoryFeed/StoryFeed";
import { createPortal } from "react-dom";
import { StoriesStyles } from "./Stories.styles";
import { LinkedList, LinkedListNode } from "src/utils/linked-list";

export interface StoriesProps {
  stories: ReactStories[];
  onLikeClick?: VoidFunction;
  onDislikeClick?: VoidFunction;
  onFavoriteClick?: VoidFunction;
  withLayout?: boolean;
}

export function Stories({
  stories,
  onLikeClick,
  onDislikeClick,
  onFavoriteClick,
  withLayout = true,
}: StoriesProps) {
  const storyList = React.useMemo(() => new LinkedList(stories), [stories]);

  const [activeStory, setActiveStory] = React.useState<
    LinkedListNode<ReactStories>
  >(null);

  const closeActiveStory = React.useCallback(() => {
    setActiveStory(null);
  }, []);

  const onStorySet = React.useCallback(
    (id: string | number) => {
      const s = storyList.find(v => v.id === id);
      setActiveStory(s);
    },
    [storyList]
  );

  const onNextStories = React.useCallback(() => {
    console.log(activeStory.next);
    setActiveStory(activeStory.next);
  }, [activeStory]);

  const onPrevStories = React.useCallback(() => {
    setActiveStory(activeStory.prev);
  }, [activeStory]);

  return (
    <>
      <StoryFeed stories={stories} onPreviewClick={onStorySet} />
      <IntoPortal>
        {activeStory && (
          <>
            {withLayout && (
              <div
                tabIndex={0}
                role="button"
                style={StoriesStyles["stories__layout"]}
                onClick={closeActiveStory}
              ></div>
            )}
            <Story
              story={activeStory.value.stories}
              onClose={closeActiveStory}
              style={StoriesStyles["stories"]}
              userStats={{
                isDisliked: true,
                isLiked: false,
                isFavorite: false,
              }}
              onLikeClick={onLikeClick}
              onDislikeClick={onDislikeClick}
              onFavoriteClick={onFavoriteClick}
              onStoriesEnd={onNextStories}
              onStoriesRepeat={onPrevStories}
            />
          </>
        )}
      </IntoPortal>
    </>
  );
}

interface PortalProps {
  children: React.ReactNode;
}

const IntoPortal = ({ children }: PortalProps) => {
  const body = React.useRef(document.body);

  return createPortal(children, body.current);
};
