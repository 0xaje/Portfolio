import React from 'react';

const skillsData = [
    {
        title: "Blockchain & Web3",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
        ),
        skills: [
            "Smart Contract Dev", "Aptos", "Sui", "zkSync Era", "MANTRA Chain",
            "dApp Architecture", "Token Creation", "Web3 Gaming", "Decentralized Teams"
        ]
    },
    {
        title: "Development",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        ),
        skills: [
            "Python", "JavaScript", "Rust", "Move", "Solidity",
            "React.js", "Node.js", "REST APIs", "Pinata API",
            "Git / GitHub", "Docker", "Kubernetes"
        ]
    },
    {
        title: "Product & Management",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
        ),
        skills: [
            "Product Roadmapping", "Agile & Sprint Planning", "User Stories",
            "Stakeholder Mgmt", "JIRA", "Figma", "Notion", "ICT Operations"
        ]
    },
    {
        title: "Content & Media",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 7l-7 5 7 5V7z"></path>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
        ),
        skills: [
            "Educational Writing", "Video Creation", "Podcasting",
            "Script Writing", "Storyboarding", "Video Editing"
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section fade-in visible">
            <div className="container">
                <span className="section-label">Skills & Expertise</span>
                <div className="skills-grid-redesign">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-header">
                                <div className="icon-box">
                                    {category.icon}
                                </div>
                                <h4>{category.title}</h4>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
