import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('progress');
    return saved ? JSON.parse(saved) : {
      python: {},
      react: {},
      javascript: {}
    };
  });

  const [quizScores, setQuizScores] = useState(() => {
    const saved = localStorage.getItem('quizScores');
    return saved ? JSON.parse(saved) : {
      python: [],
      react: [],
      javascript: []
    };
  });

  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const [projectProgress, setProjectProgress] = useState(() => {
    const saved = localStorage.getItem('projectProgress');
    return saved ? JSON.parse(saved) : {};
  });

  const [timeSpent, setTimeSpent] = useState(() => {
    const saved = localStorage.getItem('timeSpent');
    return saved ? JSON.parse(saved) : {
      python: 0,
      react: 0,
      javascript: 0
    };
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
  }, [quizScores]);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('projectProgress', JSON.stringify(projectProgress));
  }, [projectProgress]);

  useEffect(() => {
    localStorage.setItem('timeSpent', JSON.stringify(timeSpent));
  }, [timeSpent]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const markLessonComplete = (technology, day) => {
    setProgress(prev => ({
      ...prev,
      [technology]: {
        ...prev[technology],
        [day]: {
          status: 'completed',
          completedAt: new Date().toISOString()
        }
      }
    }));
  };

  const markLessonInProgress = (technology, day) => {
    setProgress(prev => ({
      ...prev,
      [technology]: {
        ...prev[technology],
        [day]: {
          status: 'in-progress',
          startedAt: new Date().toISOString()
        }
      }
    }));
  };

  const addQuizScore = (technology, score) => {
    setQuizScores(prev => ({
      ...prev,
      [technology]: [...prev[technology], {
        score,
        date: new Date().toISOString()
      }]
    }));
  };

  const toggleBookmark = (lessonId) => {
    setBookmarks(prev => {
      if (prev.includes(lessonId)) {
        return prev.filter(id => id !== lessonId);
      }
      return [...prev, lessonId];
    });
  };

  const addTimeSpent = (technology, minutes) => {
    setTimeSpent(prev => ({
      ...prev,
      [technology]: prev[technology] + minutes
    }));
  };

  const getStreak = () => {
    const allProgress = Object.values(progress).flatMap(tech => 
      Object.values(tech).map(lesson => lesson.completedAt)
    ).filter(Boolean).sort().reverse();

    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    for (let date of allProgress) {
      const lessonDate = new Date(date);
      lessonDate.setHours(0, 0, 0, 0);
      
      const diffDays = Math.floor((currentDate - lessonDate) / (1000 * 60 * 60 * 24));
      
      if (diffDays === streak) {
        streak++;
      } else if (diffDays > streak) {
        break;
      }
    }

    return streak;
  };

  const markProjectComplete = (projectId) => {
    setProjectProgress(prev => ({
      ...prev,
      [projectId]: {
        completed: true,
        completedAt: new Date().toISOString()
      }
    }));
  };

  const value = {
    theme,
    toggleTheme,
    progress,
    markLessonComplete,
    markLessonInProgress,
    quizScores,
    addQuizScore,
    bookmarks,
    toggleBookmark,
    timeSpent,
    addTimeSpent,
    getStreak,
    projectProgress,
    markProjectComplete
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
