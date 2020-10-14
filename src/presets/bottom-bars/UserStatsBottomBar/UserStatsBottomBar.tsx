import * as React from "react"
import { Button } from "src/common-components/Button"
import { UserStatsBottomBarStyles } from "./UserStatsBottomBar.styles"

export interface StoriesBottomBarProps {
  isLiked: boolean
  isDisliked: boolean
  isFavorite: boolean
  onStatsChange?: VoidFunction
  onLike?: VoidFunction
  onDislike?: VoidFunction
  onFavorite?: VoidFunction
}

export function UserStatsBottomBar({
  isLiked,
  isDisliked,
  isFavorite,
  onLike,
  onDislike,
  onFavorite,
}: StoriesBottomBarProps) {
  return (
    <section style={UserStatsBottomBarStyles["user-stats-bottom-bar"]}>
      <div>
        <Button
          style={{
            marginRight: "12px",
            opacity: isLiked ? 1 : 0.7,
          }}
          onClick={onLike}
        >
          <Like />
        </Button>
        <Button
          style={{
            transform: "rotate(180deg)",
            opacity: isDisliked ? 1 : 0.7,
          }}
          onClick={onDislike}
        >
          <Like />
        </Button>
      </div>

      <Button
        onClick={onFavorite}
        style={{
          opacity: isFavorite ? 1 : 0.7,
        }}
      >
        <Favorite />
      </Button>
    </section>
  )
}

export function Like() {
  return (
    <svg
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <path
        d="m0 1v8c0 .552246.447693 1 1 1h3v-10h-3c-.552307 0-1 .447693-1 1z"
        transform="translate(0 5)"
      />
      <path
        d="m9.15332 5.02979h-2.9541c-.258301 0-.387695-.172363-.431152-.246582-.043457-.0737305-.131348-.270508-.0063477-.496094l1.0415-1.87549c.228516-.410645.251953-.893555.0649414-1.32471-.187012-.43164-.556152-.744629-1.0127-.858398l-.734375-.183594c-.178711-.0449219-.368164.0122071-.492676.150391l-3.9873 4.42969c-.413574.460449-.641113 1.0542-.641113 1.67236v5.23242c0 1.37842 1.12158 2.5 2.5 2.5l4.97412-.0004883c1.12305 0 2.11475-.756348 2.41113-1.83887l1.06738-4.89844c.03125-.13623.0473633-.275879.0473633-.415527 0-1.01807-.828613-1.84668-1.84668-1.84668z"
        transform="translate(5 .97)"
      />
    </svg>
  )
}

export function Favorite() {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="126"
      height="126"
      viewBox="0 0 126 126"
      fill="white"
      style={{ width: "16px", height: "16px" }}
    >
      <path
        d="M121.215,44.212l-34.899-3.3c-2.2-0.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101,0l-12.4,30.3
		c-0.8,2.1-2.8,3.5-5,3.7l-34.9,3.3c-5.2,0.5-7.3,7-3.4,10.5l26.3,23.1c1.7,1.5,2.4,3.7,1.9,5.9l-7.9,32.399
		c-1.2,5.101,4.3,9.3,8.9,6.601l29.1-17.101c1.9-1.1,4.2-1.1,6.1,0l29.101,17.101c4.6,2.699,10.1-1.4,8.899-6.601l-7.8-32.399
		c-0.5-2.2,0.2-4.4,1.9-5.9l26.3-23.1C128.615,51.212,126.415,44.712,121.215,44.212z"
      />
    </svg>
  )
}
