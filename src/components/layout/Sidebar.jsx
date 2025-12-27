import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Code2, 
  Braces, 
  Blocks, 
  FolderKanban, 
  Bug, 
  GraduationCap, 
  BarChart3, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import './Sidebar.css'

const Sidebar = ({ collapsed, onToggle }) => {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Overview' },
    { to: '/python', icon: Code2, label: 'Python Track', color: 'var(--accent-python)' },
    { to: '/javascript', icon: Braces, label: 'JavaScript Track', color: 'var(--accent-javascript)' },
    { to: '/react', icon: Blocks, label: 'React Track', color: 'var(--accent-react)' },
    { to: '/projects', icon: FolderKanban, label: 'Projects Lab' },
    { to: '/errors', icon: Bug, label: 'Error Simulator' },
    { to: '/quizzes', icon: GraduationCap, label: 'Quizzes & Tests' },
    { to: '/progress', icon: BarChart3, label: 'Progress & Analytics' },
    { to: '/settings', icon: Settings, label: 'Settings' }
  ]

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!collapsed && (
          <div className="logo">
            <Code2 size={28} strokeWidth={2.5} />
            <span className="logo-text">DevMaster</span>
          </div>
        )}
        <button className="toggle-btn" onClick={onToggle}>
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            title={collapsed ? item.label : ''}
          >
            <item.icon size={20} style={item.color ? { color: item.color } : {}} />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {!collapsed && (
        <div className="sidebar-footer">
          <div className="footer-badge">
            <span className="badge-icon">🔥</span>
            <span className="badge-text">7 Day Streak</span>
          </div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
