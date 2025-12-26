import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useApp } from '../context/AppContext';
import { Moon, Sun, Trash2, Download, Bell, Bookmark } from 'lucide-react';
import './Settings.css';

function Settings() {
  const { theme, toggleTheme, progress, bookmarks, quizScores } = useApp();
  const [notifications, setNotifications] = useState({
    daily: true,
    quizzes: true,
    achievements: true
  });

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all your progress? This cannot be undone.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const exportData = () => {
    const data = {
      progress,
      quizScores,
      bookmarks,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `learning-data-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const totalLessons = Object.values(progress).reduce((total, tech) => {
    return total + Object.keys(tech).length;
  }, 0);

  const completedLessons = Object.values(progress).reduce((total, tech) => {
    return total + Object.values(tech).filter(l => l.status === 'completed').length;
  }, 0);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="settings-main">
        <div className="settings-container">
          <header className="settings-header">
            <h1>⚙️ Settings</h1>
            <p className="settings-subtitle">Customize your learning experience</p>
          </header>

          <div className="settings-sections">
            {/* Appearance Section */}
            <section className="settings-section">
              <h2>🎨 Appearance</h2>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Theme</h3>
                  <p>Choose your preferred color scheme</p>
                </div>
                <button 
                  className="theme-toggle-btn"
                  onClick={toggleTheme}
                >
                  {theme === 'light' ? (
                    <>
                      <Moon size={20} />
                      <span>Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Sun size={20} />
                      <span>Light Mode</span>
                    </>
                  )}
                </button>
              </div>
            </section>

            {/* Notifications Section */}
            <section className="settings-section">
              <h2>🔔 Notifications</h2>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Daily Reminders</h3>
                  <p>Get reminded to complete your daily lessons</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox"
                    checked={notifications.daily}
                    onChange={() => setNotifications({...notifications, daily: !notifications.daily})}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h3>Quiz Notifications</h3>
                  <p>Get notified about new quizzes and results</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox"
                    checked={notifications.quizzes}
                    onChange={() => setNotifications({...notifications, quizzes: !notifications.quizzes})}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h3>Achievement Notifications</h3>
                  <p>Celebrate your milestones and achievements</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox"
                    checked={notifications.achievements}
                    onChange={() => setNotifications({...notifications, achievements: !notifications.achievements})}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </section>

            {/* Progress Section */}
            <section className="settings-section">
              <h2>📊 Your Progress</h2>
              
              <div className="progress-stats">
                <div className="progress-stat">
                  <div className="progress-stat-icon">📚</div>
                  <div className="progress-stat-info">
                    <h4>Lessons Started</h4>
                    <p className="progress-stat-value">{totalLessons}</p>
                  </div>
                </div>

                <div className="progress-stat">
                  <div className="progress-stat-icon">✅</div>
                  <div className="progress-stat-info">
                    <h4>Lessons Completed</h4>
                    <p className="progress-stat-value">{completedLessons}</p>
                  </div>
                </div>

                <div className="progress-stat">
                  <div className="progress-stat-icon">🔖</div>
                  <div className="progress-stat-info">
                    <h4>Bookmarks</h4>
                    <p className="progress-stat-value">{bookmarks.length}</p>
                  </div>
                </div>

                <div className="progress-stat">
                  <div className="progress-stat-icon">📝</div>
                  <div className="progress-stat-info">
                    <h4>Quizzes Taken</h4>
                    <p className="progress-stat-value">
                      {Object.values(quizScores).reduce((sum, scores) => sum + scores.length, 0)}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Management Section */}
            <section className="settings-section">
              <h2>💾 Data Management</h2>
              
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Export Data</h3>
                  <p>Download your progress and learning data as JSON</p>
                </div>
                <button className="action-btn export" onClick={exportData}>
                  <Download size={20} />
                  <span>Export</span>
                </button>
              </div>

              <div className="setting-item danger">
                <div className="setting-info">
                  <h3>Clear All Data</h3>
                  <p>Reset your progress and start fresh (cannot be undone)</p>
                </div>
                <button className="action-btn danger" onClick={clearAllData}>
                  <Trash2 size={20} />
                  <span>Clear Data</span>
                </button>
              </div>
            </section>

            {/* About Section */}
            <section className="settings-section">
              <h2>ℹ️ About</h2>
              
              <div className="about-info">
                <p><strong>Version:</strong> 1.0.0</p>
                <p><strong>Technologies:</strong> React, Vite, CodeMirror, Recharts</p>
                <p><strong>Purpose:</strong> A comprehensive 30-day learning platform for Python, React, and JavaScript</p>
                <p className="about-credits">
                  Built with ❤️ for developers who want to level up their skills
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
