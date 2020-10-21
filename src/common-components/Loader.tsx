import * as React from "react";
import { range } from "src/utils/range";

export interface LoaderProps {
  fill?: string;
  duration?: number;
}

export function Loader({ fill = "#ffffff", duration = 1 }: LoaderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="48px"
      height="48px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      {range(12).map(i => (
        <g key={i} transform={`rotate(${i * 30} 50 50)`}>
          <rect
            x="46.5"
            y="22.5"
            rx="3.5"
            ry="7.5"
            width="7"
            height="15"
            fill={fill}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur={`${duration}s`}
              begin={`-${1 - i / 12}s`}
              repeatCount="indefinite"
            />
          </rect>
        </g>
      ))}
    </svg>
  );
}
