"use client";

import { useEffect, useRef } from "react";
import { animate, AnimationPlaybackControls } from "framer-motion";

function formatNumber(value: number, dec: number): string {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "M";
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + "K";
  } else {
    return value.toFixed(dec);
  }
}

function Counter({ from, to, dec }: { from: number; to: number; dec: number }) {
  const currentValue = useRef(from);
  const hasAnimationStarted = useRef(false);
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimationStarted.current) {
          hasAnimationStarted.current = true;

          if (node) {
            controlsRef.current = animate(from, to, {
              duration: 2,
              ease: "easeInOut",
              onUpdate(value) {
                currentValue.current = value;
                node.textContent = formatNumber(value, dec);
              },
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [from, to, dec]);

  return <p ref={nodeRef}>{formatNumber(from, dec)}</p>;
}

export default Counter;
