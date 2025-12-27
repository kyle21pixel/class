import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('userProgress')
    return saved ? JSON.parse(saved) : {
      python: { completed: [], current: 1, totalLessons: 30 },
      javascript: { completed: [], current: 1, totalLessons: 30 },
      react: { completed: [], current: 1, totalLessons: 30 },
      projects: [],
      errors: [],
      quizzes: [],
      streak: 0,
      lastActive: null
    }
  })

  const [skillMastery, setSkillMastery] = useState(() => {
    const saved = localStorage.getItem('skillMastery')
    return saved ? JSON.parse(saved) : {
      python: { fundamentals: 0, core: 0, advanced: 0, production: 0 },
      javascript: { fundamentals: 0, core: 0, advanced: 0, production: 0 },
      react: { fundamentals: 0, core: 0, advanced: 0, production: 0 }
    }
  })

  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(userProgress))
  }, [userProgress])

  useEffect(() => {
    localStorage.setItem('skillMastery', JSON.stringify(skillMastery))
  }, [skillMastery])

  const completeLesson = (track, day) => {
    setUserProgress(prev => ({
      ...prev,
      [track]: {
        ...prev[track],
        completed: [...new Set([...prev[track].completed, day])],
        current: Math.max(prev[track].current, day + 1)
      }
    }))
  }

  const completeProject = (projectId) => {
    setUserProgress(prev => ({
      ...prev,
      projects: [...new Set([...prev.projects, projectId])]
    }))
  }

  const solveError = (errorId) => {
    setUserProgress(prev => ({
      ...prev,
      errors: [...new Set([...prev.errors, errorId])]
    }))
  }

  const submitQuiz = (quizId, score) => {
    setUserProgress(prev => ({
      ...prev,
      quizzes: [...prev.quizzes, { id: quizId, score, date: new Date().toISOString() }]
    }))
  }

  const updateSkillMastery = (track, category, value) => {
    setSkillMastery(prev => ({
      ...prev,
      [track]: {
        ...prev[track],
        [category]: Math.min(100, Math.max(0, value))
      }
    }))
  }

  const value = {
    userProgress,
    skillMastery,
    completeLesson,
    completeProject,
    solveError,
    submitQuiz,
    updateSkillMastery
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
