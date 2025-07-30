import React, { useState, useEffect } from 'react'
import './TourControls.css'

const TourControls = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false)
  const [currentView, setCurrentView] = useState('default')
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    // Listen for fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled)
    // Here you could integrate with the WALK engine audio system
    if (window.WALK && window.WALK.audio) {
      if (isAudioEnabled) {
        window.WALK.audio.mute()
      } else {
        window.WALK.audio.unmute()
      }
    }
  }

  const resetView = () => {
    // Reset to initial camera position using WALK API
    if (window.WALK && window.WALK.camera) {
      setCurrentView('default')
      // You could implement specific view reset logic here
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const takeScreenshot = () => {
    // Use WALK API to take screenshot
    if (window.WALK && window.WALK.screenshot) {
      window.WALK.screenshot()
    }
  }

  return (
    <div className="tour-controls">
      <div className="controls-group">
        <button 
          className={`control-btn ${isAudioEnabled ? 'active' : ''}`}
          onClick={toggleAudio}
          title={isAudioEnabled ? 'Mute Audio' : 'Enable Audio'}
        >
          🔊
        </button>

        <button 
          className="control-btn"
          onClick={resetView}
          title="Reset View"
        >
          🏠
        </button>

        <button 
          className={`control-btn ${isFullscreen ? 'active' : ''}`}
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? '⤓' : '⤢'}
        </button>

        <button 
          className="control-btn"
          onClick={takeScreenshot}
          title="Take Screenshot"
        >
          📷
        </button>
      </div>

      <div className="view-indicator">
        <span className="view-label">View: {currentView}</span>
      </div>
    </div>
  )
}

export default TourControls 