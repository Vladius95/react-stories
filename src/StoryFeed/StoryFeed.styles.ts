import { ComponentStyle } from "src/@types/style";

export const StoryFeedStyles: ComponentStyle<
  "story-feed" | "story-feed__item"
> = {
  "story-feed": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px 0",
    margin: "0 -16px",
  },
  "story-feed__item": {
    padding: "0 8px",
  },
};
