import { useEffect, useRef } from "react";
import "./SmoothScroll.css";
import useWindowSize from "../../Hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    if (scrollingContainerRef.current) {
      document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`;
    }
  };

  useEffect(() => {
    const smoothScrollingHandler = () => {
      data.current = window.scrollY;
      data.previous += (data.current - data.previous) * data.ease;
      data.rounded = Math.round(data.previous * 100) / 100;

      if (scrollingContainerRef.current) {
        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
      }

      requestAnimationFrame(smoothScrollingHandler);
    };

    requestAnimationFrame(smoothScrollingHandler);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;

          // Smooth scroll to the target element
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
