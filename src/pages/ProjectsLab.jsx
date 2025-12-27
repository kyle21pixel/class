import { useState } from 'react'
import { FolderKanban, Filter } from 'lucide-react'
import './ProjectsLab.css'

const ProjectsLab = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'REST API with Authentication',
      description: 'Build a production-ready REST API with JWT authentication and database integration',
      language: 'Python',
      difficulty: 'Intermediate',
      estimatedTime: '4 hours',
      category: 'Backend',
      features: ['User registration', 'JWT tokens', 'Protected routes', 'Database CRUD']
    },
    {
      id: 2,
      title: 'Task Manager CLI Tool',
      description: 'Create a command-line task manager with file persistence',
      language: 'Python',
      difficulty: 'Beginner',
      estimatedTime: '2 hours',
      category: 'CLI',
      features: ['Add/delete tasks', 'Mark complete', 'List all', 'File storage']
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'Build a real-time chat app with WebSocket connections',
      language: 'JavaScript',
      difficulty: 'Advanced',
      estimatedTime: '6 hours',
      category: 'Full Stack',
      features: ['WebSocket connections', 'Multiple rooms', 'User authentication', 'Message history']
    },
    {
      id: 4,
      title: 'E-commerce Dashboard',
      description: 'Create an admin dashboard with charts, tables, and data management',
      language: 'React',
      difficulty: 'Advanced',
      estimatedTime: '8 hours',
      category: 'Frontend',
      features: ['Data visualization', 'CRUD operations', 'State management', 'Responsive design']
    },
    {
      id: 5,
      title: 'Weather App with API',
      description: 'Fetch and display weather data with geolocation',
      language: 'JavaScript',
      difficulty: 'Beginner',
      estimatedTime: '2 hours',
      category: 'Frontend',
      features: ['API integration', 'Geolocation', 'Async/await', 'Error handling']
    },
    {
      id: 6,
      title: 'Todo App with Redux',
      description: 'Build a todo application with Redux state management',
      language: 'React',
      difficulty: 'Intermediate',
      estimatedTime: '3 hours',
      category: 'Frontend',
      features: ['Redux store', 'Actions/reducers', 'Local storage', 'Filtering']
    }
  ]

  const categories = ['all', 'Backend', 'Frontend', 'Full Stack', 'CLI']
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'var(--success)'
      case 'Intermediate': return 'var(--warning)'
      case 'Advanced': return 'var(--error)'
      default: return 'var(--text-secondary)'
    }
  }

  return (
    <div className="projects-lab">
      <header className="projects-header">
        <div>
          <h1><FolderKanban size={32} /> Projects Lab</h1>
          <p>Build real-world projects to solidify your skills</p>
        </div>
      </header>

      <div className="projects-filters">
        <div className="filter-label">
          <Filter size={18} />
          <span>Filter by category:</span>
        </div>
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-language">{project.language}</span>
            </div>
            
            <p className="project-description">{project.description}</p>

            <div className="project-meta">
              <span className="difficulty" style={{ color: getDifficultyColor(project.difficulty) }}>
                {project.difficulty}
              </span>
              <span className="time">{project.estimatedTime}</span>
            </div>

            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <button className="start-project-btn">Start Project</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsLab
