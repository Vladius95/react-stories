import * as ReactDOM from "react-dom"
import * as React from "react"
import { DefaultStoriesFeed } from "./templates/DefaultStoryFeed"
import { FullStories } from "./templates/FullStories"

ReactDOM.render(
  React.createElement(FullStories),
  document.getElementById("page-root")
)
