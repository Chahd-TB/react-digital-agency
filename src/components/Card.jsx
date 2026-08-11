import { useRef, useState } from "react";

function Card({ title, description, image }) {
  const cardRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-xl p-0.5 transition-all duration-300"
      style={{
  background: hovered
    ? `radial-gradient(
        180px circle at ${position.x}px ${position.y}px,
        #a78bfa 0%,
        #8b5cf6 25%,
        #6d5dfb 50%,
        #5044E5 70%,
        #e5e7eb 100%
      )`
    : "#e5e7eb",
}}
    >
      <div
        className="
          bg-white dark:bg-gray-900
          rounded-xl
          p-6
          w-full max-w-md
          md:max-w-2xl
          flex
          flex-col
          md:flex-row
          items-center
          gap-6
          text-center
          md:text-left
          transition-colors duration-300
        "
      >
        <div className="shrink-0 bg-gray-100 dark:bg-gray-800 rounded-full p-4">
          <img
            src={image}
            alt={title}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-gray-900"
          />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h2>

          <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;