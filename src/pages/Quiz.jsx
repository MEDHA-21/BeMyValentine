import { useState } from 'react'
import { Link } from 'react-router-dom'

// Quiz questions - customize these with your own photos and dates!
const quizQuestions = [
    {
        id: 1,
        image: '/images/photo1.jpg',
        question: "When was this magical moment captured?",
        options: [
            { id: 'a', text: 'Our First Date - 2020' },
            { id: 'b', text: 'Summer Vacation - 2021' },
            { id: 'c', text: 'Anniversary Trip - 2022', correct: true },
            { id: 'd', text: "New Year's Eve - 2023" }
        ],
        memoryNote: "💕 Add your own memory note here!"
    },
    {
        id: 2,
        image: '/images/photo2.jpg',
        question: "Remember this adventure?",
        options: [
            { id: 'a', text: 'Beach Getaway - Spring 2021', correct: true },
            { id: 'b', text: 'Mountain Hiking - Fall 2021' },
            { id: 'c', text: 'City Exploration - Summer 2022' },
            { id: 'd', text: 'Weekend Road Trip - 2023' }
        ],
        memoryNote: "💕 Add your own memory note here!"
    },
    {
        id: 3,
        image: '/images/photo3.jpg',
        question: "When did we take this cute selfie?",
        options: [
            { id: 'a', text: "Valentine's Day - 2021" },
            { id: 'b', text: 'Christmas Party - 2022' },
            { id: 'c', text: "Friend's Wedding - 2023" },
            { id: 'd', text: 'Birthday Celebration - 2024', correct: true }
        ],
        memoryNote: "💕 Add your own memory note here!"
    },
    {
        id: 4,
        image: '/images/photo4.jpg',
        question: "This cozy moment was from...?",
        options: [
            { id: 'a', text: 'Movie Night - 2020' },
            { id: 'b', text: 'Lazy Sunday - Summer 2022', correct: true },
            { id: 'c', text: 'Rainy Day In - Fall 2023' },
            { id: 'd', text: 'Holiday Season - 2024' }
        ],
        memoryNote: "💕 Add your own memory note here!"
    },
    {
        id: 5,
        image: '/images/photo5.jpg',
        question: "Our most recent memory - when was this?",
        options: [
            { id: 'a', text: "Last Valentine's Day" },
            { id: 'b', text: "New Year's Celebration" },
            { id: 'c', text: 'Recent Date Night', correct: true },
            { id: 'd', text: 'Just Last Week!' }
        ],
        memoryNote: "💕 Add your own memory note here!"
    }
]

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [showFeedback, setShowFeedback] = useState(false)
    const [quizComplete, setQuizComplete] = useState(false)
    const [answers, setAnswers] = useState([])

    const question = quizQuestions[currentQuestion]

    const handleOptionClick = (option) => {
        if (showFeedback) return

        setSelectedAnswer(option.id)
        setShowFeedback(true)

        if (option.correct) {
            setScore(score + 1)
        }

        setAnswers([...answers, { questionId: question.id, correct: option.correct }])
    }

    const handleNext = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(null)
            setShowFeedback(false)
        } else {
            setQuizComplete(true)
        }
    }

    const handleRetry = () => {
        setCurrentQuestion(0)
        setScore(0)
        setSelectedAnswer(null)
        setShowFeedback(false)
        setQuizComplete(false)
        setAnswers([])
    }

    const getResultMessage = () => {
        const percentage = (score / quizQuestions.length) * 100
        if (percentage === 100) return "Perfect! You remember every moment we've shared! 🥰"
        if (percentage >= 80) return "Amazing! You really treasure our memories! 💖"
        if (percentage >= 60) return "Great job! Our love story is in your heart! 💕"
        if (percentage >= 40) return "Not bad! Let's make more memorable moments! 💗"
        return "Time to look through our photo albums together! 📸💕"
    }

    if (quizComplete) {
        return (
            <div className="quiz-page">
                <Link to="/" className="back-btn">← Back to Home</Link>

                <div className="main-container quiz-container">
                    <div className="quiz-wrapper">
                        <div className="quiz-results">
                            <h2 className="results-title">🎉 Quiz Complete! 🎉</h2>
                            <div className="results-score">
                                {score} / {quizQuestions.length}
                            </div>
                            <p className="results-message">{getResultMessage()}</p>
                            <div className="results-actions">
                                <button className="btn btn-primary" onClick={handleRetry}>
                                    Try Again 🔄
                                </button>
                                <Link to="/reasons" className="btn btn-secondary">
                                    See 13 Reasons 💕
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="quiz-page">
            <Link to="/" className="back-btn">← Back to Home</Link>

            <div className="main-container quiz-container">
                <h1 className="quiz-title">📸 Memory Lane Quiz 📸</h1>
                <p className="quiz-subtitle">How well do you remember our special moments?</p>

                <div className="score-display">
                    <span>Score: {score} / {quizQuestions.length}</span>
                </div>

                <div className="quiz-wrapper">
                    <div className="quiz-card active">
                        <div className="quiz-progress">
                            Question {currentQuestion + 1} of {quizQuestions.length}
                        </div>

                        <div className="quiz-image-container">
                            <img
                                src={question.image}
                                alt={`Memory Photo ${question.id}`}
                                className="quiz-image"
                                onError={(e) => {
                                    e.target.style.display = 'none'
                                }}
                            />
                        </div>

                        <h3 className="quiz-question">{question.question}</h3>

                        <div className="quiz-options">
                            {question.options.map(option => {
                                let optionClass = 'quiz-option'
                                if (showFeedback) {
                                    optionClass += ' answered'
                                    if (option.correct) {
                                        optionClass += ' correct-answer'
                                    } else if (selectedAnswer === option.id && !option.correct) {
                                        optionClass += ' wrong-answer'
                                    }
                                } else if (selectedAnswer === option.id) {
                                    optionClass += ' selected'
                                }

                                return (
                                    <button
                                        key={option.id}
                                        className={optionClass}
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option.text}
                                    </button>
                                )
                            })}
                        </div>

                        {showFeedback && (
                            <div className="quiz-feedback">
                                <p className={`feedback-text ${selectedAnswer && question.options.find(o => o.id === selectedAnswer)?.correct ? 'correct' : 'incorrect'}`}>
                                    {question.options.find(o => o.id === selectedAnswer)?.correct
                                        ? '✅ Correct!'
                                        : '❌ Oops! Not quite right!'}
                                </p>
                                <p className="memory-note">{question.memoryNote}</p>
                            </div>
                        )}
                    </div>
                </div>

                {showFeedback && (
                    <div className="quiz-nav">
                        <button
                            className="btn btn-nav-next"
                            onClick={handleNext}
                        >
                            {currentQuestion < quizQuestions.length - 1 ? 'Next →' : 'See Results 🎉'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Quiz
