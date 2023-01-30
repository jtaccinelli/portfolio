import type { ComponentProps, CSSProperties } from "react";
import React from "react";
import clsx from "clsx";

interface Props extends ComponentProps<"div"> {
  text: string;
  repeats?: number;
  cx?: number;
  cy?: number;
  r?: number;
}

export function TextSpinner({
  text,
  repeats,
  cx = 300,
  cy = 300,
  r = 300,
  className,
  ...props
}: Props) {
  const style = {
    "--cx": `${cy}px`,
    "--cy": `${cx}px`,
  } as CSSProperties;

  return (
    <div
      style={style}
      {...props}
      className={clsx(
        "origin[var(--cx)_var(--cy)] h-[calc(var(--cy)*2)] w-[calc(var(--cx)*2)] animate-text-spin",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height={`${cy * 2}px`}
        width={`${cx * 2}px`}
      >
        <defs>
          <path
            d={`
                M ${cx - r}, ${cy}
                a ${r}, ${r} 0 1, 1 ${r * 2}, 0
                a ${r}, ${r} 0 1, 1 -${r * 2}, 0
                        `}
            id="textcircle"
            strokeWidth="25"
          />
        </defs>

        <text fill="white" dy="20" letterSpacing="7.25" className="uppercase">
          <textPath xlinkHref="#textcircle">
            {new Array(repeats)
              .fill(text)
              .reduce((string, segment) => string + segment, "")}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
