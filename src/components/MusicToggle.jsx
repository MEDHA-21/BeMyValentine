function MusicToggle({ isPlaying, onToggle }) {
  return (
    <button 
      className={`music-toggle ${isPlaying ? 'playing' : ''}`}
      onClick={onToggle}
      title="Toggle Music"
    >
      {isPlaying ? '🎵' : '🔇'}
    </button>
  )
}

export default MusicToggle
