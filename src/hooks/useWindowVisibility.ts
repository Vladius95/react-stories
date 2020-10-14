import { useCallback } from "react";
import { useEventListener } from "./useEventListener";

export function useWindowVisibilityChange(onWindowFocus: VoidFunction, onWindowBlur: VoidFunction) {
  const onVisibilityChange = useCallback(() => {
    if (document.visibilityState === "visible") {
      onWindowFocus();
    } else {
      onWindowBlur();
    }
  }, [onWindowBlur, onWindowFocus]);

  useEventListener("waiting", onVisibilityChange, window);
}
