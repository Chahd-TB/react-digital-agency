
function Work({ image, title, description }) {
  return (
    <div
      className="
        bg-white dark:bg-black
        rounded-xl
        overflow-hidden
        transition-all duration-300
        hover:scale-105

        w-full
        max-w-sm
        md:max-w-none
        mx-auto
      "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover"
      />

      <div className="py-4 md:py-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-3">
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Work;