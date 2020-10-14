import * as React from "react"
import { StoryProgress } from "../StoryProgress/StoryProgress"
import { StoryHeaderStyles } from "./StoryHeader.styles"

export interface StoriesHeaderProps {
  storiesCount: number
  currentStoryIndex: number
  progress: number
  onClose: VoidFunction
}

export function StoriesHeader({
  storiesCount,
  currentStoryIndex,
  progress,
  onClose,
}: StoriesHeaderProps) {
  const _onClose = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      onClose()
    },
    [onClose]
  )

  return (
    <div style={StoryHeaderStyles["stories-header"]}>
      <StoryProgress
        currentIndex={currentStoryIndex}
        storiesCount={storiesCount}
        progress={progress}
      />
      <button
        onClick={_onClose}
        style={StoryHeaderStyles["story-header__close-btn"]}
      >
        <Close />
      </button>
    </div>
  )
}

function Close() {
  return (
    <svg fill="none" width={24} height={24} viewBox={`0 0 24 24`}>
      <path
        d="M17.5 6.5l-11 11M6.5 6.5l11 11"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="white"
      />
    </svg>
  )
}
