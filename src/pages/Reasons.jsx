import { useState } from 'react'
import { Link } from 'react-router-dom'

const reasons = [
    { id: 1, text: "Your smile lights up my entire world." },
    { id: 2, text: "You're my best friend and my soulmate." },
    { id: 3, text: "The way you make me laugh, even on my worst days." },
    { id: 4, text: "Your unwavering support and belief in me." },
    { id: 5, text: "Your warm hugs that feel like home." },
    { id: 6, text: "The way you look at me with those loving eyes." },
    { id: 7, text: "Your kindness and the beautiful soul you have." },
    { id: 8, text: "How you remember the little things that matter to me." },
    { id: 9, text: "The adventures we share together, big and small." },
    { id: 10, text: "Your patience and understanding when I'm being difficult." },
    { id: 11, text: "How you make me want to be a better person every day." },
    { id: 12, text: "The comfort of simply being in your presence." },
    { id: 13, text: "Because you're simply YOU - and that's more than enough!", special: true }
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
