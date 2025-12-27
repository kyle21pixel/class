# 🚀 DevMaster Academy

A **dashboard-first, professional SaaS learning platform** that teaches Python, JavaScript, and React over a 30-day structured program, taking users from absolute beginner to production-ready developer.

![DevMaster Academy](https://img.shields.io/badge/React-18.2-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple) ![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Core Philosophy

**This is a real developer workspace, not a blog or course site.**

- Dashboard is the product — every interaction happens inside a unified developer dashboard
- Focus on real-world projects, real bugs, real errors, and real debugging workflows
- Learning is hands-on, mistake-driven, and practical

## ✨ Key Features

### 📚 **30-Day Learning Tracks**
- **Python Track**: From syntax basics to production APIs and deployment
- **JavaScript Track**: Modern ES6+ to async patterns and REST APIs
- **React Track**: Components to state management and production patterns

Each track includes:
- Structured daily lessons with clear objectives
- Interactive code editor with syntax highlighting
- Progressive difficulty levels
- Completion tracking and progress indicators

### 🛠️ **Projects Lab**
Real-world projects categorized by difficulty:
- Beginner-friendly starter projects
- Intermediate challenges with industry scenarios
- Advanced production-ready applications
- Feature checklists and automated tests

### 🐛 **Error Simulator**
The platform's **key differentiator**:
- Inject real developer errors (syntax, runtime, logical)
- Match real error messages seen in production
- Step-by-step debugging workflows
- Learn how senior developers solve problems
- Prevention strategies for common mistakes

### 📊 **Progress & Analytics**
Comprehensive tracking:
- Skill mastery visualization with charts
- Error-fix success rate
- Project completion analytics
- Weak-area detection with recommendations
- Learning heatmaps and trends

### 🎓 **Break-the-Code Mode**
Unique learning feature:
- Intentionally inject errors into working code
- Practice debugging in a safe environment
- Build real troubleshooting skills
- Understand error messages deeply

## 🏗️ Architecture

```
Frontend: React 18 + Vite
Styling: Custom CSS with CSS Variables (Dark Mode First)
Code Editor: CodeMirror 6
Charts: Recharts
Icons: Lucide React
State Management: Context API + Local Storage
Code Execution: Pyodide (Python in browser) + Native JS
```

## 📁 Project Structure

```
lessons/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── RightPanel.jsx
│   │   └── CodeEditor.jsx
│   ├── pages/
│   │   ├── Overview.jsx
│   │   ├── PythonTrack.jsx
│   │   ├── JavaScriptTrack.jsx
│   │   ├── ReactTrack.jsx
│   │   ├── LessonWorkspace.jsx
│   │   ├── ProjectsLab.jsx
│   │   ├── ErrorSimulator.jsx
│   │   ├── QuizzesDashboard.jsx
│   │   └── ProgressAnalytics.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── data/
│   │   ├── pythonLessons.js
│   │   ├── javascriptLessons.js
│   │   └── reactLessons.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── index.html
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
```bash
cd lessons
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
```

## 🎨 UI/UX Features

- **Dark-mode first**: Professional developer-focused design
- **Minimal & clean**: Grid-based layout with subtle animations
- **Responsive**: Desktop-first, fully mobile-responsive
- **Visual identity**: Distinct color schemes per language
  - Python: Blue (`#3776ab`)
  - JavaScript: Yellow (`#f7df1e`)
  - React: Cyan (`#61dafb`)

## 📖 Learning Flow

### For Each Track:

1. **Overview**: See all 30 days organized by category
   - Fundamentals (Days 1-7)
   - Core Concepts (Days 8-14)
   - Advanced (Days 15-21)
   - Production (Days 22-30)

2. **Lesson Workspace**: Split-view learning
   - Left: Topics, hints, navigation
   - Right: Interactive code editor + output panel
   - Break-the-code mode for practice

3. **Progress Tracking**: 
   - Mark lessons complete
   - View analytics
   - Get personalized recommendations

## 🛤️ Roadmap

### Completed ✅
- [x] Core dashboard layout
- [x] All 3 learning tracks (90 lessons total)
- [x] Projects Lab interface
- [x] Error Simulator
- [x] Progress Analytics
- [x] Code editor integration
- [x] Dark mode design system

### In Progress 🚧
- [ ] In-browser Python execution (Pyodide)
- [ ] Quiz system implementation
- [ ] Project workspace with tests

### Future Enhancements 🔮
- [ ] User authentication
- [ ] Backend API for content
- [ ] Community features
- [ ] Code execution sandboxing
- [ ] AI-powered hints
- [ ] Certificate generation

## 🎯 User Journey

A user finishes with:
1. ✅ **Strong fundamentals** in Python, JavaScript, and React
2. 🐛 **Debugging confidence** from error simulator
3. 🚀 **Portfolio-ready projects** from Projects Lab
4. 💼 **Production-level thinking** from real-world scenarios

## 🤝 Contributing

This is a personal learning platform project. Feel free to fork and customize for your own use!

## 📝 License

MIT License - feel free to use this project as inspiration for your own learning platform.

## 🎓 Educational Philosophy

**Learn by doing, fail fast, debug often.**

This platform simulates real developer life:
- You write code that breaks
- You debug errors
- You build real projects
- You track measurable progress

No hand-holding. No endless tutorials. Just practical, hands-on development.

---

Built with ❤️ for developers, by developers.

**Start your journey: `npm install && npm run dev`**
