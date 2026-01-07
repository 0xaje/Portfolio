import { useState, useEffect } from 'react';

export function useTypewriter(phrases, speed = 100, pauseBetween = 2000, deleteSpeed = 50) {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (index >= phrases.length) {
            setIndex(0); // Loop back
            return;
        }

        if (isPaused) {
            const timeout = setTimeout(() => {
                setIsPaused(false);
                setReverse(true);
            }, pauseBetween);
            return () => clearTimeout(timeout);
        }

        const currentPhrase = phrases[index];

        if (subIndex === currentPhrase.length + 1 && !reverse) {
            setIsPaused(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, isPaused, phrases, speed, pauseBetween, deleteSpeed]);

    useEffect(() => {
        setText(phrases[index].substring(0, subIndex));
    }, [subIndex, index, phrases]);

    return text;
}
