import { ComponentStyle } from "src/@types/style";

export const StoryContentStyles: ComponentStyle<"story-content"> = {
  "story-content": {
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "100%",

    overflow: "hidden",

    userSelect: "none",
    backgroundColor: "black",
  },
  "story-content__image": {
    width: "100%",
    height: "100%",

    objectFit: "cover",
  },
  "story-content__video": {
    position: "absolute",
    left: "50%",

    width: "auto",
    height: "100%",

    transform: "translateX(-50%)",

    pointerEvents: "none",
  },
  "story-content__media-wrapper": {
    position: "relative",
    maxWidth: "100%",
    height: "100%",
  },

  "story-content__media-wrapper--loading": {
    display: "none",
  },
};
