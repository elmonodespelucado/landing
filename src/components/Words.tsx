import styles from '../styles/Words.module.css';

export function Words({ words = [] }: { words?: string[] }) {

    words.sort(() => 0.5 - Math.random());

    function randomColors() {
        const colors = [
            'text-primary',
            'text-primary-200',
            'text-primary-100',
            'text-secondary',
            'text-secondary-200',
            'text-secondary-100',
            'text-complementary',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function randomAnimations() {
        const anims = [styles.float1, styles.float2, styles.float3];
        return anims[Math.floor(Math.random() * anims.length)];
    }

    function randomSize() {
        const sizes = ['text-xl','text-lg','text-2xl'];
        return sizes[Math.floor(Math.random() * sizes.length)];
    }

 

    function randomDuration() {
        return `${6 + Math.random() * 4}s`; // entre 6 y 10s
    }
    
    return (
        <div className="flex flex-wrap justify-center items-start font-changa">
            {words.map((word, index) => (
                <p
                    key={index}
                    className={`${randomSize()} ${randomColors()} ${randomAnimations()} p-2 m-1 text-center bg-gray-800`}
                    style={{
                        animationDuration: randomDuration(),
                    }}
                >
                    {word}
                </p>
            ))}
        </div>
           );
}