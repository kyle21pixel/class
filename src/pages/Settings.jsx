import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Moon, Sun, Trash2, Download, Save } from 'lucide-react'
import './Settings.css'

const Settings = () => {
  const { theme, toggleTheme, userProgress } = useApp()
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const handleResetProgress = () => {
    if (showResetConfirm) {
      localStorage.clear()
      window.location.reload()
    } else {
      setShowResetConfirm(true)
      setTimeout(() => setShowResetConfirm(false), 5000)
    }
  }

  const handleExportData = () => {
    const data = {
      userProgress,
      exportDate: new Date().toISOString()
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `devmaster-progress-${new Date().toISOString().split('T')[0]}.json`
    a.click()
  }

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1>Settings</h1>
        <p>Customize your learning experience</p>
      </header>

      <div className="settings-content">
        <section className="settings-section">
          <h2>Appearance</h2>
          <div className="setting-item">
            <div className="setting-info">
              <h3>Theme</h3>
              <p>Switch between light and dark mode</p>
            </div>
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={20} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={20} />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </section>

        <section className="settings-section">
          <h2>Data Management</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Export Progress</h3>
              <p>Download your learning data as JSON</p>
            </div>
            <button className="action-btn export" onClick={handleExportData}>
              <Download size={18} />
              Export Data
            </button>
          </div>

          <div className="setting-item danger-zone">
            <div className="setting-info">
              <h3>Reset Progress</h3>
              <p>Clear all progress and start fresh</p>
            </div>
            <button 
              className={`action-btn danger ${showResetConfirm ? 'confirm' : ''}`}
              onClick={handleResetProgress}
            >
              <Trash2 size={18} />
              {showResetConfirm ? 'Click Again to Confirm' : 'Reset All Data'}
            </button>
          </div>
        </section>

        <section className="settings-section">
          <h2>Statistics</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-label">Python Lessons</div>
              <div className="stat-value">{userProgress.python.completed.length} / 30</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">JavaScript Lessons</div>
              <div className="stat-value">{userProgress.javascript.completed.length} / 30</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">React Lessons</div>
              <div className="stat-value">{userProgress.react.completed.length} / 30</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Projects Completed</div>
              <div className="stat-value">{userProgress.projects.length}</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Errors Solved</div>
              <div className="stat-value">{userProgress.errors.length}</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Current Streak</div>
              <div className="stat-value">{userProgress.streak} days</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Settings
