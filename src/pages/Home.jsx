import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Confetti from '../components/Confetti'
import Lottie from 'lottie-react'
import heartAnimation from '../assets/heartAnimation.json'

function Home() {
    const [showResponse, setShowResponse] = useState(false)
    const [noButtonStyle, setNoButtonStyle] = useState({})

    const handleYes = () => {
        setShowResponse(true)
    }

    const handleNoHover = () => {
        // Make the "No" button run away
        const randomX = Math.random() * 200 - 100
        const randomY = Math.random() * 100 - 50
        setNoButtonStyle({
            transform: `translate(${randomX}px, ${randomY}px)`,
            transition: 'transform 0.3s ease'
        })
    }

    return (
        <div className="home-page">
            <div className="main-container">
                <div className="card valentine-card">
                    <div className="sparkle"></div>
                    <h1 className="title">Hey Beautiful! 💖</h1>
                    <p className="subtitle">I have something special for you...</p>

                    <div className="message-box">
                        <p className="love-message">
                            Every moment with you feels like a dream come true.
                            You make my heart skip a beat and my soul feel complete.
                            I'm so grateful to have you in my life.
                        </p>
                    </div>

                    {!showResponse ? (
                        <div className="valentine-question">
                            <h2>Will You Be My Valentine? 💝</h2>
                            <div className="button-container">
                                <button className="btn btn-yes" onClick={handleYes}>
                                    YES! 💕
                                </button>
                                <button
                                    className="btn btn-no"
                                    style={noButtonStyle}
                                    onMouseEnter={handleNoHover}
                                    onClick={handleNoHover}
                                >
                                    No 😢
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="response-container">
                            <Confetti />
                            <div className="celebration">
                                <h2>🎉 Yay! I Love You! 🎉</h2>
                                <p>You just made me the happiest person in the world!</p>
                                <Lottie animationData={heartAnimation} loop={true} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation to Other Sections */}
                <nav className="section-nav">
                    <Link to="/reasons" className="nav-card">
                        <span className="nav-icon">💕</span>
                        <span className="nav-text">13 Reasons Why ?<br />I Love You</span>
                    </Link>
                    <Link to="/quiz" className="nav-card">
                        <span className="nav-icon">📸</span>
                        <span className="nav-text">Photo Memory Quiz</span>
                    </Link>
                    <Link to="/love-quiz" className="nav-card special-nav">
                        <span className="nav-icon">💘</span>
                        <span className="nav-text">Do You Love Me?</span>
                    </Link>
                </nav>

                <div className="ps-note">PS: Customize this template with your own love story! 💕</div>
            </div>
        </div>
    )
}

export default Home
