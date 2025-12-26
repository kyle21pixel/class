# 30-Day Learning Dashboard

A modern, interactive web dashboard for a comprehensive 30-day learning program that teaches Python, React, and JavaScript from beginner to professional level.

## 🌟 Features

### 📚 Learning Experience
- **30-Day Structured Curriculum** - 10 days each for Python, React, and JavaScript
- **Interactive Code Editor** - Practice coding with live execution (JavaScript/React)
- **Real-time Progress Tracking** - Monitor your learning journey
- **Smart Bookmarking** - Save lessons for later review
- **Multiple Learning Paths** - Switch between technologies seamlessly

### 🎯 Interactive Assessments
- **Auto-Graded Quizzes** - Multiple choice, fill-in-blank, and coding questions
- **Instant Feedback** - Get immediate results and explanations
- **Performance Analytics** - Track quiz scores over time

### 🚀 Hands-On Projects
- **Weekly Mini-Projects** - Build real applications
- **Starter Code Templates** - Get a head start with scaffolding
- **Hints System** - Get help when you're stuck
- **Complete Solutions** - Learn from example implementations
- **Capstone Project** - Integrate all three technologies

### 📊 Advanced Analytics
- **Visual Progress Charts** - See your learning trends
- **Time Tracking** - Monitor study time per technology
- **Achievement System** - Unlock badges and milestones
- **Streak Counter** - Maintain daily learning momentum

### 🎨 Modern UI/UX
- **Dark/Light Mode** - Choose your preferred theme
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Animations** - Polished transitions and effects
- **Technology-Specific Themes** - Color-coded for Python, React, and JavaScript

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Code Editor**: CodeMirror with syntax highlighting
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: LocalStorage for persistence

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📖 Usage

### Getting Started
1. Visit the home page to see an overview of the program
2. Click on any technology card (Python, React, or JavaScript) to start
3. Browse the dashboard with 10 lessons per technology
4. Click on a lesson card to open the detailed lesson page

### Learning Flow
1. **Read the lesson content** - Comprehensive tutorials with examples
2. **Practice with exercises** - Code editor with starter templates
3. **Mark as complete** - Track your progress
4. **Take quizzes** - Test your understanding
5. **Build projects** - Apply what you've learned

### Features
- **Bookmark lessons** - Save important lessons for quick access
- **View analytics** - Monitor your progress with charts
- **Customize settings** - Toggle dark mode, manage notifications
- **Export data** - Download your progress as JSON

## 🎓 Curriculum Overview

### Python (Days 1-10)
1. Python Basics & Setup
2. Control Flow
3. Functions
4. Lists & Tuples
5. Dictionaries
6. String Manipulation
7. File Handling
8. Exception Handling
9. Object-Oriented Programming
10. Modules and Packages

### React (Days 1-5)
1. React Basics & JSX
2. Props and Components
3. State with useState
4. Event Handling
5. Conditional Rendering

### JavaScript (Days 1-5)
1. JavaScript Fundamentals
2. Functions
3. Arrays and Array Methods
4. Objects and Destructuring
5. Async JavaScript - Promises

## 🎯 Projects

1. **Python CLI Todo App** (Week 1)
2. **React Counter App** (Week 1)
3. **JavaScript Form Validator** (Week 1)
4. **Full-Stack Dashboard** (Week 4 - Capstone)

## 🔧 Configuration

### Theme
Toggle between light and dark mode in Settings

### Data Management
- Export your progress data
- Clear all data to start fresh
- All data stored locally in browser

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- Desktop (1400px+)
- Laptop (1024px - 1399px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --python-primary: #3776ab;
  --react-primary: #61dafb;
  --javascript-primary: #f7df1e;
}
```

### Lesson Content
Add or modify lessons in `src/data/lessonsData.js`

### Quizzes
Customize quizzes in `src/data/quizzesData.js`

### Projects
Update projects in `src/data/projectsData.js`

## 🤝 Contributing

This is an educational project built for learning purposes. Feel free to:
- Fork the repository
- Add more lessons or technologies
- Improve the UI/UX
- Add new features

## 📝 License

This project is open source and available for educational use.

## 🙏 Acknowledgments

- Official documentation: Python.org, React.dev, MDN
- Code editor: CodeMirror
- Charts: Recharts
- Icons: Lucide React

## 💡 Tips for Learners

1. **Consistency is key** - Try to learn every day
2. **Practice coding** - Don't just read, write code!
3. **Take quizzes** - Test your understanding regularly
4. **Build projects** - Apply concepts in real applications
5. **Review bookmarked lessons** - Revisit challenging topics
6. **Track your progress** - Use analytics to stay motivated

## 🐛 Known Limitations

- Python code execution is simulated (requires backend for real execution)
- Consider using Pyodide or a backend API for actual Python execution
- Quiz code validation is basic (can be enhanced with test runners)

## 🚀 Future Enhancements

- Backend API for real Python execution
- Social features (share progress, leaderboards)
- More technologies (TypeScript, Node.js, etc.)
- Video tutorials integration
- Certificate generation on completion
- Mobile app version

---

**Happy Learning! 🎓**

Start your journey to becoming a professional developer today!
