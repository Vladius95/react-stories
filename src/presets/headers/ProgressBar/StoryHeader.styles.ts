import { ComponentStyle } from "src/@types/style";

export const StoryHeaderStyles: ComponentStyle<"story-header"> = {
  "story-header": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  "story-header__close-btn": {
    border: 0,
    background: "none",
    appearance: "none",
    cursor: "pointer",
    padding: 0,
    marginTop: "8px",
  },
};
