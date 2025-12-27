import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import Overview from './pages/Overview'
import PythonTrack from './pages/PythonTrack'
import JavaScriptTrack from './pages/JavaScriptTrack'
import ReactTrack from './pages/ReactTrack'
import ProjectsLab from './pages/ProjectsLab'
import ErrorSimulator from './pages/ErrorSimulator'
import QuizzesDashboard from './pages/QuizzesDashboard'
import ProgressAnalytics from './pages/ProgressAnalytics'
import Settings from './pages/Settings'
import LessonWorkspace from './pages/LessonWorkspace'
import ProjectWorkspace from './pages/ProjectWorkspace'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/python" element={<PythonTrack />} />
            <Route path="/python/lesson/:day" element={<LessonWorkspace track="python" />} />
            <Route path="/javascript" element={<JavaScriptTrack />} />
            <Route path="/javascript/lesson/:day" element={<LessonWorkspace track="javascript" />} />
            <Route path="/react" element={<ReactTrack />} />
            <Route path="/react/lesson/:day" element={<LessonWorkspace track="react" />} />
            <Route path="/projects" element={<ProjectsLab />} />
            <Route path="/projects/:id" element={<ProjectWorkspace />} />
            <Route path="/errors" element={<ErrorSimulator />} />
            <Route path="/quizzes" element={<QuizzesDashboard />} />
            <Route path="/progress" element={<ProgressAnalytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </AppProvider>
  )
}

export default App
