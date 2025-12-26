import { useState, useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import projectsData from '../data/projectsData';
import CodeEditor from '../components/CodeEditor';
import { Folder, Clock, Award, ChevronDown, ChevronUp, Lightbulb, Search, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [filterTech, setFilterTech] = useState('all');
  const { projectProgress, markProjectComplete } = useApp();

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = filterDifficulty === 'all' || project.difficulty === filterDifficulty;
      const matchesTech = filterTech === 'all' || project.technology === filterTech;
      
      return matchesSearch && matchesDifficulty && matchesTech;
    });
  }, [searchTerm, filterDifficulty, filterTech]);

  const completedCount = Object.values(projectProgress).filter(p => p.completed).length;

  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="projects-main">
        <div className="projects-container">
          <header className="projects-header">
            <h1>🚀 Mini-Projects</h1>
            <p className="projects-subtitle">
              Build real-world projects to reinforce your learning and create portfolio pieces
            </p>
            <div className="projects-stats">
              <span className="stat-badge">
                <Award size={18} />
                {completedCount} / {projectsData.length} Completed
              </span>
            </div>
          </header>

          <div className="projects-filters">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-group">
              <Filter size={18} />
              <select value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)}>
                <option value="all">All Difficulties</option>
                <option value="Beginner">Beginner</option>
                <option value="Advanced">Advanced</option>
              </select>
              
              <select value={filterTech} onChange={(e) => setFilterTech(e.target.value)}>
                <option value="all">All Technologies</option>
                <option value="python">Python</option>
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="all">Full-Stack</option>
              </select>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.length === 0 ? (
              <div className="no-results">
                <p>No projects found matching your criteria.</p>
              </div>
            ) : (
              filteredProjects.map((project) => {
                const isCompleted = projectProgress[project.id]?.completed;
                
                return (
                  <div key={project.id} className={`project-card ${project.technology} ${isCompleted ? 'completed' : ''}`}>
                    {isCompleted && <div className="completed-badge">✓ Completed</div>}
                    <div className="project-card-header">
                      <div className={`tech-icon ${project.technology}`}>
                        {project.technology === 'python' && '🐍'}
                        {project.technology === 'react' && '⚛️'}
                        {project.technology === 'javascript' && '📜'}
                        {project.technology === 'all' && '🌐'}
                      </div>
                      <span className={`difficulty-badge ${project.difficulty.toLowerCase()}`}>
                        {project.difficulty}
                      </span>
                    </div>

                    <h2>{project.title}</h2>
                    <p className="project-description">{project.description}</p>

                    <div className="project-meta">
                      <span className="meta-badge">
                        <Clock size={16} />
                        {project.duration}
                      </span>
                      <span className="meta-badge">
                        <Award size={16} />
                        Week {project.week}
                      </span>
                    </div>

                    <div className="project-actions">
                      <button 
                        className="view-project-btn"
                        onClick={() => setSelectedProject(project.id === selectedProject ? null : project.id)}
                      >
                        {selectedProject === project.id ? (
                          <>
                            <ChevronUp size={20} />
                            Close Project
                          </>
                        ) : (
                          <>
                            <Folder size={20} />
                            View Project
                          </>
                        )}
                      </button>
                      
                      {!isCompleted && (
                        <button 
                          className="mark-complete-btn"
                          onClick={() => markProjectComplete(project.id)}
                          title="Mark as complete"
                        >
                          ✓
                        </button>
                      )}
                    </div>

                    {selectedProject === project.id && (
                  <div className="project-details fade-in">
                    <section className="details-section">
                      <h3>🎯 Objectives</h3>
                      <ul>
                        {project.objectives.map((obj, i) => (
                          <li key={i}>{obj}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="details-section">
                      <h3>📋 Requirements</h3>
                      <ul>
                        {project.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="details-section">
                      <h3>💻 Starter Code</h3>
                      <CodeEditor
                        language={project.technology === 'react' ? 'jsx' : project.technology}
                        initialCode={project.starterCode}
                        technology={project.technology}
                      />
                    </section>

                    {project.hints && project.hints.length > 0 && (
                      <section className="details-section">
                        <button 
                          className="toggle-section-btn"
                          onClick={() => setShowHints(!showHints)}
                        >
                          <Lightbulb size={20} />
                          {showHints ? 'Hide Hints' : 'Show Hints'}
                          {showHints ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        
                        {showHints && (
                          <div className="hints-section fade-in">
                            {project.hints.map((hint, i) => (
                              <div key={i} className="hint-item">
                                <span className="hint-number">{i + 1}</span>
                                <span>{hint}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </section>
                    )}

                    <section className="details-section">
                      <button 
                        className="toggle-section-btn solution"
                        onClick={() => setShowSolution(!showSolution)}
                      >
                        <Award size={20} />
                        {showSolution ? 'Hide Solution' : 'View Solution'}
                        {showSolution ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>

                      {showSolution && (
                        <div className="solution-section fade-in">
                          <div className="solution-warning">
                            ⚠️ Try to complete the project on your own first before viewing the solution!
                          </div>
                          {typeof project.solution === 'string' && project.solution.includes('Complete solution') ? (
                            <p className="solution-note">{project.solution}</p>
                          ) : (
                            <CodeEditor
                              language={project.technology === 'react' ? 'jsx' : project.technology}
                              initialCode={project.solution}
                              readOnly={true}
                              technology={project.technology}
                            />
                          )}
                        </div>
                      )}
                    </section>
                  </div>
                )}
              </div>
            );
          })
        )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projects;
