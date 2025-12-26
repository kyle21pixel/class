import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { BookOpen, Award, TrendingUp, Code } from 'lucide-react';
import './Home.css';

function Home() {
  const { progress, getStreak } = useApp();

  const calculateProgress = (tech) => {
    const completed = Object.values(progress[tech]).filter(
      lesson => lesson.status === 'completed'
    ).length;
    return Math.round((completed / 10) * 100);
  };

  const streak = getStreak();

  return (
    <div className="home-container fade-in">
      <header className="home-header">
        <h1 className="main-title">
          <Code size={48} />
          30-Day Learning Challenge
        </h1>
        <p className="subtitle">
          Transform from beginner to professional in Python, React & JavaScript
        </p>
      </header>

      <section className="quick-stats">
        <div className="stat-card">
          <div className="stat-icon python-color">
            <BookOpen size={32} />
          </div>
          <div className="stat-info">
            <h3>Lessons</h3>
            <p className="stat-value">30 Days</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon react-color">
            <Award size={32} />
          </div>
          <div className="stat-info">
            <h3>Streak</h3>
            <p className="stat-value">{streak} Days</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon javascript-color">
            <TrendingUp size={32} />
          </div>
          <div className="stat-info">
            <h3>Progress</h3>
            <p className="stat-value">
              {Math.round((calculateProgress('python') + calculateProgress('react') + calculateProgress('javascript')) / 3)}%
            </p>
          </div>
        </div>
      </section>

      <section className="tech-cards">
        <Link to="/dashboard?tech=python" className="tech-card python-card">
          <div className="tech-card-header">
            <h2>🐍 Python</h2>
            <div className="progress-circle">
              <span>{calculateProgress('python')}%</span>
            </div>
          </div>
          <p className="tech-description">
            Master Python from basics to advanced OOP, file handling, and more
          </p>
          <div className="progress-bar">
            <div 
              className="progress-fill python-fill" 
              style={{ width: `${calculateProgress('python')}%` }}
            ></div>
          </div>
          <button className="start-btn python-btn">Start Learning Python</button>
        </Link>

        <Link to="/dashboard?tech=react" className="tech-card react-card">
          <div className="tech-card-header">
            <h2>⚛️ React</h2>
            <div className="progress-circle">
              <span>{calculateProgress('react')}%</span>
            </div>
          </div>
          <p className="tech-description">
            Build modern UIs with React, hooks, components, and state management
          </p>
          <div className="progress-bar">
            <div 
              className="progress-fill react-fill" 
              style={{ width: `${calculateProgress('react')}%` }}
            ></div>
          </div>
          <button className="start-btn react-btn">Start Learning React</button>
        </Link>

        <Link to="/dashboard?tech=javascript" className="tech-card javascript-card">
          <div className="tech-card-header">
            <h2>📜 JavaScript</h2>
            <div className="progress-circle">
              <span>{calculateProgress('javascript')}%</span>
            </div>
          </div>
          <p className="tech-description">
            Learn JavaScript fundamentals, async programming, and ES6+ features
          </p>
          <div className="progress-bar">
            <div 
              className="progress-fill javascript-fill" 
              style={{ width: `${calculateProgress('javascript')}%` }}
            ></div>
          </div>
          <button className="start-btn javascript-btn">Start Learning JavaScript</button>
        </Link>
      </section>

      <section className="features-section">
        <h2>What You'll Get</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">💻</div>
            <h3>Interactive Coding</h3>
            <p>Practice with live code editors and instant feedback</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📝</div>
            <h3>Quizzes & Tests</h3>
            <p>Validate your knowledge with auto-graded assessments</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🚀</div>
            <h3>Real Projects</h3>
            <p>Build portfolio-worthy projects every week</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>Track Progress</h3>
            <p>Monitor your learning journey with detailed analytics</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of learners becoming professional developers</p>
        <Link to="/dashboard" className="cta-button">
          Go to Dashboard
        </Link>
      </section>
    </div>
  );
}

export default Home;
