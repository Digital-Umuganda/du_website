import { useState, useEffect, useCallback } from "react";

export const useAutoScroll = (itemCount: number, interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
  }, [itemCount]);

  const previousIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
  }, [itemCount]);

  useEffect(() => {
    const timer = setInterval(nextIndex, interval);
    return () => clearInterval(timer);
  }, [nextIndex, interval]);

  return { currentIndex, nextIndex, previousIndex };
};
