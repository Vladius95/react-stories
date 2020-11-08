import * as ReactDOM from "react-dom";
import * as React from "react";
import { DefaultStoriesFeed } from "./templates/DefaultStoryFeed";
import { InstagramStories } from "./templates/InstagramStories";

ReactDOM.render(
  React.createElement(InstagramStories),
  document.getElementById("page-root")
);
