import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { GraduationCap, CheckCircle, XCircle, Award, TrendingUp } from 'lucide-react'
import './QuizzesDashboard.css'

const QuizzesDashboard = () => {
  const { userProgress, submitQuiz } = useApp()
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const quizzes = [
    {
      id: 'python-basics',
      title: 'Python Fundamentals',
      track: 'Python',
      difficulty: 'Beginner',
      questions: [
        {
          question: 'What is the correct way to print "Hello World" in Python?',
          options: ['echo "Hello World"', 'print("Hello World")', 'console.log("Hello World")', 'printf("Hello World")'],
          correct: 1
        },
        {
          question: 'Which of these is NOT a valid Python data type?',
          options: ['int', 'float', 'string', 'str'],
          correct: 2
        },
        {
          question: 'What does the len() function do?',
          options: ['Creates a list', 'Returns the length of an object', 'Converts to string', 'Sorts items'],
          correct: 1
        },
        {
          question: 'How do you create a comment in Python?',
          options: ['// comment', '/* comment */', '# comment', '<!-- comment -->'],
          correct: 2
        },
        {
          question: 'Which keyword is used to define a function?',
          options: ['function', 'def', 'func', 'define'],
          correct: 1
        }
      ]
    },
    {
      id: 'javascript-fundamentals',
      title: 'JavaScript Basics',
      track: 'JavaScript',
      difficulty: 'Beginner',
      questions: [
        {
          question: 'Which keyword is used to declare a constant?',
          options: ['var', 'let', 'const', 'constant'],
          correct: 2
        },
        {
          question: 'What does === check for?',
          options: ['Value only', 'Type only', 'Both value and type', 'Reference'],
          correct: 2
        },
        {
          question: 'How do you write an arrow function?',
          options: ['function => {}', '() => {}', '-> {}', 'fn() {}'],
          correct: 1
        },
        {
          question: 'Which method adds an element to the end of an array?',
          options: ['add()', 'append()', 'push()', 'insert()'],
          correct: 2
        },
        {
          question: 'What is the output of: typeof null?',
          options: ['"null"', '"undefined"', '"object"', '"number"'],
          correct: 2
        }
      ]
    },
    {
      id: 'react-hooks',
      title: 'React Hooks',
      track: 'React',
      difficulty: 'Intermediate',
      questions: [
        {
          question: 'What hook is used for side effects?',
          options: ['useState', 'useEffect', 'useMemo', 'useCallback'],
          correct: 1
        },
        {
          question: 'How do you update state with useState?',
          options: ['state = newValue', 'setState(newValue)', 'updateState(newValue)', 'state.set(newValue)'],
          correct: 1
        },
        {
          question: 'What does the dependency array in useEffect control?',
          options: ['When state updates', 'When the effect runs', 'Component rendering', 'Event listeners'],
          correct: 1
        },
        {
          question: 'Which hook memoizes a value?',
          options: ['useMemo', 'useCallback', 'useRef', 'useState'],
          correct: 0
        },
        {
          question: 'What is the purpose of useRef?',
          options: ['State management', 'Accessing DOM elements', 'Side effects', 'Context'],
          correct: 1
        }
      ]
    }
  ]

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
  }

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index)
  }

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === selectedQuiz.questions[currentQuestion].correct
    const newAnswers = [...answers, { question: currentQuestion, selected: selectedAnswer, correct: isCorrect }]
    setAnswers(newAnswers)
    
    if (isCorrect) {
      setScore(score + 1)
    }

    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
      submitQuiz(selectedQuiz.id, Math.round((score + (isCorrect ? 1 : 0)) / selectedQuiz.questions.length * 100))
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

  if (showResult && selectedQuiz) {
    const percentage = Math.round((score / selectedQuiz.questions.length) * 100)
    const passed = percentage >= 70

    return (
      <div className="quizzes-dashboard">
        <div className="quiz-result">
          <div className="result-icon">
            {passed ? <Award size={64} color="var(--success)" /> : <TrendingUp size={64} color="var(--warning)" />}
          </div>
          <h1>{passed ? '🎉 Congratulations!' : '📚 Keep Learning!'}</h1>
          <div className="result-score">
            <span className="score-value">{score} / {selectedQuiz.questions.length}</span>
            <span className="score-percentage">{percentage}%</span>
          </div>
          <p>{passed ? 'Great job! You passed the quiz.' : 'Review the material and try again.'}</p>
          
          <div className="result-details">
            <h3>Review Your Answers</h3>
            {selectedQuiz.questions.map((q, idx) => {
              const answer = answers[idx]
              return (
                <div key={idx} className={`answer-review ${answer.correct ? 'correct' : 'incorrect'}`}>
                  <div className="review-header">
                    {answer.correct ? <CheckCircle size={20} /> : <XCircle size={20} />}
                    <span>Question {idx + 1}</span>
                  </div>
                  <p className="review-question">{q.question}</p>
                  <p className="review-answer">
                    Your answer: <strong>{q.options[answer.selected]}</strong>
                  </p>
                  {!answer.correct && (
                    <p className="review-correct">
                      Correct answer: <strong>{q.options[q.correct]}</strong>
                    </p>
                  )}
                </div>
              )
            })}
          </div>

          <div className="result-actions">
            <button onClick={() => handleStartQuiz(selectedQuiz)} className="retry-btn">
              Try Again
            </button>
            <button onClick={() => setSelectedQuiz(null)} className="back-btn">
              Back to Quizzes
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (selectedQuiz) {
    const question = selectedQuiz.questions[currentQuestion]
    
    return (
      <div className="quizzes-dashboard">
        <div className="quiz-active">
          <header className="quiz-header">
            <div>
              <h2>{selectedQuiz.title}</h2>
              <p>Question {currentQuestion + 1} of {selectedQuiz.questions.length}</p>
            </div>
            <div className="quiz-progress-bar">
              <div 
                className="quiz-progress-fill" 
                style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }}
              />
            </div>
          </header>

          <div className="question-card">
            <h3>{question.question}</h3>
            <div className="options-list">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  className={`option-btn ${selectedAnswer === idx ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(idx)}
                >
                  <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="quiz-actions">
            <button 
              onClick={handleNextQuestion}
              className="next-question-btn"
              disabled={selectedAnswer === null}
            >
              {currentQuestion === selectedQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="quizzes-dashboard">
      <header className="quizzes-header">
        <div>
          <h1><GraduationCap size={32} /> Quizzes & Tests</h1>
          <p>Test your knowledge and track your progress</p>
        </div>
      </header>

      <div className="quizzes-stats">
        <div className="stat-box">
          <div className="stat-value">{userProgress.quizzes.length}</div>
          <div className="stat-label">Quizzes Taken</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">
            {userProgress.quizzes.length > 0 
              ? Math.round(userProgress.quizzes.reduce((sum, q) => sum + q.score, 0) / userProgress.quizzes.length)
              : 0}%
          </div>
          <div className="stat-label">Average Score</div>
        </div>
      </div>

      <div className="quizzes-grid">
        {quizzes.map((quiz) => {
          const attempts = userProgress.quizzes.filter(q => q.id === quiz.id)
          const bestScore = attempts.length > 0 ? Math.max(...attempts.map(a => a.score)) : null
          
          return (
            <div key={quiz.id} className="quiz-card">
              <div className="quiz-card-header">
                <h3>{quiz.title}</h3>
                <span className="quiz-track">{quiz.track}</span>
              </div>
              <div className="quiz-meta">
                <span className="quiz-difficulty" style={{ color: getDifficultyColor(quiz.difficulty) }}>
                  {quiz.difficulty}
                </span>
                <span className="quiz-questions">{quiz.questions.length} questions</span>
              </div>
              {bestScore !== null && (
                <div className="quiz-best-score">
                  Best Score: <strong>{bestScore}%</strong>
                </div>
              )}
              <button onClick={() => handleStartQuiz(quiz)} className="start-quiz-btn">
                {attempts.length > 0 ? 'Retake Quiz' : 'Start Quiz'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuizzesDashboard
