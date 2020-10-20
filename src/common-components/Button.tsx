import * as React from "react"

const defaultStyle: React.CSSProperties = {
  border: 0,
  backgroundColor: "transparent",
  padding: 0,
  appearance: "none",
  cursor: "pointer",
}

// export interface BottomProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

export function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return <button {...props} style={{ ...defaultStyle, ...props.style }} />
}
