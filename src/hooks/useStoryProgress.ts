import { calcProgress } from "src/utils/calc-progress"
import { StopwatchSettings, useStopwatch } from "./useStopwatch"

export function useStoryProgress(params: StopwatchSettings) {
  const { tick, ...restStopwatch } = useStopwatch(params)
  return { progress: calcProgress(tick, params.time), ...restStopwatch }
}
