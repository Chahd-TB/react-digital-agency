function Team({ name, title, image }) {
  return (
    <div
      className="
        bg-white dark:bg-gray-900
        rounded-2xl
        border border-gray-100 dark:border-gray-600
        shadow-[0_8px_12px_-6px_rgba(0,0,0,0.1)]
        transition-all duration-300
        hover:scale-105

        w-full
        max-w-xs
        sm:max-w-sm
        md:max-w-none
        md:w-65
        h-full

        px-6 py-2

        flex flex-col md:flex-row
        items-center
        justify-center
        text-center md:text-left
        gap-4
      "
    >
      <img
        src={image}
        alt={name}
        className="w-20 h-20 md:w-15 md:h-15 rounded-full object-cover shrink-0"
      />

      <div className="md:pl-3">
        <h3 className="font-semibold text-lg md:text-base text-gray-800 dark:text-white">
          {name}
        </h3>

        <p className="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-300">
          {title}
        </p>
      </div>
    </div>
  );
}

export default Team;