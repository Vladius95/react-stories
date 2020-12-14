import * as React from "react";
import { ReactStories, ReactStory } from "src/@types/story";
import { StoryFeed } from "src/StoryFeed/StoryFeed";
import { createPortal } from "react-dom";
import { StoriesStyles } from "./Stories.styles";
import { LinkedList, LinkedListNode } from "src/utils/linked-list";
import { StoryBody } from "src/fragments/StoryBody/StoryBody";
import { StoriesHeader } from "src/fragments/ProgressBar/StoryHeader";
import { UserStatsBottomBar } from "src/presets/bottom-bars/UserStatsBottomBar/UserStatsBottomBar";
import { DirectMessage } from "src/presets/bottom-bars/DirectMessage/DirectMessage";

export interface StoriesProps {
  stories: ReactStories[];
  withLayout?: boolean;
}

export function Stories({ stories, withLayout = true }: StoriesProps) {
  const storyList = React.useMemo(() => new LinkedList(stories), [stories]);

  const [activeStory, setActiveStory] = React.useState<
    LinkedListNode<ReactStories>
  >(null);

  const closeActiveStory = React.useCallback(() => {
    setActiveStory(null);
  }, []);

  const onStorySet = React.useCallback(
    (story: ReactStories) => {
      const s = storyList.find(v => v === story);
      setActiveStory(s);
    },
    [storyList]
  );

  const _onNextStories = React.useCallback(() => {
    setActiveStory(activeStory.next);
  }, [activeStory]);

  const _onPrevStories = React.useCallback(() => {
    setActiveStory(activeStory.prev);
  }, [activeStory]);

  const [text, setText] = React.useState("");

  return (
    <>
      <StoryFeed stories={stories} onPreviewClick={onStorySet} />
      {activeStory && (
        <IntoPortal>
          <>
            {withLayout && (
              <div
                tabIndex={0}
                role="button"
                style={StoriesStyles["stories__layout"]}
                onClick={closeActiveStory}
              ></div>
            )}
            <StoryBody
              stories={activeStory.value.stories}
              onClose={closeActiveStory}
              style={StoriesStyles["stories"]}
              onStoriesEnd={_onNextStories}
              onStoriesRepeat={_onPrevStories}
              bottomBar={
                <DirectMessage
                  text={text}
                  onSend={alert}
                  onChange={e => setText(e.target.value)}
                />
              }
            />
          </>
        </IntoPortal>
      )}
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
