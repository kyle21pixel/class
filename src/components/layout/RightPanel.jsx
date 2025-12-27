import { useApp } from '../../context/AppContext'
import { Target, Flame, TrendingUp, Award, ChevronRight, ChevronLeft } from 'lucide-react'
import './RightPanel.css'

const RightPanel = ({ collapsed, onToggle }) => {
  const { userProgress, skillMastery } = useApp()

  const calculateOverallProgress = () => {
    const tracks = ['python', 'javascript', 'react']
    const totalCompleted = tracks.reduce((sum, track) => sum + userProgress[track].completed.length, 0)
    const totalLessons = tracks.reduce((sum, track) => sum + userProgress[track].totalLessons, 0)
    return Math.round((totalCompleted / totalLessons) * 100)
  }

  const todayGoals = [
    { id: 1, text: 'Complete Python Day 5', completed: false },
    { id: 2, text: 'Solve 2 error challenges', completed: false },
    { id: 3, text: 'Finish React component quiz', completed: false }
  ]

  const recentAchievements = [
    { icon: '🎯', text: 'First 10 lessons completed', color: 'var(--success)' },
    { icon: '🔥', text: '7-day learning streak', color: 'var(--warning)' },
    { icon: '⚡', text: 'Fast learner badge', color: 'var(--info)' }
  ]

  const overallProgress = calculateOverallProgress()

  return (
    <aside className={`right-panel ${collapsed ? 'collapsed' : ''}`}>
      <button className="collapse-btn" onClick={onToggle}>
        {collapsed ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      {!collapsed && (
        <div className="right-panel-content">
          {/* Daily Goals */}
          <section className="panel-section">
            <div className="section-header">
              <Target size={18} />
              <h3>Today's Goals</h3>
            </div>
            <div className="goals-list">
              {todayGoals.map(goal => (
                <div key={goal.id} className={`goal-item ${goal.completed ? 'completed' : ''}`}>
                  <input type="checkbox" checked={goal.completed} readOnly />
                  <span>{goal.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Learning Streak */}
          <section className="panel-section">
            <div className="section-header">
              <Flame size={18} />
              <h3>Learning Streak</h3>
            </div>
            <div className="streak-display">
              <div className="streak-number">7</div>
              <div className="streak-label">Days in a row</div>
              <div className="streak-bar">
                <div className="streak-progress" style={{ width: '70%' }}></div>
              </div>
              <div className="streak-message">Keep it up! 3 more days for new record</div>
            </div>
          </section>

          {/* Overall Progress */}
          <section className="panel-section">
            <div className="section-header">
              <TrendingUp size={18} />
              <h3>Overall Progress</h3>
            </div>
            <div className="progress-ring-container">
              <svg className="progress-ring" width="120" height="120">
                <circle
                  className="progress-ring-circle-bg"
                  cx="60"
                  cy="60"
                  r="52"
                />
                <circle
                  className="progress-ring-circle"
                  cx="60"
                  cy="60"
                  r="52"
                  style={{
                    strokeDasharray: `${overallProgress * 3.27} 327`,
                  }}
                />
              </svg>
              <div className="progress-ring-text">
                <div className="progress-percentage">{overallProgress}%</div>
                <div className="progress-label">Complete</div>
              </div>
            </div>
            <div className="track-progress-list">
              <div className="track-item">
                <span className="track-name">Python</span>
                <span className="track-progress">{userProgress.python.completed.length}/30</span>
              </div>
              <div className="track-item">
                <span className="track-name">JavaScript</span>
                <span className="track-progress">{userProgress.javascript.completed.length}/30</span>
              </div>
              <div className="track-item">
                <span className="track-name">React</span>
                <span className="track-progress">{userProgress.react.completed.length}/30</span>
              </div>
            </div>
          </section>

          {/* Recent Achievements */}
          <section className="panel-section">
            <div className="section-header">
              <Award size={18} />
              <h3>Recent Achievements</h3>
            </div>
            <div className="achievements-list">
              {recentAchievements.map((achievement, idx) => (
                <div key={idx} className="achievement-item" style={{ borderLeftColor: achievement.color }}>
                  <span className="achievement-icon">{achievement.icon}</span>
                  <span className="achievement-text">{achievement.text}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </aside>
  )
}

export default RightPanel
