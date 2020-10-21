export type ComponentStyle<T> = {
  [key in T extends string ? T : never]: React.CSSProperties;
};
