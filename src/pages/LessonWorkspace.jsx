import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { getPythonLessonByDay } from '../data/pythonLessons'
import { getJavaScriptLessonByDay } from '../data/javascriptLessons'
import { getReactLessonByDay } from '../data/reactLessons'
import CodeEditor from '../components/CodeEditor'
import { CheckCircle, ChevronLeft, ChevronRight, AlertTriangle, Lightbulb, Bug } from 'lucide-react'
import './LessonWorkspace.css'

const LessonWorkspace = ({ track }) => {
  const { day } = useParams()
  const navigate = useNavigate()
  const { completeLesson } = useApp()
  
  const [lesson, setLesson] = useState(null)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('learn') // 'learn', 'practice', 'break'
  const [showHints, setShowHints] = useState(false)

  useEffect(() => {
    let lessonData
    switch (track) {
      case 'python':
        lessonData = getPythonLessonByDay(day)
        break
      case 'javascript':
        lessonData = getJavaScriptLessonByDay(day)
        break
      case 'react':
        lessonData = getReactLessonByDay(day)
        break
      default:
        lessonData = null
    }
    
    if (lessonData) {
      setLesson(lessonData)
      setCode(lessonData.starterCode || '')
    }
  }, [track, day])

  const handleRunCode = async () => {
    setOutput('Running code...')
    
    // Simulate code execution
    setTimeout(() => {
      setOutput('Code executed successfully!\n\nOutput:\n> Success')
    }, 1000)
  }

  const handleBreakCode = () => {
    if (lesson && lesson.breakCode) {
      setCode(lesson.breakCode)
      setMode('break')
      setOutput('⚠️ Intentional errors injected! Try to debug and fix them.')
    }
  }

  const handleComplete = () => {
    completeLesson(track, parseInt(day))
    const nextDay = parseInt(day) + 1
    if (nextDay <= 30) {
      navigate(`/${track}/lesson/${nextDay}`)
    } else {
      navigate(`/${track}`)
    }
  }

  if (!lesson) {
    return (
      <div className="lesson-workspace">
        <div className="loading">Loading lesson...</div>
      </div>
    )
  }

  const getLanguage = () => {
    switch (track) {
      case 'python': return 'python'
      case 'javascript': return 'javascript'
      case 'react': return 'jsx'
      default: return 'javascript'
    }
  }

  return (
    <div className="lesson-workspace">
      <header className="workspace-header">
        <div className="header-left">
          <Link to={`/${track}`} className="back-button">
            <ChevronLeft size={20} />
            Back to {track}
          </Link>
          <div className="lesson-info">
            <span className="lesson-badge">Day {lesson.day}</span>
            <h1>{lesson.title}</h1>
          </div>
        </div>
        <div className="header-right">
          <button onClick={handleComplete} className="complete-btn">
            <CheckCircle size={18} />
            Mark Complete
          </button>
        </div>
      </header>

      <div className="workspace-content">
        <aside className="lesson-sidebar">
          <div className="lesson-section">
            <h3>📚 Topics Covered</h3>
            <ul className="topics-list">
              {lesson.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>

          <div className="lesson-section">
            <h3>⚡ Quick Actions</h3>
            <div className="action-buttons">
              <button 
                onClick={() => setCode(lesson.starterCode)}
                className="action-btn"
              >
                Reset Code
              </button>
              <button 
                onClick={handleBreakCode}
                className="action-btn error"
              >
                <Bug size={16} />
                Break-the-Code Mode
              </button>
              <button 
                onClick={() => setShowHints(!showHints)}
                className="action-btn"
              >
                <Lightbulb size={16} />
                {showHints ? 'Hide' : 'Show'} Hints
              </button>
            </div>
          </div>

          {mode === 'break' && lesson.commonErrors && (
            <div className="lesson-section error-section">
              <h3><AlertTriangle size={18} /> Common Errors</h3>
              <ul className="error-list">
                {lesson.commonErrors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {showHints && (
            <div className="lesson-section hints-section">
              <h3><Lightbulb size={18} /> Hints</h3>
              <ul className="hints-list">
                <li>Read error messages carefully - they tell you what went wrong</li>
                <li>Check line numbers in error messages</li>
                <li>Compare your code with the starter code</li>
                <li>Test small pieces of code individually</li>
              </ul>
            </div>
          )}

          <div className="lesson-navigation">
            {parseInt(day) > 1 && (
              <button
                onClick={() => navigate(`/${track}/lesson/${parseInt(day) - 1}`)}
                className="nav-btn prev"
              >
                <ChevronLeft size={16} />
                Previous
              </button>
            )}
            {parseInt(day) < 30 && (
              <button
                onClick={() => navigate(`/${track}/lesson/${parseInt(day) + 1}`)}
                className="nav-btn next"
              >
                Next
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </aside>

        <main className="code-workspace">
          <div className="editor-header">
            <div className="editor-tabs">
              <div className="tab active">
                {lesson.title}.{getLanguage() === 'jsx' ? 'jsx' : getLanguage()}
              </div>
            </div>
            <button onClick={handleRunCode} className="run-btn">
              ▶ Run Code
            </button>
          </div>

          <CodeEditor
            value={code}
            onChange={setCode}
            language={getLanguage()}
          />

          <div className="output-panel">
            <div className="output-header">
              <span>Output</span>
              <button onClick={() => setOutput('')} className="clear-btn">Clear</button>
            </div>
            <pre className="output-content">{output || 'Click "Run Code" to see output'}</pre>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LessonWorkspace
