import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import lessonsData from '../data/lessonsData';
import Sidebar from '../components/Sidebar';
import CodeEditor from '../components/CodeEditor';
import { CheckCircle, ExternalLink, Bookmark, BookmarkCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import './LessonDetail.css';

function LessonDetail() {
  const { technology, day } = useParams();
  const { markLessonComplete, markLessonInProgress, bookmarks, toggleBookmark, progress } = useApp();
  const [showSolution, setShowSolution] = useState(false);
  
  const lesson = lessonsData[technology]?.find(l => l.day === parseInt(day));
  const allLessons = lessonsData[technology] || [];
  const currentIndex = allLessons.findIndex(l => l.day === parseInt(day));
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const lessonId = `${technology}-${day}`;
  const isBookmarked = bookmarks.includes(lessonId);
  const lessonProgress = progress[technology]?.[day];

  useEffect(() => {
    if (!lessonProgress) {
      markLessonInProgress(technology, parseInt(day));
    }
  }, [technology, day]);

  if (!lesson) {
    return (
      <div className="dashboard-layout">
        <Sidebar />
        <main className="lesson-main">
          <h1>Lesson not found</h1>
          <Link to="/dashboard">Back to Dashboard</Link>
        </main>
      </div>
    );
  }

  const handleComplete = () => {
    markLessonComplete(technology, parseInt(day));
  };

  const formatContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h2 key={index}>{line.substring(2)}</h2>;
      } else if (line.startsWith('## ')) {
        return <h3 key={index}>{line.substring(3)}</h3>;
      } else if (line.startsWith('```')) {
        return null; // Code blocks handled separately
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index}>{line}</p>;
      }
    });
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="lesson-main">
        <div className="lesson-container">
          <header className="lesson-header">
            <div className="lesson-breadcrumb">
              <Link to="/dashboard">Dashboard</Link>
              <span>/</span>
              <span className={`tech-badge ${technology}`}>
                {technology === 'python' && '🐍'} 
                {technology === 'react' && '⚛️'} 
                {technology === 'javascript' && '📜'} 
                {technology.charAt(0).toUpperCase() + technology.slice(1)}
              </span>
              <span>/</span>
              <span>Day {day}</span>
            </div>

            <div className="lesson-actions">
              <button 
                className="bookmark-btn" 
                onClick={() => toggleBookmark(lessonId)}
                title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              >
                {isBookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
              </button>
              
              {lessonProgress?.status !== 'completed' && (
                <button className="complete-btn" onClick={handleComplete}>
                  <CheckCircle size={20} />
                  Mark as Complete
                </button>
              )}
              
              {lessonProgress?.status === 'completed' && (
                <span className="completed-badge">
                  <CheckCircle size={20} />
                  Completed
                </span>
              )}
            </div>
          </header>

          <div className="lesson-title-section">
            <h1 className="lesson-main-title">{lesson.title}</h1>
            <p className="lesson-description">{lesson.description}</p>
            <div className="lesson-meta">
              <span className="meta-item">📚 {lesson.topic}</span>
              <span className="meta-item">⏱️ {lesson.duration}</span>
              <span className="meta-item">Day {lesson.day}/10</span>
            </div>
          </div>

          <div className="lesson-content">
            <section className="content-section">
              <div className="content-text">
                {formatContent(lesson.content)}
              </div>
            </section>

            {lesson.exercises && lesson.exercises.length > 0 && (
              <section className="exercises-section">
                <h2>✏️ Practice Exercise</h2>
                {lesson.exercises.map((exercise, index) => (
                  <div key={index} className="exercise-card">
                    <h3>{exercise.question}</h3>
                    
                    <CodeEditor
                      language={technology === 'react' ? 'jsx' : technology}
                      initialCode={exercise.starterCode}
                      technology={technology}
                    />

                    <div className="exercise-actions">
                      <button 
                        className="show-solution-btn"
                        onClick={() => setShowSolution(!showSolution)}
                      >
                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                      </button>
                    </div>

                    {showSolution && (
                      <div className="solution-section fade-in">
                        <h4>💡 Solution:</h4>
                        <CodeEditor
                          language={technology === 'react' ? 'jsx' : technology}
                          initialCode={exercise.solution}
                          readOnly={true}
                          technology={technology}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </section>
            )}

            {lesson.resources && lesson.resources.length > 0 && (
              <section className="resources-section">
                <h2>📖 Additional Resources</h2>
                <div className="resources-grid">
                  {lesson.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-card"
                    >
                      <span>{resource.title}</span>
                      <ExternalLink size={18} />
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>

          <nav className="lesson-navigation">
            {prevLesson ? (
              <Link 
                to={`/lesson/${technology}/${prevLesson.day}`} 
                className="nav-button prev"
              >
                <ChevronLeft size={20} />
                <div>
                  <span className="nav-label">Previous</span>
                  <span className="nav-title">{prevLesson.title}</span>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextLesson ? (
              <Link 
                to={`/lesson/${technology}/${nextLesson.day}`} 
                className="nav-button next"
              >
                <div>
                  <span className="nav-label">Next</span>
                  <span className="nav-title">{nextLesson.title}</span>
                </div>
                <ChevronRight size={20} />
              </Link>
            ) : (
              <div></div>
            )}
          </nav>
        </div>
      </main>
    </div>
  );
}

export default LessonDetail;
