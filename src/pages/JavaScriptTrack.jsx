import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { javascriptLessons } from '../data/javascriptLessons'
import { CheckCircle, Circle, Clock, TrendingUp } from 'lucide-react'
import './Track.css'

const JavaScriptTrack = () => {
  const { userProgress } = useApp()

  const categories = [
    { name: 'Fundamentals', key: 'fundamentals', description: 'Days 1-7: JavaScript basics and ES6+' },
    { name: 'Core Concepts', key: 'core', description: 'Days 8-14: DOM, async, and modern features' },
    { name: 'Advanced', key: 'advanced', description: 'Days 15-21: Closures, patterns, and optimization' },
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

  const isCompleted = (day) => userProgress.javascript.completed.includes(day)

  return (
    <div className="track-page">
      <header className="track-header">
        <div className="track-title">
          <h1>⚡ JavaScript Track</h1>
          <p>Build modern web applications with JavaScript from fundamentals to production patterns</p>
        </div>
        <div className="track-stats">
          <div className="stat">
            <TrendingUp size={20} />
            <span>{userProgress.javascript.completed.length} / 30 completed</span>
          </div>
          <div className="stat">
            <Clock size={20} />
            <span>~32 hours total</span>
          </div>
        </div>
      </header>

      {categories.map((category) => {
        const lessons = javascriptLessons.filter(l => l.category === category.key)
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
                    to={isLocked ? '#' : `/javascript/lesson/${lesson.day}`}
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

export default JavaScriptTrack
