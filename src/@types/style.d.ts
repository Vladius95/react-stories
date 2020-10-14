export type ComponentStyle<T> = {
  [key in T extends string ? string : never]: React.CSSProperties;
};
