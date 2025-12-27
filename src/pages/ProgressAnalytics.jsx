import { useApp } from '../context/AppContext'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { TrendingUp, Award, Target, Flame } from 'lucide-react'
import './ProgressAnalytics.css'

const ProgressAnalytics = () => {
  const { userProgress, skillMastery } = useApp()

  const trackData = [
    { name: 'Python', completed: userProgress.python.completed.length, total: 30 },
    { name: 'JavaScript', completed: userProgress.javascript.completed.length, total: 30 },
    { name: 'React', completed: userProgress.react.completed.length, total: 30 }
  ]

  const skillData = [
    { subject: 'Fundamentals', python: skillMastery.python.fundamentals, javascript: skillMastery.javascript.fundamentals, react: skillMastery.react.fundamentals },
    { subject: 'Core', python: skillMastery.python.core, javascript: skillMastery.javascript.core, react: skillMastery.react.core },
    { subject: 'Advanced', python: skillMastery.python.advanced, javascript: skillMastery.javascript.advanced, react: skillMastery.react.advanced },
    { subject: 'Production', python: skillMastery.python.production, javascript: skillMastery.javascript.production, react: skillMastery.react.production }
  ]

  const stats = [
    { icon: TrendingUp, label: 'Total Lessons', value: userProgress.python.completed.length + userProgress.javascript.completed.length + userProgress.react.completed.length, color: 'var(--info)' },
    { icon: Award, label: 'Projects Completed', value: userProgress.projects.length, color: 'var(--success)' },
    { icon: Target, label: 'Errors Solved', value: userProgress.errors.length, color: 'var(--warning)' },
    { icon: Flame, label: 'Current Streak', value: `${userProgress.streak} days`, color: 'var(--error)' }
  ]

  return (
    <div className="progress-analytics">
      <header className="analytics-header">
        <h1>Progress & Analytics</h1>
        <p>Track your learning journey and skill development</p>
      </header>

      <div className="stats-grid">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="stat-box" style={{ borderColor: stat.color }}>
              <Icon size={32} style={{ color: stat.color }} />
              <div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Track Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trackData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
              <XAxis dataKey="name" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip 
                contentStyle={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)', borderRadius: '8px' }}
                labelStyle={{ color: 'var(--text-primary)' }}
              />
              <Legend />
              <Bar dataKey="completed" fill="var(--info)" name="Completed" />
              <Bar dataKey="total" fill="var(--bg-tertiary)" name="Total" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Skill Mastery</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillData}>
              <PolarGrid stroke="var(--border-primary)" />
              <PolarAngleAxis dataKey="subject" stroke="var(--text-secondary)" />
              <PolarRadiusAxis stroke="var(--text-secondary)" />
              <Radar name="Python" dataKey="python" stroke="var(--accent-python)" fill="var(--accent-python)" fillOpacity={0.3} />
              <Radar name="JavaScript" dataKey="javascript" stroke="var(--accent-javascript)" fill="var(--accent-javascript)" fillOpacity={0.3} />
              <Radar name="React" dataKey="react" stroke="var(--accent-react)" fill="var(--accent-react)" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="recommendations">
        <h3>📈 Recommendations</h3>
        <div className="recommendations-grid">
          <div className="recommendation-card">
            <h4>Focus Area</h4>
            <p>Continue with JavaScript track - you're making great progress!</p>
          </div>
          <div className="recommendation-card">
            <h4>Next Challenge</h4>
            <p>Try building a full-stack project to combine your skills</p>
          </div>
          <div className="recommendation-card">
            <h4>Weak Spot</h4>
            <p>Review async/await concepts in JavaScript for better mastery</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressAnalytics
