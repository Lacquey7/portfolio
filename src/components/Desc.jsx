import { useState, useEffect } from 'react';

function Desc() {
    const words = ["Backend.", "Go.", "DevOps.", "Docker.", "Déploiement."];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        setShowAnimation(true); // Déclencher l'animation d'entrée

        const currentWord = words[currentWordIndex];
        const animationDelayPerLetter = 300;
        const pauseAfterAnimation = 2000;

        const totalAnimationTime = currentWord.length * animationDelayPerLetter + pauseAfterAnimation;

        // Changer de mot après la transition
        const timer = setTimeout(() => {
            setShowAnimation(false); // Animation de sortie
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) =>
                    prevIndex < words.length - 1 ? prevIndex + 1 : 0
                );
                setShowAnimation(true); // Réinitialiser l'animation d'entrée
            }, 500); // Délai entre l'animation de sortie et d'entrée
        }, totalAnimationTime);

        return () => clearTimeout(timer);
    }, [currentWordIndex]);

    return (
        <div className="flex items-center justify-center bg-gradient-to-r text-white">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold str">
                    Développeur FullStack
                </h1>
                <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
                     {" "}
                    <span
                        className={`inline-block transition-all duration-700 transform text-black bg-white rounded-m px-3 py-1 ${
                            showAnimation
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-5"
                        }`}
                    >
                        {words[currentWordIndex]}
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Desc;