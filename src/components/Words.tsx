import styles from '../styles/Words.module.css';

export function Words({ words = [] }: { words?: string[] }) {

    words.sort(() => 0.5 - Math.random());

    function randomColors() {
        const colors = [
            'text-primary',
            'text-primary-600',
            'text-primary-500',
            'text-secondary',
            'text-secondary-500',
            'text-secondary-400',
            'text-complementary',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function randomAnimations() {
        const anims = [styles.float1, styles.float2, styles.float3];
        return anims[Math.floor(Math.random() * anims.length)];
    }

    function randomSize() {
        const sizes = ['text-sm sm:text-xl','text-xs sm:text-lg','text-md sm:text-2xl'];
        return sizes[Math.floor(Math.random() * sizes.length)];
    }

 

    function randomDuration() {
        return `${6 + Math.random() * 4}s`; // entre 6 y 10s
    }
    
    return (
        <div className="flex flex-wrap justify-center items-start font-changa">
            {words.map((word, index) => (
                <span
                    key={index}
                    className={`${randomSize()} ${randomColors()} ${randomAnimations()} ${styles.item} p-2 m-1 text-center bg-gray-800 cursor-pointer hover:scale-125 hover:shadow-lg shadow-complementary-50/20 transition-all duration-700`}
                    style={{
                        animationDuration: randomDuration(),
                    }}
                >
                    {word}
                </span>
            ))}
        </div>
           );
}