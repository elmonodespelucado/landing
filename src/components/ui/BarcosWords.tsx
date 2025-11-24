import styles from '../../styles/Words.module.css';

export function BarcosWords({ words = [] }: { words?: string[] }) {
  // Mezclar palabras aleatoriamente
  const shuffledWords = [...words].sort(() => 0.5 - Math.random());

  function ramdomSizesAndColors() {
    const colors = ['text-primary', 'text-secondary', 'text-complementary'];
    const sizes = ['text-xs sm:text-sm', 'text-sm sm:text-base', 'text-base sm:text-lg'];

    return [
      sizes[Math.floor(Math.random() * sizes.length)],
      colors[Math.floor(Math.random() * colors.length)],
    ].join(' ');
  }
  function randomDuration() {
    return `${5 + Math.random() * 15}s`; // entre 80 y 120 segund
  }

  const tailwindClasses =
    'px-4 py-2 m-1 text-center cursor-pointer bg-gray-800/90 hover:scale-125 hover:shadow-xl shadow-complementary-50/30 transition-all duration-300 z-10 hover:z-20 font-semibold whitespace-nowrap relative flex items-center justify-center';

  return (
    <div className="flex flex-wrap items-center justify-center max-w-xl m-auto flex-1 font-changa overflow-hidden">
      {shuffledWords.map((word, index) => {
        return (
          <div
            key={index}
            style={{
              animationDuration: randomDuration(),
            }}
            className={`${ramdomSizesAndColors()} ${styles.item} ${styles.rightAnimate} ${tailwindClasses}`}
          >
            {word}
          </div>
        );
      })}
    </div>
  );
}
