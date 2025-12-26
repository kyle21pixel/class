import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import quizzesData from '../data/quizzesData';
import Sidebar from '../components/Sidebar';
import CodeEditor from '../components/CodeEditor';
import { CheckCircle, XCircle, Award } from 'lucide-react';
import './Quiz.css';

function Quiz() {
  const { technology } = useParams();
  const { addQuizScore } = useApp();
  const [selectedTech, setSelectedTech] = useState(technology || 'python');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const quiz = quizzesData[selectedTech]?.[0];

  if (!quiz) {
    return (
      <div className="dashboard-layout">
        <Sidebar />
        <main className="quiz-main">
          <h1>Quiz not available</h1>
        </main>
      </div>
    );
  }

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = () => {
    let correctCount = 0;
    quiz.questions.forEach((q, index) => {
      if (q.type === 'multiple-choice' && answers[index] === q.correctAnswer) {
        correctCount++;
      } else if (q.type === 'fill-blank' && answers[index]?.toLowerCase().trim() === q.answer.toLowerCase()) {
        correctCount++;
      } else if (q.type === 'code' && answers[index]) {
        // Simplified check for code questions
        correctCount += 0.5; // Partial credit for attempting
      }
    });
    
    const finalScore = Math.round((correctCount / quiz.questions.length) * 100);
    setScore(finalScore);
    addQuizScore(selectedTech, finalScore);
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const question = quiz.questions[currentQuestion];

  if (showResults) {
    return (
      <div className="dashboard-layout">
        <Sidebar />
        <main className="quiz-main">
          <div className="quiz-container">
            <div className="quiz-results fade-in">
              <div className="results-icon">
                <Award size={80} color={score >= 70 ? '#28a745' : '#ffc107'} />
              </div>
              <h1>Quiz Complete!</h1>
              <div className="score-display">
                <div className="score-value">{score}%</div>
                <div className="score-label">
                  {score >= 90 ? 'Excellent!' : score >= 70 ? 'Great Job!' : score >= 50 ? 'Good Effort!' : 'Keep Practicing!'}
                </div>
              </div>

              <div className="results-breakdown">
                <h3>Answer Review:</h3>
                {quiz.questions.map((q, index) => (
                  <div key={index} className="result-item">
                    <div className="result-header">
                      {answers[index] !== undefined ? (
                        q.type === 'multiple-choice' && answers[index] === q.correctAnswer ? (
                          <CheckCircle size={24} color="#28a745" />
                        ) : q.type === 'fill-blank' && answers[index]?.toLowerCase() === q.answer.toLowerCase() ? (
                          <CheckCircle size={24} color="#28a745" />
                        ) : (
                          <XCircle size={24} color="#dc3545" />
                        )
                      ) : (
                        <XCircle size={24} color="#6c757d" />
                      )}
                      <span>Question {index + 1}</span>
                    </div>
                    <p className="result-question">{q.question}</p>
                    {q.explanation && (
                      <p className="result-explanation">
                        <strong>💡 </strong>{q.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="results-actions">
                <button className="btn-primary" onClick={restartQuiz}>
                  Retry Quiz
                </button>
                <Link to="/dashboard" className="btn-secondary">
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="quiz-main">
        <div className="quiz-container">
          <header className="quiz-header">
            <h1>{quiz.title}</h1>
            <div className="tech-selector-quiz">
              <Link 
                to="/quiz/python" 
                className={`tech-btn-quiz ${selectedTech === 'python' ? 'active python' : ''}`}
                onClick={() => { setSelectedTech('python'); restartQuiz(); }}
              >
                🐍 Python
              </Link>
              <Link 
                to="/quiz/react" 
                className={`tech-btn-quiz ${selectedTech === 'react' ? 'active react' : ''}`}
                onClick={() => { setSelectedTech('react'); restartQuiz(); }}
              >
                ⚛️ React
              </Link>
              <Link 
                to="/quiz/javascript" 
                className={`tech-btn-quiz ${selectedTech === 'javascript' ? 'active javascript' : ''}`}
                onClick={() => { setSelectedTech('javascript'); restartQuiz(); }}
              >
                📜 JavaScript
              </Link>
            </div>
          </header>

          <div className="quiz-progress">
            <div className="progress-bar-quiz">
              <div 
                className="progress-fill-quiz"
                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              ></div>
            </div>
            <span className="progress-text">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </span>
          </div>

          <div className="question-card fade-in">
            <h2>{ question.question}</h2>

            {question.type === 'multiple-choice' && (
              <div className="options-list">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-btn ${answers[currentQuestion] === index ? 'selected' : ''}`}
                    onClick={() => handleAnswer(index)}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    <span className="option-text">{option}</span>
                  </button>
                ))}
              </div>
            )}

            {question.type === 'fill-blank' && (
              <div className="fill-blank-section">
                <input
                  type="text"
                  className="fill-blank-input"
                  placeholder="Type your answer..."
                  value={answers[currentQuestion] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                />
              </div>
            )}

            {question.type === 'code' && (
              <div className="code-question-section">
                <CodeEditor
                  language={selectedTech === 'react' ? 'jsx' : selectedTech}
                  initialCode={question.starterCode}
                  technology={selectedTech}
                />
              </div>
            )}
          </div>

          <div className="quiz-navigation">
            <button 
              className="nav-btn-quiz"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>

            {currentQuestion < quiz.questions.length - 1 ? (
              <button 
                className="nav-btn-quiz primary"
                onClick={nextQuestion}
              >
                Next
              </button>
            ) : (
              <button 
                className="nav-btn-quiz primary submit"
                onClick={submitQuiz}
              >
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Quiz;
