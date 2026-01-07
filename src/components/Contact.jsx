import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="section fade-in visible">
            <div className="container contact-container">
                <span className="eyebrow">What's Next?</span>
                <h2>Get In Touch</h2>
                <p>Open to meaningful collaborations, product discussions, and Web3 innovation.</p>
                <a href="mailto:ajeseun11@gmail.com" className="btn-primary big-btn">Say Hello</a>
                <div className="contact-details">
                    <p>📧 ajeseun11@gmail.com</p>
                    <div className="social-links" style={{ justifyContent: 'center', marginTop: '20px' }}>
                        <a href="https://github.com/0xaje" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>
                        </a>
                        <a href="https://x.com/0xaje_" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/0xaje/" target="_blank" rel="noopener noreferrer" className="social-icon"
                            aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                </path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
