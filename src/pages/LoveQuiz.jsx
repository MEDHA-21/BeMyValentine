import { useState } from 'react'
import { Link } from 'react-router-dom'

const funQuestions = [
    {
        id: 1,
        question: "On a scale of 1 to infinity, how much do you love me? 💕",
        type: "scale",
        options: [
            { label: "Infinity ♾️", value: "infinity" },
            { label: "Infinity + 1 ♾️♾️", value: "infinity_plus_1" },
            { label: "More than Meghana biryani 🍛", value: "more_than_meghana_biryani" },
            { label: "To the moon and back 🌙", value: "moon_and_back" }
        ]
    },
    {
        id: 2,
        question: "What's your favorite thing about me? 🥰",
        type: "multiChoice",
        options: [
            { label: "Your smile 😊", value: "smile" },
            { label: "Your weird jokes 🤪", value: "jokes" },
            { label: "Your hugs 🤗", value: "hugs" },
            { label: "Your cooking 👨‍🍳", value: "cooking" },
            { label: "Everything, duh! 💖", value: "everything" },
        ]
    },
    {
        id: 3,
        question: "If I were a snack, what snack would I be? 🍿",
        type: "multiChoice",
        options: [
            { label: "A combo meal  🍔🍟", value: "combo_meal" },
            { label: "Chocolate - sweet & irresistible 🍫", value: "chocolate" },
            { label: "Spicy chips - hot stuff! 🌶️", value: "spicy" },
            { label: "Ice cream - cool & refreshing 🍦", value: "ice_cream" }
        ]
    },
    {
        id: 4,
        question: "Complete this: 'I love you because...' ✍️",
        type: "text",
        placeholder: "Write something sweet (or funny)..."
    },
    {
        id: 5,
        question: "If we were stranded on an island, you would... 🏝️",
        type: "multiChoice",
        options: [
            { label: "Build us a romantic beach hut 🏠", value: "beach_hut" },
            { label: "Find WiFi somehow 📶", value: "wifi" },
            { label: "Complain but still love me 😂", value: "complain" },
            { label: "Turn it into our forever home 💕", value: "forever_home" }
        ]
    },
    {
        id: 6,
        question: "Our love song should be ... 🎵",
        type: "text",
        placeholder: "Get creative with this one!"
    },
    {
        id: 7,
        question: "What emoji describes our relationship? 💑",
        type: "multiChoice",
        options: [
            { label: "🔥 Fire - we're hot!", value: "fire" },
            { label: "🎢 Roller coaster - wild ride!", value: "rollercoaster" },
            { label: "🏡 Home - comfortable & warm", value: "home" },
            { label: "🚀 Rocket - to infinity!", value: "rocket" },
            { label: "🌈 Rainbow - colorful & magical", value: "rainbow" }
        ]
    },
    {
        id: 8,
        question: "Final question: Will you be mine forever? 💍",
        type: "multiChoice",
        options: [
            { label: "YES! 💕", value: "yes" },
            { label: "Absolutely YES! 💖", value: "absolutely_yes" },
            { label: "Forever and always YES! 💝", value: "forever_yes" },
            { label: "Is there any other answer? YES! 💗", value: "only_yes" }
        ]
    }
]

function LoveQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const [textInput, setTextInput] = useState('')

    const question = funQuestions[currentQuestion]

    const handleOptionSelect = (value) => {
        setAnswers({ ...answers, [question.id]: value })
    }

    const handleTextSubmit = () => {
        if (textInput.trim()) {
            setAnswers({ ...answers, [question.id]: textInput })
            setTextInput('')
        }
    }

    const handleNext = () => {
        if (question.type === 'text' && textInput.trim()) {
            handleTextSubmit()
        }

        if (currentQuestion < funQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setTextInput('')
        } else {
            submitResponses()
        }
    }

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
            setTextInput(answers[funQuestions[currentQuestion - 1].id] || '')
        }
    }

    const submitResponses = async () => {
        setIsSubmitting(true)

        // Format the responses nicely
        const formattedResponses = funQuestions.map(q => {
            const answer = answers[q.id]
            let answerText = answer
            if (q.options) {
                const option = q.options.find(o => o.value === answer)
                answerText = option ? option.label : answer
            }
            return `*${q.question}*\n→ ${answerText || 'Not answered'}`
        }).join('\n\n')

        const message = `💕 *Love Quiz Responses* 💕\n\n${formattedResponses}\n\n---\n_Sent with love from your Valentine_ 💖`

        // Open WhatsApp with the message
        const phoneNumber = '917978654813' // India country code + number
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        
        window.open(whatsappUrl, '_blank')
        setIsComplete(true)
        setIsSubmitting(false)
    }

    const isCurrentAnswered = () => {
        if (question.type === 'text') {
            return textInput.trim().length > 0 || answers[question.id]
        }
        return answers[question.id]
    }

    if (isComplete) {
        return (
            <div className="love-quiz-page">
                <Link to="/" className="back-btn">← Back to Home</Link>

                <div className="main-container">
                    <div className="quiz-wrapper love-complete">
                        <div className="love-success">
                            <div className="success-hearts">💕💖💕</div>
                            <h2>Aww, You're the Best! 🥰</h2>
                            <p>Your sweet responses have been sent!</p>
                            <p className="success-note">I can't wait to read them all! 💌</p>

                            <div className="success-actions">
                                <Link to="/" className="btn btn-primary">Back to Home 🏠</Link>
                                <Link to="/reasons" className="btn btn-secondary">See 13 Reasons 💕</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="love-quiz-page">
            <Link to="/" className="back-btn">← Back to Home</Link>

            <div className="main-container love-quiz-container">
                <h1 className="love-quiz-title">Do You Love Me? 💕</h1>
                <p className="love-quiz-subtitle">Let's find out just HOW much! 😏</p>

                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${((currentQuestion + 1) / funQuestions.length) * 100}%` }}
                    />
                </div>
                <p className="progress-text">
                    Question {currentQuestion + 1} of {funQuestions.length}
                </p>

                <div className="quiz-wrapper">
                    <div className="love-question-card">
                        <h3 className="love-question">{question.question}</h3>

                        {question.type === 'text' ? (
                            <div className="text-input-container">
                                <textarea
                                    className="love-text-input"
                                    placeholder={question.placeholder}
                                    value={textInput || answers[question.id] || ''}
                                    onChange={(e) => setTextInput(e.target.value)}
                                    rows={4}
                                />
                            </div>
                        ) : (
                            <div className="love-options">
                                {question.options.map((option) => (
                                    <button
                                        key={option.value}
                                        className={`love-option ${answers[question.id] === option.value ? 'selected' : ''}`}
                                        onClick={() => handleOptionSelect(option.value)}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="love-nav">
                        <button
                            className="btn btn-nav-prev"
                            onClick={handlePrev}
                            disabled={currentQuestion === 0}
                        >
                            ← Back
                        </button>
                        <button
                            className="btn btn-nav-next"
                            onClick={handleNext}
                            disabled={!isCurrentAnswered() || isSubmitting}
                        >
                            {isSubmitting ? 'Sending... 💌' :
                                currentQuestion === funQuestions.length - 1 ? 'Send My Love! 💕' : 'Next →'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoveQuiz
