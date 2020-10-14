import * as React from "react"

const defaultStyle = {
  border: "none",
  backgroundColor: "transparent",
  padding: 0,
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
