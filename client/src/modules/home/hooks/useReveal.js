import { useRef, useEffect } from "react";

/**
 * useReveal
 * Attaches an IntersectionObserver to a single element.
 * Adds "visible" class when it enters the viewport.
 *
 * Usage:
 *   const ref = useReveal();
 *   <div ref={ref} className="reveal"> ... </div>
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * useRevealRefs
 * Returns n reveal refs at once — avoids repeating useReveal() calls.
 *
 * Usage:
 *   const [heroRef, featuresRef, portalsRef] = useRevealRefs(3);
 */
export function useRevealRefs(count, threshold = 0.12) {
  const refs = Array.from({ length: count }, () => useRef(null)); // eslint-disable-line

  useEffect(() => {
    const observers = refs.map((ref) => {
      const el = ref.current;
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            obs.disconnect();
          }
        },
        { threshold }
      );

      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [threshold]); // eslint-disable-line

  return refs;
}
