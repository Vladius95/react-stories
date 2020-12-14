import * as React from "react";
import { DirectMessage } from "src/presets/bottom-bars/DirectMessage/DirectMessage";
import { Stories } from "src/Stories/Stories";
import { testConfig } from "./test-config";

export function InstagramStories() {
  const [text, setText] = React.useState("");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Instagram Stories Example</h1>
      <Stories stories={testConfig} />
      {/* <div style={{ width: "310px" }}>
        <DirectMessage
          text={text}
          onSend={alert}
          onChange={e => setText(e.target.value)}
        />
      </div> */}
    </div>
  );
}
