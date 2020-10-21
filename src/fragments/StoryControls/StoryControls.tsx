import * as React from "react";
import { debounce } from "src/utils/debounce";
import { StoryControlsStyles } from "./StoryControls.styles";

type ControlEvent =
  | React.TouchEvent<HTMLButtonElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;

export interface StoriesControlsProps {
  onNextStory(): void;
  onPrevStory(): void;
  onPause(): void;
  onResume(): void;
}

export class StoriesControls extends React.Component<StoriesControlsProps> {
  private _isPaused = false;

  componentWillUnmount() {
    this.debounceOnPause.cancel();
  }

  render() {
    return (
      <div style={StoryControlsStyles["story-controls"]}>
        <button
          // onTouchStart={this.debounceOnPause}
          // onTouchEnd={this._onPrevStory}
          onMouseDown={this.debounceOnPause}
          onMouseUp={this._onPrevStory}
          style={StoryControlsStyles["story-controls__control"]}
        />
        <button
          // onTouchStart={this.debounceOnPause}
          // onTouchEnd={this._onNextStory}
          onMouseDown={this.debounceOnPause}
          onMouseUp={this._onNextStory}
          style={StoryControlsStyles["story-controls__control"]}
        />
      </div>
    );
  }

  private _onPause = (e: ControlEvent) => {
    e.preventDefault();
    this.props.onPause();
    this._isPaused = true;
  };

  private debounceOnPause = debounce(this._onPause, 200);

  private _onNextStory = (e: ControlEvent) => {
    e.preventDefault();

    if ("button" in e && e.button !== 0) return;

    this._onChange(this.props.onNextStory);
  };

  private _onPrevStory = (e: ControlEvent) => {
    e.preventDefault();

    if ("button" in e && e.button !== 0) return;

    this._onChange(this.props.onPrevStory);
  };

  private _onChange = (onChangeStory: VoidFunction) => {
    this.debounceOnPause.cancel();

    if (this._isPaused) {
      this.props.onResume();
    } else {
      onChangeStory();
    }

    this._isPaused = false;
  };
}
