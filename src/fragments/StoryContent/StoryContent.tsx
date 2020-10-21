import * as React from "react";
import { ReactStory } from "src/@types/story";
import { Loader } from "src/common-components/Loader";
import { StoryContentStyles } from "./StoryContent.styles";

// хранилище под загруженные картинки в историях
// хранятся всю сессию
let imagePool: HTMLImageElement[] = [];

export interface StoryContentProps extends ReactStory {
  // time only for video (ms)
  onSourceLoad(time?: number): void;
}

interface StoryContentState {
  isLoading: boolean;
}

export class StoryContent extends React.Component<
  StoryContentProps,
  StoryContentState
> {
  imgNode = React.createRef<HTMLImageElement>();
  videoNode = React.createRef<HTMLVideoElement>();

  private _media = {
    image: (src: string) => (
      <img
        ref={this.imgNode}
        alt="Story Media Content"
        src={src}
        onLoad={this._onImageLoad}
        style={StoryContentStyles["story-content__image"]}
      />
    ),
    video: (src: string) => (
      <video
        ref={this.videoNode}
        src={src}
        controls={false}
        muted
        playsInline
        onLoadedMetadata={this._onVideoLoad}
        style={StoryContentStyles["story-content__video"]}
      />
    ),
  };

  constructor(props: StoryContentProps) {
    super(props);

    const { url, mediaType } = props.media;

    let isLoading = true;

    // это картинка и нужно проверить, грузилась ли она уже
    if (mediaType === "image") {
      const isImageLoaded =
        mediaType === "image" && imagePool.findIndex(i => i.src === url) !== -1;

      if (!isImageLoaded) {
        this._pushImage(url);
      } else {
        isLoading = false;
      }
    }

    this.state = {
      isLoading,
    };
  }

  render() {
    return (
      <section
        style={{
          ...StoryContentStyles["story-content"],
          backgroundColor: this.props.media.backgroundColor || "#303030",
        }}
      >
        <div
          style={{
            ...StoryContentStyles["story-content__media-wrapper"],
            ...(this.state.isLoading &&
              StoryContentStyles["story-content__media-wrapper--loading"]),
          }}
        >
          {this.renderMedia()}
        </div>
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && this.props.component}
      </section>
    );
  }

  renderMedia() {
    const { url, mediaType } = this.props.media;

    return this._media[mediaType](url);
  }

  private _onVideoLoad = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    this.setState({ isLoading: false });
    this.props.onSourceLoad(this.videoNode.current.duration * 1000);
  };

  private _onImageLoad = () => {
    this.setState({ isLoading: false });
    this.props.onSourceLoad();
  };

  private _pushImage = (url: string) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      imagePool.push(img);
      this.props.onSourceLoad();
      this.setState({ isLoading: false });
    };
  };
}
