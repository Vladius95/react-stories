export function isFunction(callback: unknown): callback is Function {
  return callback && {}.toString.call(callback) === "[object Function]";
}
