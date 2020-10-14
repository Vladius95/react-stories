import { ComponentStyle } from "src/@types/style";

export const StoryPreviewFrameStyles: ComponentStyle<"story-preview-frame"> = {
  "story-preview-frame": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "-4px",

    pointerEvents: "none",
    zIndex: -1,
  },
};
