import { ComponentStyle } from "src/@types/style";

export const StoryPreviewStyles: ComponentStyle<
  "story-preview" | "story-preview__text"
> = {
  "story-preview": {
    position: "relative",
    display: "inline-block",
    backgroundColor: "white",
    appearance: "none",
    border: "none",
    padding: 0,
    borderRadius: "8px",
    margin: "4px",
    cursor: "pointer",
  },
  "story-preview__text": {
    padding: "8px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
