import Sidebar from '../components/Sidebar';
import { useApp } from '../context/AppContext';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, Clock, Flame } from 'lucide-react';
import './Analytics.css';

function Analytics() {
  const { progress, quizScores, timeSpent, getStreak } = useApp();

  const calculateCompletedLessons = (tech) => {
    return Object.values(progress[tech]).filter(l => l.status === 'completed').length;
  };

  const completionData = [
    { name: 'Python', value: calculateCompletedLessons('python'), color: '#3776ab' },
    { name: 'React', value: calculateCompletedLessons('react'), color: '#61dafb' },
    { name: 'JavaScript', value: calculateCompletedLessons('javascript'), color: '#f7df1e' }
  ];

  const quizPerformanceData = [
    {
      name: 'Python',
      avgScore: quizScores.python.length > 0 
        ? Math.round(quizScores.python.reduce((sum, q) => sum + q.score, 0) / quizScores.python.length)
        : 0
    },
    {
      name: 'React',
      avgScore: quizScores.react.length > 0 
        ? Math.round(quizScores.react.reduce((sum, q) => sum + q.score, 0) / quizScores.react.length)
        : 0
    },
    {
      name: 'JavaScript',
      avgScore: quizScores.javascript.length > 0 
        ? Math.round(quizScores.javascript.reduce((sum, q) => sum + q.score, 0) / quizScores.javascript.length)
        : 0
    }
  ];

  const timeSpentData = [
    { name: 'Python', hours: Math.round(timeSpent.python / 60 * 10) / 10 },
    { name: 'React', hours: Math.round(timeSpent.react / 60 * 10) / 10 },
    { name: 'JavaScript', hours: Math.round(timeSpent.javascript / 60 * 10) / 10 }
  ];

  const totalCompleted = completionData.reduce((sum, tech) => sum + tech.value, 0);
  const totalPossible = 30;
  const overallProgress = Math.round((totalCompleted / totalPossible) * 100);
  const streak = getStreak();

  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="analytics-main">
        <div className="analytics-container">
          <header className="analytics-header">
            <h1>📊 Learning Analytics</h1>
            <p className="analytics-subtitle">Track your progress and performance across all technologies</p>
          </header>

          <div className="stats-overview">
            <div className="stat-card-large python-gradient">
              <div className="stat-icon-large">
                <TrendingUp size={40} />
              </div>
              <div className="stat-content">
                <h3>Overall Progress</h3>
                <p className="stat-number">{overallProgress}%</p>
                <p className="stat-detail">{totalCompleted} of {totalPossible} lessons completed</p>
              </div>
            </div>

            <div className="stat-card-large react-gradient">
              <div className="stat-icon-large">
                <Flame size={40} />
              </div>
              <div className="stat-content">
                <h3>Current Streak</h3>
                <p className="stat-number">{streak} Days</p>
                <p className="stat-detail">{streak > 0 ? 'Keep it up!' : 'Start learning today!'}</p>
              </div>
            </div>

            <div className="stat-card-large javascript-gradient">
              <div className="stat-icon-large">
                <Clock size={40} />
              </div>
              <div className="stat-content">
                <h3>Total Time</h3>
                <p className="stat-number">
                  {Math.round((timeSpent.python + timeSpent.react + timeSpent.javascript) / 60)} hrs
                </p>
                <p className="stat-detail">Time invested in learning</p>
              </div>
            </div>

            <div className="stat-card-large gradient-all">
              <div className="stat-icon-large">
                <Award size={40} />
              </div>
              <div className="stat-content">
                <h3>Quizzes Taken</h3>
                <p className="stat-number">
                  {quizScores.python.length + quizScores.react.length + quizScores.javascript.length}
                </p>
                <p className="stat-detail">Assessments completed</p>
              </div>
            </div>
          </div>

          <div className="charts-grid">
            <div className="chart-card">
              <h3>📚 Lessons Completed by Technology</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={completionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {completionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>🎯 Quiz Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={quizPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#dee2e6" />
                  <XAxis dataKey="name" stroke="var(--text-secondary)" />
                  <YAxis stroke="var(--text-secondary)" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'var(--bg-secondary)', 
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="avgScore" fill="#3776ab" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card full-width">
              <h3>⏱️ Time Spent Learning</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={timeSpentData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#dee2e6" />
                  <XAxis dataKey="name" stroke="var(--text-secondary)" />
                  <YAxis stroke="var(--text-secondary)" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'var(--bg-secondary)', 
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="hours" fill="#61dafb" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="achievements-section">
            <h3>🏆 Achievements</h3>
            <div className="achievements-grid">
              <div className={`achievement-card ${totalCompleted >= 5 ? 'unlocked' : 'locked'}`}>
                <div className="achievement-icon">🌟</div>
                <h4>First Steps</h4>
                <p>Complete 5 lessons</p>
              </div>
              
              <div className={`achievement-card ${totalCompleted >= 15 ? 'unlocked' : 'locked'}`}>
                <div className="achievement-icon">🔥</div>
                <h4>On Fire</h4>
                <p>Complete 15 lessons</p>
              </div>
              
              <div className={`achievement-card ${totalCompleted >= 30 ? 'unlocked' : 'locked'}`}>
                <div className="achievement-icon">🎓</div>
                <h4>Graduate</h4>
                <p>Complete all 30 lessons</p>
              </div>
              
              <div className={`achievement-card ${streak >= 7 ? 'unlocked' : 'locked'}`}>
                <div className="achievement-icon">⚡</div>
                <h4>Week Warrior</h4>
                <p>7-day learning streak</p>
              </div>
              
              <div className={`achievement-card ${
                (quizScores.python.length + quizScores.react.length + quizScores.javascript.length) >= 3 ? 'unlocked' : 'locked'
              }`}>
                <div className="achievement-icon">✅</div>
                <h4>Quiz Master</h4>
                <p>Complete 3 quizzes</p>
              </div>
              
              <div className={`achievement-card ${
                quizPerformanceData.some(q => q.avgScore >= 90) ? 'unlocked' : 'locked'
              }`}>
                <div className="achievement-icon">💯</div>
                <h4>Perfect Score</h4>
                <p>Score 90%+ on a quiz</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Analytics;
