import { ComponentStyle } from "src/@types/style";

export const StoryHeaderStyles: ComponentStyle<
  "story-header" | "story-header__close-btn"
> = {
  "story-header": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  "story-header__close-btn": {
    marginTop: "8px",
  },
};
