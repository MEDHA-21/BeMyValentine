import { useState, useEffect } from 'react'

const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘', '💞']

function FloatingHearts() {
    const [floatingHearts, setFloatingHearts] = useState([])

    useEffect(() => {
        const createHeart = () => {
            const heart = {
                id: Date.now() + Math.random(),
                emoji: hearts[Math.floor(Math.random() * hearts.length)],
                left: Math.random() * 100,
                duration: 8 + Math.random() * 10,
                size: 0.8 + Math.random() * 1.5
            }

            setFloatingHearts(prev => [...prev, heart])

            // Remove heart after animation
            setTimeout(() => {
                setFloatingHearts(prev => prev.filter(h => h.id !== heart.id))
            }, heart.duration * 1000)
        }

        // Create initial hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(createHeart, i * 500)
        }

        // Create hearts periodically
        const interval = setInterval(createHeart, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="hearts-container">
            {floatingHearts.map(heart => (
                <span
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: `${heart.left}%`,
                        animationDuration: `${heart.duration}s`,
                        fontSize: `${heart.size}rem`
                    }}
                >
                    {heart.emoji}
                </span>
            ))}
        </div>
    )
}

export default FloatingHearts
