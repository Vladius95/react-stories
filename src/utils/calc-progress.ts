export function calcProgress(tick: number, duration: number) {
  return duration === 0 ? 0 : (tick / duration) * 100;
}
