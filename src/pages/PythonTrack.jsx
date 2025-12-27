import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { pythonLessons } from '../data/pythonLessons'
import { CheckCircle, Circle, Clock, TrendingUp } from 'lucide-react'
import './Track.css'

const PythonTrack = () => {
  const { userProgress } = useApp()

  const categories = [
    { name: 'Fundamentals', key: 'fundamentals', description: 'Days 1-7: Python basics and syntax' },
    { name: 'Core Concepts', key: 'core', description: 'Days 8-14: OOP, modules, and advanced features' },
    { name: 'Advanced', key: 'advanced', description: 'Days 15-21: Decorators, async, and complex patterns' },
    { name: 'Production', key: 'production', description: 'Days 22-30: Testing, APIs, and deployment' }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'var(--success)'
      case 'Intermediate': return 'var(--warning)'
      case 'Advanced': return 'var(--error)'
      default: return 'var(--text-secondary)'
    }
  }

  const isCompleted = (day) => userProgress.python.completed.includes(day)

  return (
    <div className="track-page">
      <header className="track-header">
        <div className="track-title">
          <h1>🐍 Python Track</h1>
          <p>Master Python from absolute beginner to production-ready developer in 30 days</p>
        </div>
        <div className="track-stats">
          <div className="stat">
            <TrendingUp size={20} />
            <span>{userProgress.python.completed.length} / 30 completed</span>
          </div>
          <div className="stat">
            <Clock size={20} />
            <span>~30 hours total</span>
          </div>
        </div>
      </header>

      {categories.map((category) => {
        const lessons = pythonLessons.filter(l => l.category === category.key)
        const completedCount = lessons.filter(l => isCompleted(l.day)).length

        return (
          <section key={category.key} className="category-section">
            <div className="category-header">
              <div>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
              <div className="category-progress">
                {completedCount} / {lessons.length} complete
              </div>
            </div>

            <div className="lessons-grid">
              {lessons.map((lesson) => {
                const completed = isCompleted(lesson.day)
                const isLocked = lesson.day > 1 && !isCompleted(lesson.day - 1)

                return (
                  <Link
                    key={lesson.day}
                    to={isLocked ? '#' : `/python/lesson/${lesson.day}`}
                    className={`lesson-card ${completed ? 'completed' : ''} ${isLocked ? 'locked' : ''}`}
                    style={{ pointerEvents: isLocked ? 'none' : 'auto' }}
                  >
                    <div className="lesson-status">
                      {completed ? (
                        <CheckCircle size={20} color="var(--success)" />
                      ) : (
                        <Circle size={20} color="var(--text-muted)" />
                      )}
                      <span className="lesson-day">Day {lesson.day}</span>
                    </div>

                    <h3 className="lesson-title">{lesson.title}</h3>

                    <div className="lesson-meta">
                      <span className="difficulty" style={{ color: getDifficultyColor(lesson.difficulty) }}>
                        {lesson.difficulty}
                      </span>
                      <span className="duration">{lesson.duration}</span>
                    </div>

                    <div className="lesson-topics">
                      {lesson.topics.slice(0, 3).map((topic, idx) => (
                        <span key={idx} className="topic-tag">{topic}</span>
                      ))}
                      {lesson.topics.length > 3 && (
                        <span className="topic-tag">+{lesson.topics.length - 3} more</span>
                      )}
                    </div>

                    {isLocked && <div className="locked-overlay">🔒</div>}
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default PythonTrack
