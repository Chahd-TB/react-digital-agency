import { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ringPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Dot follows the mouse immediately
      dotRef.current.style.left = `${e.clientX}px`;
      dotRef.current.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      // Ring follows smoothly
      ringPosition.current.x +=
        (mouse.current.x - ringPosition.current.x) * 0.15;

      ringPosition.current.y +=
        (mouse.current.y - ringPosition.current.y) * 0.15;

      ringRef.current.style.left = `${ringPosition.current.x}px`;
      ringRef.current.style.top = `${ringPosition.current.y}px`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);

    const animation = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <>
      {/* Purple Ring */}
      <div
        ref={ringRef}
        className="
          fixed
          pointer-events-none
          z-[9998]
          w-12
          h-12
          rounded-full
          border-1
          border-primary
          -translate-x-1/2
          -translate-y-1/2
        "
      />

      {/* Purple Dot */}
      <div
        ref={dotRef}
        className="
          fixed
          pointer-events-none
          z-[9999]
          w-4
          h-4
          rounded-full
          bg-primary
          -translate-x-1/2
          -translate-y-1/2
        "
      />
    </>
  );
}

export default CustomCursor;