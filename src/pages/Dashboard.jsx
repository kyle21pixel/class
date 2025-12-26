import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import lessonsData from '../data/lessonsData';
import Sidebar from '../components/Sidebar';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  const [searchParams] = useSearchParams();
  const initialTech = searchParams.get('tech') || 'python';
  const [selectedTech, setSelectedTech] = useState(initialTech);
  const { progress } = useApp();

  const lessons = lessonsData[selectedTech] || [];

  const getStatusIcon = (day) => {
    const lessonProgress = progress[selectedTech]?.[day];
    if (lessonProgress?.status === 'completed') {
      return <CheckCircle className="status-icon completed" />;
    } else if (lessonProgress?.status === 'in-progress') {
      return <Clock className="status-icon in-progress" />;
    }
    return <Circle className="status-icon not-started" />;
  };

  const getStatusClass = (day) => {
    const lessonProgress = progress[selectedTech]?.[day];
    return lessonProgress?.status || 'not-started';
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Learning Dashboard</h1>
          <div className="tech-selector">
            <button
              className={`tech-btn ${selectedTech === 'python' ? 'active python-active' : ''}`}
              onClick={() => setSelectedTech('python')}
            >
              🐍 Python
            </button>
            <button
              className={`tech-btn ${selectedTech === 'react' ? 'active react-active' : ''}`}
              onClick={() => setSelectedTech('react')}
            >
              ⚛️ React
            </button>
            <button
              className={`tech-btn ${selectedTech === 'javascript' ? 'active javascript-active' : ''}`}
              onClick={() => setSelectedTech('javascript')}
            >
              📜 JavaScript
            </button>
          </div>
        </header>

        <section className="lessons-section">
          <h2>30-Day Curriculum</h2>
          <div className="lessons-grid">
            {lessons.map((lesson) => (
              <Link
                key={lesson.day}
                to={`/lesson/${selectedTech}/${lesson.day}`}
                className={`lesson-card ${getStatusClass(lesson.day)} ${selectedTech}-theme`}
              >
                <div className="lesson-card-header">
                  <div className="lesson-day">Day {lesson.day}</div>
                  {getStatusIcon(lesson.day)}
                </div>
                
                <h3 className="lesson-title">{lesson.title}</h3>
                <p className="lesson-topic">{lesson.topic}</p>
                
                <div className="lesson-footer">
                  <span className="lesson-duration">
                    <Clock size={16} />
                    {lesson.duration}
                  </span>
                  <span className={`lesson-status ${getStatusClass(lesson.day)}`}>
                    {getStatusClass(lesson.day) === 'completed' ? 'Completed' :
                     getStatusClass(lesson.day) === 'in-progress' ? 'In Progress' :
                     'Not Started'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
