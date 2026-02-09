import { useState, useEffect } from 'react'

const colors = ['#ff6b9d', '#e74c3c', '#ffd700', '#ff4081', '#ff8e9e', '#ffc3a0']

function Confetti() {
  const [confetti, setConfetti] = useState([])

  useEffect(() => {
    const pieces = []
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360
      })
    }
    setConfetti(pieces)
  }, [])

  return (
    <div className="confetti-container">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
