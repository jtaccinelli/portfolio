import type { RefObject } from "react";
import { useEffect } from "react";

export function useIntersectionObserver<E extends HTMLElement | undefined>(
  callback: IntersectionObserverCallback,
  targetRef: RefObject<E>,
  options: IntersectionObserverInit = {}
) {
  // Observe the thing if needed.
  useEffect(() => {
    if (targetRef.current) {
      const processedOptions = Object.assign(options, {
        root: options?.root ?? document.querySelector("#main"),
      });

      const intersectionObserver = new IntersectionObserver(
        callback,
        processedOptions
      );

      intersectionObserver.observe(targetRef.current);
      return () => {
        intersectionObserver.disconnect();
      };
    }
  }, [targetRef, callback, options]);
}
