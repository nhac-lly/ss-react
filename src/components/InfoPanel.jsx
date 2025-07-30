import React from 'react'
import './InfoPanel.css'

const InfoPanel = ({ onClose }) => {
  return (
    <div className="info-panel-overlay">
      <div className="info-panel">
        <div className="info-panel-header">
          <h2>🏢 Arobid Virtual Tour</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        
        <div className="info-panel-content">
          <div className="info-section">
            <h3>Welcome to the Experience</h3>
            <p>
              Explore this interactive 3D walkthrough of Arobid's space. 
              Use your mouse or touch to navigate through the environment.
            </p>
          </div>

          <div className="info-section">
            <h3>🎮 Controls</h3>
            <div className="controls-grid">
              <div className="control-item">
                <strong>Mouse:</strong> Click and drag to look around
              </div>
              <div className="control-item">
                <strong>Scroll:</strong> Move forward/backward
              </div>
              <div className="control-item">
                <strong>Click:</strong> Walk to clicked location
              </div>
              <div className="control-item">
                <strong>Touch:</strong> Tap and drag on mobile
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>✨ Features</h3>
            <ul>
              <li>High-quality 3D visualization</li>
              <li>Realistic lighting and materials</li>
              <li>Interactive navigation</li>
              <li>Mobile-friendly experience</li>
              <li>VR support (if available)</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>📱 Best Experience</h3>
            <p>
              For the best experience, use a modern browser with WebGL support.
              The tour works great on both desktop and mobile devices.
            </p>
          </div>
        </div>

        <div className="info-panel-footer">
          <button onClick={onClose} className="primary-button">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  )
}

export default InfoPanel 