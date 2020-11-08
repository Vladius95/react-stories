import { ComponentStyle } from "src/@types/style";

export const StoryProgressStyles: ComponentStyle<
  "story-progress__line" | "story-progress__line-progress"
> = {
  "story-progress__line": {
    opacity: 0.3,
    stroke: "white",
  },
  "story-progress__line-progress": {
    stroke: "white",
  },
};
