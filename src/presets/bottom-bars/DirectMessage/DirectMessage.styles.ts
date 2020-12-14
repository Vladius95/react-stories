import { ComponentStyle } from "src/@types/style";

export const DirectMessageStyles: ComponentStyle<
  "direct-message" | "direct-message__input"
  // | "direct-message__input::placeholder"
> = {
  "direct-message": {
    display: "flex",
    padding: "0 16px",
  },
  "direct-message__input": {
    padding: "8px",
    borderRadius: "12px",
    border: "white 2px solid",
    fontSize: "0.8em",
    flex: "1",
    marginRight: "16px",
    background: "transparent",
    color: "white",
  },
  // "direct-message__input::placeholder": {
  //   color: "white",
  // },
};
