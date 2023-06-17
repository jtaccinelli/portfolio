import type { RefObject } from "react";
import { useIntersectionObserver } from "~/app/hooks/use-intersection-observer";
import { useState } from "react";

export function useHasStuck<E extends HTMLElement | undefined>(
  targetRef: RefObject<E>
) {
  const [hasStuck, setHasStuck] = useState(false);

  useIntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(observer.root);
      setHasStuck(entry.intersectionRatio < 0);
    });
  }, targetRef);

  return hasStuck;
}
