import { ComponentStyle } from "src/@types/style";

export const DirectMessageStyles: ComponentStyle<
  "direct-message" | "direct-message__input"
> = {
  "direct-message": {
    display: "flex",
    // width: "100%",
    // justifyContent: "space-between",
    // maxWidth: "80%",
  },
  "direct-message__input": {
    padding: "8px",
    borderRadius: "12px",
    border: "black 2px solid",
    fontSize: "1em",
    marginRight: "auto",
  },
};
