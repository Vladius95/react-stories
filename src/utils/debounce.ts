export function debounce(callback: Function, time: number = 0) {
  let timeoutId: number;
  function debounced(...args) {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), time);
  }

  debounced.cancel = () => window.clearTimeout(timeoutId);
  debounced.flush = () => {
    window.clearTimeout(timeoutId);
    callback();
  };

  return debounced;
}

function name() {
  if (Math.random()) {
    return true;
  } else {
    return false;
  }
}
