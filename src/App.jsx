import React, { useState, useEffect } from 'react'
import InfoPanel from './components/InfoPanel'
import TourControls from './components/TourControls'
import './App.css'

function App() {
  const [isWalkLoaded, setIsWalkLoaded] = useState(false)
  const [showInfoPanel, setShowInfoPanel] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)

  useEffect(() => {
    let progressInterval
    
    // Simulate loading progress
    if (!isWalkLoaded) {
      progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 90) return prev // Cap at 90% until actual load
          return prev + Math.random() * 15
        })
      }, 200)
    }

    // Check if WALK (the 3D engine) is loaded
    const checkWalkLoaded = () => {
      console.log('Checking if WALK is loaded', window.WALK)
      if (window.WALK) {
        const viewer = window.WALK.getViewer()
        viewer.onSceneReadyToDisplay(() => {
          setLoadingProgress(100)
          setTimeout(() => {
            setIsLoadingComplete(true)
            setTimeout(() => setIsWalkLoaded(true), 500) // Delay for fade-out animation
          }, 600) // Small delay for completion animation
        })
        if (progressInterval) clearInterval(progressInterval)
      } else {
        setTimeout(checkWalkLoaded, 100)
      }
    }
    checkWalkLoaded()

    return () => {
      if (progressInterval) clearInterval(progressInterval)
    }
  }, [])

  // useEffect(() => {
  //   const viewer = window.WALK.getViewer()
  //   viewer.onSceneReadyToDisplay(() => {
  //     setIsLoadingComplete(true)
  //   })
  // }, [])

  return (
    <div className="react-overlay">
      <div className="react-ui-top-left">
        <button 
          className="react-info-button"
          onClick={() => setShowInfoPanel(!showInfoPanel)}
        >
          ℹ️ Tour Info
        </button>
      </div>

      {showInfoPanel && (
        <InfoPanel onClose={() => setShowInfoPanel(false)} />
      )}

      {isWalkLoaded && (
        <TourControls />
      )}

      {!isWalkLoaded && (
        <div className={`loading-bar-container ${isLoadingComplete ? 'fade-out' : ''}`}>
          <div className="loading-bar-wrapper">
            <div className="loading-bar-label">
              {loadingProgress === 100 ? '✓ Ready!' : ''}
            </div>
            <div className="loading-bar-track">
              <div 
                className={`loading-bar-fill ${loadingProgress === 100 ? 'completed' : ''}`}
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="loading-bar-percentage">{Math.round(loadingProgress)}%</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App 