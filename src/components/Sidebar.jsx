import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, CheckSquare, FolderKanban, BarChart3, Settings } from 'lucide-react';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/dashboard', icon: BookOpen, label: 'Dashboard' },
    { path: '/quiz/python', icon: CheckSquare, label: 'Quizzes' },
    { path: '/projects', icon: FolderKanban, label: 'Projects' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="sidebar slide-in">
      <div className="sidebar-header">
        <h2 className="sidebar-title">📚 Learn</h2>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || 
                          (item.path === '/quiz/python' && location.pathname.startsWith('/quiz'));
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <p className="sidebar-version">v1.0.0</p>
        <p className="sidebar-credits">Built with ❤️ for learners</p>
      </div>
    </aside>
  );
}

export default Sidebar;
