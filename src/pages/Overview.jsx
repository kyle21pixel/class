import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { Code2, Braces, Blocks, TrendingUp, Target, Flame } from 'lucide-react'
import './Overview.css'

const Overview = () => {
  const { userProgress } = useApp()

  const tracks = [
    {
      name: 'Python',
      icon: Code2,
      color: 'var(--accent-python)',
      path: '/python',
      completed: userProgress.python.completed.length,
      total: userProgress.python.totalLessons,
      description: 'Master Python from basics to production-ready APIs and automation'
    },
    {
      name: 'JavaScript',
      icon: Braces,
      color: 'var(--accent-javascript)',
      path: '/javascript',
      completed: userProgress.javascript.completed.length,
      total: userProgress.javascript.totalLessons,
      description: 'Build modern web applications with JavaScript fundamentals and async patterns'
    },
    {
      name: 'React',
      icon: Blocks,
      color: 'var(--accent-react)',
      path: '/react',
      completed: userProgress.react.completed.length,
      total: userProgress.react.totalLessons,
      description: 'Create production-grade React applications with hooks, state management, and performance'
    }
  ]

  const quickStats = [
    { label: 'Total Lessons Completed', value: userProgress.python.completed.length + userProgress.javascript.completed.length + userProgress.react.completed.length },
    { label: 'Projects Built', value: userProgress.projects.length },
    { label: 'Errors Solved', value: userProgress.errors.length },
    { label: 'Current Streak', value: `${userProgress.streak} days` }
  ]

  return (
    <div className="overview-page">
      <header className="page-header">
        <h1>Welcome to DevMaster Academy</h1>
        <p>Your journey from beginner to production-ready developer starts here</p>
      </header>

      <section className="quick-stats">
        {quickStats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="tracks-section">
        <h2>Learning Tracks</h2>
        <div className="tracks-grid">
          {tracks.map((track) => {
            const progress = (track.completed / track.total) * 100
            const Icon = track.icon
            
            return (
              <Link key={track.name} to={track.path} className="track-card">
                <div className="track-header">
                  <Icon size={32} style={{ color: track.color }} />
                  <h3>{track.name}</h3>
                </div>
                <p className="track-description">{track.description}</p>
                <div className="track-progress">
                  <div className="progress-info">
                    <span>{track.completed}/{track.total} lessons</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${progress}%`, background: track.color }}
                    />
                  </div>
                </div>
                <button className="track-button" style={{ borderColor: track.color, color: track.color }}>
                  {track.completed > 0 ? 'Continue Learning' : 'Start Track'}
                </button>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/projects" className="action-card">
            <Target size={24} />
            <h3>Projects Lab</h3>
            <p>Build real-world projects with guided challenges</p>
          </Link>
          <Link to="/errors" className="action-card">
            <Flame size={24} />
            <h3>Error Simulator</h3>
            <p>Practice debugging common developer mistakes</p>
          </Link>
          <Link to="/quizzes" className="action-card">
            <TrendingUp size={24} />
            <h3>Test Your Skills</h3>
            <p>Take quizzes and validate your knowledge</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Overview
