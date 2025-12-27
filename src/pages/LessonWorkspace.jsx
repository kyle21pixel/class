import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { getPythonLessonByDay } from '../data/pythonLessons'
import { getJavaScriptLessonByDay } from '../data/javascriptLessons'
import { getReactLessonByDay } from '../data/reactLessons'
import CodeEditor from '../components/CodeEditor'
import { CheckCircle, ChevronLeft, ChevronRight, AlertTriangle, Lightbulb, Bug, Eye, EyeOff, Play } from 'lucide-react'
import './LessonWorkspace.css'

const LessonWorkspace = ({ track }) => {
  const { day } = useParams()
  const navigate = useNavigate()
  const { completeLesson, saveCodeForLesson, getSavedCode } = useApp()
  
  const [lesson, setLesson] = useState(null)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('learn') // 'learn', 'practice', 'break'
  const [showHints, setShowHints] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

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
      const savedCode = getSavedCode(track, day)
      setCode(savedCode || lessonData.starterCode || '')
    }
  }, [track, day, getSavedCode])

  useEffect(() => {
    if (lesson && code) {
      const timer = setTimeout(() => {
        saveCodeForLesson(track, day, code)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [code, lesson, track, day, saveCodeForLesson])

  const handleRunCode = async () => {
    setIsRunning(true)
    setOutput('Running code...\n')
    
    try {
      const language = getLanguage()
      
      // Simulate code execution with error detection
      await new Promise(resolve => setTimeout(resolve, 800))
      
      if (language === 'python') {
        // Simple Python execution simulation
        if (code.includes('print(')) {
          const matches = code.match(/print\((.*?)\)/g)
          if (matches) {
            const outputs = matches.map(match => {
              const content = match.replace(/print\(|\)/g, '').trim()
              try {
                return eval(content)
              } catch {
                return content.replace(/['"]/g, '')
              }
            })
            setOutput(`✓ Code executed successfully!\n\nOutput:\n${outputs.join('\n')}`)
          }
        } else {
          setOutput('✓ Code executed successfully!\n\nNo output to display.')
        }
      } else if (language === 'javascript' || language === 'jsx') {
        // JavaScript/React execution simulation
        const logs = []
        const customConsole = {
          log: (...args) => logs.push(args.join(' ')),
          error: (...args) => logs.push('ERROR: ' + args.join(' ')),
          warn: (...args) => logs.push('WARNING: ' + args.join(' '))
        }
        
        try {
          // Simple safe evaluation for demo
          const func = new Function('console', code)
          func(customConsole)
          setOutput(`✓ Code executed successfully!\n\n${logs.length > 0 ? 'Output:\n' + logs.join('\n') : 'No output to display.'}`)
        } catch (error) {
          setOutput(`✗ Error:\n${error.message}\n\nCheck your code for syntax errors.`)
        }
      }
    } catch (error) {
      setOutput(`✗ Execution error:\n${error.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  const handleBreakCode = () => {
    if (lesson && lesson.breakCode) {
      setCode(lesson.breakCode)
      setMode('break')
      setOutput('⚠️ Intentional errors injected! Try to debug and fix them.')
    }
  }

  const handleShowSolution = () => {
    if (!showSolution && lesson && lesson.correctCode) {
      setShowSolution(true)
    } else {
      setShowSolution(false)
    }
  }

  const handleUseSolution = () => {
    if (lesson && lesson.correctCode) {
      setCode(lesson.correctCode)
      setShowSolution(false)
      setOutput('✓ Solution code loaded! Study it and understand how it works.')
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
              {lesson.correctCode && (
                <button 
                  onClick={handleShowSolution}
                  className="action-btn success"
                >
                  {showSolution ? <EyeOff size={16} /> : <Eye size={16} />}
                  {showSolution ? 'Hide' : 'Show'} Solution
                </button>
              )}
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
            <button onClick={handleRunCode} className="run-btn" disabled={isRunning}>
              <Play size={16} />
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
          </div>

          {showSolution ? (
            <div className="solution-view">
              <div className="solution-header">
                <h3>💡 Solution Code</h3>
                <div className="solution-actions">
                  <button onClick={handleUseSolution} className="use-solution-btn">
                    Use This Code
                  </button>
                  <button onClick={() => setShowSolution(false)} className="close-solution-btn">
                    Close
                  </button>
                </div>
              </div>
              <CodeEditor
                value={lesson.correctCode || ''}
                onChange={() => {}}
                language={getLanguage()}
                readOnly={true}
              />
            </div>
          ) : (
            <CodeEditor
              value={code}
              onChange={setCode}
              language={getLanguage()}
            />
          )}

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
