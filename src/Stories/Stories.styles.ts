import { ComponentStyle } from "src/@types/style"

export const StoriesStyles: ComponentStyle<"story-header"> = {
  stories__layout: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
  },
  stories: {
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translate(50%, -50%)",
  },
}
