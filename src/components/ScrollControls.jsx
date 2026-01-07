import React, { useState, useEffect } from 'react';

export default function ScrollControls() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [showBottomBtn, setShowBottomBtn] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Show scroll-to-top when scrolled down 300px
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }

            // Show scroll-to-bottom when not at the bottom (with some buffer)
            if ((window.innerHeight + window.scrollY) < document.body.offsetHeight - 100) {
                setShowBottomBtn(true);
            } else {
                setShowBottomBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="scroll-controls">
            <button
                id="scroll-to-top"
                className={`scroll-btn ${showTopBtn ? 'visible' : ''}`}
                aria-label="Scroll to Top"
                onClick={scrollToTop}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </button>
            <button
                id="scroll-to-bottom"
                className={`scroll-btn ${showBottomBtn ? 'visible' : ''}`}
                aria-label="Scroll to Bottom"
                onClick={scrollToBottom}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
        </div>
    );
}
