import { useState, useRef, useEffect, useCallback } from "react";

export type StopwatchSettings = {
  time: number;
  onEnd?: VoidFunction;
  interval?: number;
  autostart?: boolean;
  repeat?: boolean;
};

/**
 * Stopwatch
 * @param time промежуток времени в миллисекундах
 * @param onEnd колбэк на завершение отсчета
 * @param interval частота обновления секундомера (tick) в миллисекундах
 * @param autostart стартовать на маунте
 * @param repeat повтор секундомера
 */
export function useStopwatch({ time, onEnd, interval = 1000, autostart = false, repeat = false }: StopwatchSettings) {
  const [tick, setTick] = useState(0);

  const intervalId = useRef<number>(-1);
  const prevTime = useRef<number>(0);

  const onPause = useCallback(() => {
    window.cancelAnimationFrame(intervalId.current);
  }, []);

  const onResume = useCallback(() => {
    prevTime.current = performance.now();

    const onTick = () => {
      const now = performance.now();
      const diff = now - prevTime.current;

      if (diff >= interval) {
        setTick((prevTick) => prevTick + diff);
        prevTime.current = performance.now();
      }

      intervalId.current = window.requestAnimationFrame(onTick);
    };

    intervalId.current = window.requestAnimationFrame(onTick);
  }, [interval]);

  const onReset = useCallback(() => {
    onPause();
    setTick(0);
  }, [onPause]);

  const onStart = useCallback(() => {
    onReset();

    if (time > 0) {
      onResume();
    }
  }, [onReset, onResume, time]);

  useEffect(() => {
    autostart && onStart();

    return onPause;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autostart]);

  useEffect(() => {
    if (time > 0 && tick >= time) {
      onPause();
      onEnd && onEnd();

      repeat && onStart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, tick, onPause, repeat, onStart]);

  return { tick, onStart, onPause, onResume, onReset };
}
