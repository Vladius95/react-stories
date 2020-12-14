import { ComponentStyle } from "src/@types/style";

export const StoryBodyStyles: ComponentStyle<
  "story" | "story__header" | "story__footer"
> = {
  story: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "4px",
  },
  story__header: {
    position: "absolute",

    top: "16px",
    left: "16px",
    right: "16px",

    zIndex: 2,

    opacity: 1,
  },
  story__footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
};
