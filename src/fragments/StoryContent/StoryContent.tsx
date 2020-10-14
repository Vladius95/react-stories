import * as React from "react"
import { Story } from "src/@types/story"
import { StoryContentStyles } from "./StoryContent.styles"

// хранилище под загруженные картинки в историях
// хранятся всю сессию
let imagePool: HTMLImageElement[] = []

export interface StoryContentProps extends Story {
  // time only for video
  onSourceLoad(time?: number): void
}

interface StoryContentState {
  isLoading: boolean
}

export class StoryContent extends React.Component<
  StoryContentProps,
  StoryContentState
> {
  imgNode = React.createRef<HTMLImageElement>()
  videoNode = React.createRef<HTMLVideoElement>()

  private _media = {
    image: (src: string) => (
      <img
        ref={this.imgNode}
        alt="The image of the story"
        src={src}
        onLoad={() => {
          this.setState({ isLoading: false })
          this.props.onSourceLoad()
        }}
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
  }

  constructor(props: StoryContentProps) {
    super(props)

    const { url, mediaType } = props.media

    let isLoading = true

    // TODO Вернуть и довести до ума
    // это картинка и нужно проверить, грузилась ли она уже
    // if (mediaType === "image") {
    //   const isImagesLoaded = mediaType === "image" && imagePool.findIndex((i) => i.src === url) !== -1;

    //   if (!isImagesLoaded) {
    //     const img = new Image();
    //     img.src = url;
    //     img.onload = () => {
    //       imagePool.push(img);
    //       this.props.onSourceLoad();
    //       this.setState({ isLoading: false });
    //     };
    //     imagePool.push(img);
    //   } else {
    //     isLoading = false;
    //     this.props.onSourceLoad();
    //   }
    // }

    this.state = {
      isLoading,
    }
  }

  render() {
    return (
      <section className="story" style={StoryContentStyles["story-content"]}>
        <div
          style={{
            ...StoryContentStyles["story-content__media-wrapper"],
            ...(this.state.isLoading &&
              StoryContentStyles["story-content__media-wrapper--loading"]),
          }}
        >
          {this.renderMedia()}
        </div>
        {this.state.isLoading && <div>Loader...</div>}
        {!this.state.isLoading && this.props.component}
      </section>
    )
  }

  renderMedia() {
    const { url, mediaType } = this.props.media

    return this._media[mediaType](url)
  }

  private _onVideoLoad = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    this.setState({ isLoading: false })
    this.props.onSourceLoad(this.videoNode.current.duration * 1000)
    console.log(this.videoNode.current.duration)
  }
}
