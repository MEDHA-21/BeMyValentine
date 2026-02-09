import { Routes, Route } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Home from './pages/Home'
import Reasons from './pages/Reasons'
import Quiz from './pages/Quiz'
import LoveQuiz from './pages/LoveQuiz'
import FloatingHearts from './components/FloatingHearts'
import MusicToggle from './components/MusicToggle'

function App() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
        audioRef.current = new Audio('/music/love-song.mp3')
        audioRef.current.loop = true

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
            }
        }
    }, [])

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <>
            <FloatingHearts />
            <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reasons" element={<Reasons />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/love-quiz" element={<LoveQuiz />} />
            </Routes>
        </>

    )
}

export default App
