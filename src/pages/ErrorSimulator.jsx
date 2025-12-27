import { useState } from 'react'
import { Bug, Play, CheckCircle } from 'lucide-react'
import CodeEditor from '../components/CodeEditor'
import './ErrorSimulator.css'

const ErrorSimulator = () => {
  const [selectedError, setSelectedError] = useState(null)
  const [userCode, setUserCode] = useState('')
  const [solved, setSolved] = useState(false)

  const errors = [
    {
      id: 1,
      title: 'Python: NameError',
      language: 'python',
      difficulty: 'Beginner',
      description: 'Variable referenced before assignment',
      brokenCode: 'print(message)\nmessage = "Hello World"',
      correctCode: 'message = "Hello World"\nprint(message)',
      errorMessage: "NameError: name 'message' is not defined",
      explanation: 'Variables must be defined before they are used. Python reads code top to bottom.',
      debuggingSteps: [
        'Read the error message carefully',
        'Check where the variable is defined',
        'Move the definition before usage'
      ]
    },
    {
      id: 2,
      title: 'JavaScript: TypeError',
      language: 'javascript',
      difficulty: 'Beginner',
      description: 'Cannot read property of undefined',
      brokenCode: 'const user = null;\nconsole.log(user.name);',
      correctCode: 'const user = { name: "Alice" };\nconsole.log(user.name);\n// Or use optional chaining:\n// console.log(user?.name);',
      errorMessage: "TypeError: Cannot read property 'name' of null",
      explanation: 'Accessing properties on null or undefined causes errors. Always check if objects exist first.',
      debuggingSteps: [
        'Check if the object is null or undefined',
        'Use conditional checks or optional chaining',
        'Initialize objects properly'
      ]
    },
    {
      id: 3,
      title: 'React: Key Prop Warning',
      language: 'jsx',
      difficulty: 'Intermediate',
      description: 'Missing key prop in list rendering',
      brokenCode: 'function List() {\n  const items = [1, 2, 3];\n  return (\n    <ul>\n      {items.map(item => <li>{item}</li>)}\n    </ul>\n  );\n}',
      correctCode: 'function List() {\n  const items = [1, 2, 3];\n  return (\n    <ul>\n      {items.map(item => <li key={item}>{item}</li>)}\n    </ul>\n  );\n}',
      errorMessage: 'Warning: Each child in a list should have a unique "key" prop',
      explanation: 'React uses keys to identify which items have changed. Keys should be stable, unique, and not array indices.',
      debuggingSteps: [
        'Add unique key prop to list items',
        'Use stable identifiers, not array indices',
        'Ensure keys are unique within siblings'
      ]
    },
    {
      id: 4,
      title: 'Python: IndentationError',
      language: 'python',
      difficulty: 'Beginner',
      description: 'Inconsistent indentation in code block',
      brokenCode: 'def greet(name):\nprint(f"Hello, {name}")\n    return name',
      correctCode: 'def greet(name):\n    print(f"Hello, {name}")\n    return name',
      errorMessage: 'IndentationError: expected an indented block',
      explanation: 'Python uses indentation to define code blocks. All statements in a block must have the same indentation.',
      debuggingSteps: [
        'Check indentation levels',
        'Use consistent spaces (4 spaces recommended)',
        'Never mix tabs and spaces'
      ]
    },
    {
      id: 5,
      title: 'JavaScript: Async/Await Error',
      language: 'javascript',
      difficulty: 'Advanced',
      description: 'Missing await keyword',
      brokenCode: 'async function fetchData() {\n  const data = fetch("/api/data");\n  console.log(data.results);\n}',
      correctCode: 'async function fetchData() {\n  const response = await fetch("/api/data");\n  const data = await response.json();\n  console.log(data.results);\n}',
      errorMessage: 'TypeError: Cannot read property "results" of Promise',
      explanation: 'Promises must be awaited to access their resolved values. Without await, you get a Promise object.',
      debuggingSteps: [
        'Add await keyword before async operations',
        'Ensure function is marked as async',
        'Handle errors with try/catch'
      ]
    }
  ]

  const handleSelectError = (error) => {
    setSelectedError(error)
    setUserCode(error.brokenCode)
    setSolved(false)
  }

  const handleCheckSolution = () => {
    if (selectedError && userCode.trim() === selectedError.correctCode.trim()) {
      setSolved(true)
    } else {
      alert('Not quite right. Keep trying!')
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'var(--success)'
      case 'Intermediate': return 'var(--warning)'
      case 'Advanced': return 'var(--error)'
      default: return 'var(--text-secondary)'
    }
  }

  return (
    <div className="error-simulator">
      <header className="error-header">
        <div>
          <h1><Bug size={32} /> Error Simulator</h1>
          <p>Practice debugging real developer errors</p>
        </div>
      </header>

      <div className="error-content">
        <aside className="error-list">
          <h3>Common Errors</h3>
          {errors.map(error => (
            <button
              key={error.id}
              className={`error-item ${selectedError?.id === error.id ? 'active' : ''}`}
              onClick={() => handleSelectError(error)}
            >
              <div className="error-item-header">
                <span className="error-title">{error.title}</span>
                <span className="error-difficulty" style={{ color: getDifficultyColor(error.difficulty) }}>
                  {error.difficulty}
                </span>
              </div>
              <p className="error-description">{error.description}</p>
            </button>
          ))}
        </aside>

        <main className="error-workspace">
          {selectedError ? (
            <>
              <div className="error-info">
                <h2>{selectedError.title}</h2>
                <div className="error-message">
                  <strong>Error:</strong> {selectedError.errorMessage}
                </div>
                <p>{selectedError.explanation}</p>
                
                <div className="debugging-steps">
                  <h4>🔍 Debugging Steps:</h4>
                  <ol>
                    {selectedError.debuggingSteps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="code-section">
                <div className="code-header">
                  <span>Fix the code below:</span>
                  <button onClick={handleCheckSolution} className="check-btn">
                    <Play size={16} />
                    Check Solution
                  </button>
                </div>
                <CodeEditor
                  value={userCode}
                  onChange={setUserCode}
                  language={selectedError.language}
                />
              </div>

              {solved && (
                <div className="success-message">
                  <CheckCircle size={24} />
                  <div>
                    <h3>Correct! 🎉</h3>
                    <p>You've successfully debugged this error. Keep practicing!</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="empty-state">
              <Bug size={64} color="var(--text-muted)" />
              <p>Select an error from the list to start debugging</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default ErrorSimulator
