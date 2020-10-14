import * as React from "react"
import { range } from "src/utils/range"
import { Preloader } from "../Preloader"

export interface StoriesPreloader {
  count: number
}

export function StoriesPreloader({ count }: StoriesPreloader) {
  return (
    <div>
      {range(count).map(i => (
        <div key={i} className="sp_element">
          <Preloader />
        </div>
      ))}
    </div>
  )
}
