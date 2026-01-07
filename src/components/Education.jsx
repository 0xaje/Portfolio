import React from 'react';

export default function Education() {
    return (
        <section id="education" className="section fade-in visible">
            <div className="container">
                <span className="section-label">Education & Certifications</span>

                <div className="edu-block exp-card">
                    <h3>Bachelor of Information and Communication Technology (ICT)</h3>
                    <p className="edu-school">Esfam-Benin University, Porto Novo, Republic of Benin</p>
                    <span className="edu-date"></span>
                </div>

                <div className="certs-grid">
                    <div className="cert-item exp-card">
                        <h4>Certifications</h4>
                        <ul>
                            <li>Blockchain Development on zkSync Era — Metaschool</li>
                            <li>Smart Contract Development in Move (Aptos & Sui) — Metaschool</li>
                            <li>Product Management Essentials — Udemy</li>
                            <li>Python, CSS, Bootstrap, jQuery — Udemy</li>
                        </ul>
                    </div>
                    <div className="cert-item exp-card">
                        <h4>Recognitions</h4>
                        <div className="tags">
                            <span className="tag">Metaschool NFT</span>
                            <span className="tag">Web3 Dev Hero NFT</span>
                            <span className="tag">Sui & Aptos NFTs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
