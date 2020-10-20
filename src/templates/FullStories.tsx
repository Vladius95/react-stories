import * as React from "react"
import { Stories } from "src/Stories/Stories"
import { testConfig } from "./test-config"

export function FullStories() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Full Stories Example</h1>
      <Stories stories={testConfig} />
    </div>
  )
}
