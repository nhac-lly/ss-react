import React, { useState, useEffect } from 'react'
import './TourControls.css'

const TourControls = () => {
  const [currentView, setCurrentView] = useState('default')
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAudioMuted, setIsAudioMuted] = useState(false)
  const viewer = window.WALK.getViewer()

  useEffect(() => {
    // Listen for fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const toggleMap = () => {
    if (window.WALK) {
      const viewer = window.WALK.getViewer()
      if (viewer.isMinimapEnabled()) {
        viewer.disableMinimap()
      } else {
        viewer.enableMinimap()
      }
    }
  }

  const resetView = () => {
    // Reset to initial camera position using WALK API
    if (window.WALK) {
      setCurrentView('default')
      const viewer = window.WALK.getViewer()
      viewer.switchToView("view")
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

  const toggleAudio = () => {
    // Get all audio and video elements in the document
    const audioElements = document.querySelectorAll('audio')
    const videoElements = document.querySelectorAll('video')
    
    const allMediaElements = [...audioElements, ...videoElements]
    
    if (allMediaElements.length > 0) {
      const newMutedState = !isAudioMuted
      
      // Mute/unmute all audio and video elements
      allMediaElements.forEach(element => {
        element.muted = newMutedState
      })
      
      setIsAudioMuted(newMutedState)
    } else {
      // Fallback: try to control via WALK API if available
      if (window.WALK) {
        // Toggle the new muted state
        setIsAudioMuted(!isAudioMuted)
      }
    }
  }

  const takeScreenshot = () => {
    // Use WALK API to take screenshot
    if (window.WALK) {
      const viewer = window.WALK.getViewer()
      console.log('Viewer', viewer)
      viewer.captureImage()
    }
  }

  return (
    <div className="tour-controls">
      <div className="controls-group">
        <button 
          className={`control-btn ${viewer.isMinimapEnabled() ? 'active' : ''}`}
          onClick={toggleMap}
          title={viewer.isMinimapEnabled() ? 'Disable Map' : 'Enable Map'}
        >
          🧭
        </button>

        <button 
          className="control-btn"
          onClick={resetView}
          title="Reset View"
        >
          🏠
        </button>

        <button 
          className={`control-btn ${isAudioMuted ? 'active' : ''}`}
          onClick={toggleAudio}
          title={isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isAudioMuted ? '🔇' : '🔊'}
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