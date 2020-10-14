import * as React from "react";
import { isFunction } from "src/utils/is-function";

type RemountedComponent<P, R> =
  | React.ComponentClass<P>
  | ((props: React.PropsWithChildren<P>) => React.ReactElement | null)
  | React.ForwardRefRenderFunction<R, P>;

/**
 * HOC который ремаунтит компонент, если значение его пропсов изменилось
 * @param Component
 * @param changedWith Ключ значения из пропсов, переданног компонента. если изменятся это значение, то компонент ремаунтится
 */
export function withRemountOnChange<P extends object, R = null>(
  Component: RemountedComponent<P, R>,
  changedWith: (keyof P)[] | ((props: P, prevProp: P) => boolean)
) {
  return React.forwardRef<R, P>(function Remounter(
    props: P,
    ref: React.MutableRefObject<R> | ((instance: null) => void) | React.RefObject<R> | null | undefined
  ) {
    const [key, setKey] = React.useState(0);
    const prevProps = React.useRef<P>(props);

    // нужна, чтобы обойти strictMode, тк он заставляет функции быть чистыми, вызывая их 2 раза
    const _strictModePrevKey = React.useRef(0);

    const isPropsChangedByArray =
      Array.isArray(changedWith) && changedWith.some((p) => props[p] !== prevProps.current[p]); //!isEqual(props[p], prevProps.current[p])
    const isPropsChangedByFun = isFunction(changedWith) && changedWith(props, prevProps.current);

    if (isPropsChangedByArray || isPropsChangedByFun) {
      _strictModePrevKey.current = key + 1;
      setKey(key + 1);
    }

    if (_strictModePrevKey.current !== key) {
      setKey(_strictModePrevKey.current);
    }

    prevProps.current = props;

    return <Component ref={ref} key={key} {...props} />;
  });
}
