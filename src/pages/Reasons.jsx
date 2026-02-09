import { useState } from 'react'
import { Link } from 'react-router-dom'

const reasons = [
    {
        id: 1,
        text: "I love you because you tolerate my childish tantrums with so much patience, like you were made to handle my drama with a smile — melts my heart every time."
    },
    {
        id: 2,
        text: "You’re my comfort and my fun—my partner and my best friend—everything in one."
    },
    {
        id: 3,
        text: "The way you make me smile, even on my worst moments."
    },
    {
        id: 4,
        text: "Your unwavering support and belief in me, even when I doubt myself."
    },
    {
        id: 5,
        text: "Your warm hugs that feel like home. You’re my safest place — no matter how chaotic the day is, coming back to you feels like home."
    },
    {
        id: 6,
        text: "The way you look at me with those loving eyes and a cute smile , always ready to embrace me with love and affection."
    },
    {
        id: 7,
        text: "Your kindness and the beautiful soul you have."
    },
    {
        id: 8,
        text: "You spoil me in the sweetest ways, and it’s not just gifts—it’s the attention, the time, the effort."
    },
    {
        id: 9,
        text: "You stand by me in front of the world — never complaining about me , simply treating me with love, loyalty and respect."
    },
    {
        id: 10,
        text: "Your patience and understanding when I'm being difficult. You’re patient with my moods and strong with my worries — you don’t judge, you understand."
    },
    {
        id: 11,
        text: "How you make me want to be a better person every day."
    },
    {
        id: 12,
        text: "Because you're simply YOU - and that's more than enough. You're my everything!",
    },
    {
        id: 13,
        text: "Most of all, I love you because with you I don’t have to act strong all the time. I can just be your baby girl… and you still choose me, love me, and spoil me.",
        special: true
    }
]

function Reasons() {
    const [revealedCards, setRevealedCards] = useState([])

    const handleCardClick = (id) => {
        if (!revealedCards.includes(id)) {
            setRevealedCards([...revealedCards, id])
        }
    }

    return (
        <div className="reasons-page">
            <Link to="/" className="back-btn">← Back to Home</Link>

            <div className="main-container reasons-container">
                <h1 className="reasons-title">13 Reasons Why I Love You 💖</h1>
                <p className="reasons-subtitle">Click each card to reveal a reason...</p>

                <div className="reasons-grid">
                    {reasons.map(reason => (
                        <div
                            key={reason.id}
                            className={`reason-card ${reason.special ? 'special' : ''} ${revealedCards.includes(reason.id) ? 'revealed' : ''}`}
                            onClick={() => handleCardClick(reason.id)}
                        >
                            <div className="reason-number">{reason.id}</div>
                            <div className="reason-heart">{reason.special ? '💖' : '💕'}</div>
                            <p className="reason-text">
                                {revealedCards.includes(reason.id) ? reason.text : 'Click to reveal...'}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="reasons-footer">
                    <p>...and a million more reasons I couldn't fit here! 💕</p>
                    <Link to="/quiz" className="btn btn-nav">Take the Photo Quiz →</Link>
                </div>
            </div>
        </div>
    )
}

export default Reasons
