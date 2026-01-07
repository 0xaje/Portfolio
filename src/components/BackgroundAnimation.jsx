import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

const BackgroundAnimation = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        // Configuration based on theme
        const getThemeColors = () => {
            const isDark = theme === 'dark';
            return {
                particleColor: isDark ? 'rgba(107, 118, 255, 0.7)' : 'rgba(107, 118, 255, 0.6)',
                lineColor: isDark ? 'rgba(107, 118, 255, 0.15)' : 'rgba(107, 118, 255, 0.1)',
                bgColor: isDark ? '#050505' : '#ffffff'
            };
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        class Particle {
            constructor(x, y, directionX, directionY, size) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.baseSize = size;
                // Breathing logic
                this.angle = Math.random() * 360;
                this.oscillationSpeed = 0.02 + Math.random() * 0.03;
            }

            draw() {
                const colors = getThemeColors();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = colors.particleColor;
                ctx.fill();
            }

            update() {
                // Movement
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Mouse Interaction (Gentle repulsion)
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius && mouse.x !== null) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 1; // Move right
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 1; // Move left
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 1; // Move down
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 1; // Move up
                    }
                }

                this.x += this.directionX * 0.5; // Slower speed for "clean" feel
                this.y += this.directionY * 0.5;

                // "Breathing" size animation
                this.angle += this.oscillationSpeed;
                this.size = this.baseSize + Math.sin(this.angle) * 0.5;

                this.draw();
            }
        }

        const initParticles = () => {
            particles = [];
            // Calculate number of particles based on screen area to keep density consistent
            // Reduced density for a cleaner look
            const numberOfParticles = (canvas.width * canvas.height) / 15000;

            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 2) - 1; // -1 to 1
                let directionY = (Math.random() * 2) - 1;

                particles.push(new Particle(x, y, directionX, directionY, size));
            }
        };

        const connect = () => {
            const colors = getThemeColors();
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));

                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        // Clamp opacity
                        if (opacityValue < 0) opacityValue = 0;

                        ctx.strokeStyle = colors.lineColor.replace('0.1)', `${opacityValue * 0.15})`).replace('0.15)', `${opacityValue * 0.2})`);
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
        };

        // Initialize
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-run effect when theme changes to update colors

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Behind everything
                pointerEvents: 'none', // Don't block interactions
                // Background is handled by CSS on the body (inspiration wall image)
            }}
        />
    );
};

export default BackgroundAnimation;
