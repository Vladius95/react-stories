import { ComponentStyle } from "src/@types/style";

export const StoryStyles: ComponentStyle<"story"> = {
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
};
