import { ComponentStyle } from "src/@types/style";

export const StoryControlsStyles: ComponentStyle<
  "story-controls" | "story-controls__control"
> = {
  "story-controls": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    display: "flex",
  },
  "story-controls__control": {
    width: "50%",

    background: "transparent",
    border: "none",
    outline: "none",
    padding: 0,

    cursor: "pointer",

    WebkitAppearance: "none",
  },
};
