import { useRef, useEffect } from "react";

/**
 * Хук, который реализует подписку на событие элемента в ComponentDidMount и отписку в ComponentWillUnmount
 * @param eventName
 * @param handler
 * @param element
 */
export function useEventListener<K extends keyof HTMLElementEventMap>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element?: HTMLElement | null | Window
) {
  const memorizedHandler = useRef<(event: HTMLElementEventMap[K]) => void>();

  useEffect(() => {
    memorizedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element) return;

    const eventListener = (event: HTMLElementEventMap[K]) =>
      memorizedHandler.current && memorizedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => element.removeEventListener(eventName, eventListener);
  }, [eventName, element]);
}
