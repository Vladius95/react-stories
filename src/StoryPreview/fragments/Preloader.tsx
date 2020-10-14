import * as React from "react";

export interface PreloaderProps {
  isAnimated?: boolean;
  extraClass?: string;
  shape?: "circle" | "rect";
}

/**
 * Прелоадер в блоках получающих данные асинхронно
 *
 * @export
 * @param {*} { isAnimated = true } isAnimated выключает анимацию прелоадера
 * выставлять в false в случае большого кол-ва элементов на странице
 */
export function Preloader({ isAnimated = true, extraClass = "", shape = "rect" }: PreloaderProps) {
  return <div className={cn("preloader", { isAnimated }, extraClass, shape)} />;
}
