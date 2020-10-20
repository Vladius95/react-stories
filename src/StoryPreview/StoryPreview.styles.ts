import { ComponentStyle } from "src/@types/style"

export const StoryPreviewStyles: ComponentStyle<
  "story-preview" | "story-preview__text"
> = {
  "story-preview": {
    position: "relative",
    display: "inline-block",
    borderRadius: "8px",
    margin: "4px",
  },
  "story-preview__text": {
    padding: "8px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}
