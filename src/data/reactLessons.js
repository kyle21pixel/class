// 30-day React curriculum
export const reactLessons = [
  // Week 1: Fundamentals (Days 1-7)
  { day: 1, title: "JSX & Components", difficulty: "Beginner", duration: "50 min", category: "fundamentals",
    topics: ["JSX syntax", "Functional components", "Props", "Component composition"],
    starterCode: "function Welcome({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\nfunction App() {\n  return <Welcome name=\"Developer\" />;\n}",
    breakCode: "function Welcome({ name }) {\n  return <h1>Hello, {name}!</h1>\n}\n\nfunction App() {\n  return <Welcome name=Developer />;\n}",
    commonErrors: ["SyntaxError: Adjacent JSX elements must be wrapped", "Props not passed correctly"]
  },
  { day: 2, title: "State with useState", difficulty: "Beginner", duration: "60 min", category: "fundamentals",
    topics: ["useState hook", "State updates", "Event handling", "Functional updates"],
    starterCode: "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}",
    breakCode: "function Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}",
    commonErrors: ["Too many re-renders", "State not updating"]
  },
  { day: 3, title: "Props & Component Communication", difficulty: "Beginner", duration: "55 min", category: "fundamentals",
    topics: ["Passing props", "Props destructuring", "Children prop", "Prop types"],
    starterCode: "function Parent() {\n  return <Child message=\"Hello\" />;\n}\n\nfunction Child({ message }) {\n  return <p>{message}</p>;\n}",
    breakCode: "function Parent() {\n  const message = \"Hello\";\n  return <Child />;\n}\n\nfunction Child({ message }) {\n  return <p>{message}</p>;\n}",
    commonErrors: ["Props not passed down", "Undefined props"]
  },
  { day: 4, title: "Lists & Keys", difficulty: "Beginner", duration: "50 min", category: "fundamentals",
    topics: ["Rendering lists", "Key prop", "Map function", "Conditional rendering"],
    starterCode: "function TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map(todo => (\n        <li key={todo.id}>{todo.text}</li>\n      ))}\n    </ul>\n  );\n}",
    breakCode: "function TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map((todo, index) => (\n        <li key={index}>{todo.text}</li>\n      ))}\n    </ul>\n  );\n}",
    commonErrors: ["Warning: Each child in a list should have a unique key prop", "Using index as key"]
  },
  { day: 5, title: "Event Handling", difficulty: "Beginner", duration: "55 min", category: "fundamentals",
    topics: ["onClick", "onChange", "Event object", "Preventing defaults"],
    starterCode: "function Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log('Submitted');\n  };\n  return <form onSubmit={handleSubmit}>...</form>;\n}",
    breakCode: "function Form() {\n  const handleSubmit = () => {\n    console.log('Submitted');\n  };\n  return <form onSubmit={handleSubmit()}>...</form>;\n}",
    commonErrors: ["Function called immediately instead of on event", "Form submission reloading page"]
  },
  { day: 6, title: "Conditional Rendering", difficulty: "Beginner", duration: "50 min", category: "fundamentals",
    topics: ["Ternary operators", "Logical &&", "If/else patterns", "Early returns"],
    starterCode: "function Greeting({ isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}\n    </div>\n  );\n}",
    breakCode: "function Greeting({ isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn && <UserGreeting />}\n      {!isLoggedIn && <GuestGreeting />}\n    </div>\n  );\n}",
    commonErrors: ["Rendering '0' or 'false'", "Multiple conditionals inefficiency"]
  },
  { day: 7, title: "Forms & Controlled Components", difficulty: "Beginner", duration: "60 min", category: "fundamentals",
    topics: ["Controlled inputs", "Form state", "Multiple inputs", "Form validation"],
    starterCode: "function Form() {\n  const [value, setValue] = useState('');\n  return (\n    <input\n      value={value}\n      onChange={(e) => setValue(e.target.value)}\n    />\n  );\n}",
    breakCode: "function Form() {\n  const [value, setValue] = useState('');\n  return (\n    <input\n      value={value}\n      onChange={setValue(e.target.value)}\n    />\n  );\n}",
    commonErrors: ["Uncontrolled component warning", "Cannot type in input"]
  },

  // Week 2: Core Concepts (Days 8-14)
  { day: 8, title: "useEffect Hook", difficulty: "Intermediate", duration: "70 min", category: "core",
    topics: ["useEffect basics", "Dependency array", "Cleanup functions", "Effect timing"],
    starterCode: "useEffect(() => {\n  console.log('Effect runs');\n  return () => console.log('Cleanup');\n}, [dependency]);",
    breakCode: "useEffect(() => {\n  console.log('Effect runs');\n}, dependency);",
    commonErrors: ["Infinite loop", "Effect not cleaning up", "Dependencies warning"]
  },
  { day: 9, title: "Custom Hooks", difficulty: "Intermediate", duration: "75 min", category: "core",
    topics: ["Hook patterns", "Reusable logic", "Hook composition", "Best practices"],
    starterCode: "function useCounter(initialValue) {\n  const [count, setCount] = useState(initialValue);\n  const increment = () => setCount(c => c + 1);\n  return { count, increment };\n}",
    breakCode: "function useCounter(initialValue) {\n  const [count, setCount] = useState(initialValue);\n  const increment = () => setCount(count + 1);\n  return { count, increment };\n}",
    commonErrors: ["Stale closure", "Hooks called conditionally"]
  },
  { day: 10, title: "useContext for State Management", difficulty: "Intermediate", duration: "75 min", category: "core",
    topics: ["Context API", "Provider pattern", "useContext hook", "Avoiding prop drilling"],
    starterCode: "const ThemeContext = createContext();\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Child />\n    </ThemeContext.Provider>\n  );\n}",
    breakCode: "const ThemeContext = createContext();\n\nfunction Child() {\n  const theme = ThemeContext;\n  return <div>{theme}</div>;\n}",
    commonErrors: ["Context used outside provider", "Unnecessary re-renders"]
  },
  { day: 11, title: "useReducer for Complex State", difficulty: "Intermediate", duration: "80 min", category: "core",
    topics: ["useReducer hook", "Reducer pattern", "Action types", "Complex state logic"],
    starterCode: "const [state, dispatch] = useReducer(reducer, initialState);\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    default:\n      return state;\n  }\n}",
    breakCode: "const [state, dispatch] = useReducer(reducer, initialState);\n\nfunction reducer(state, action) {\n  if (action.type === 'increment') {\n    state.count += 1;\n  }\n  return state;\n}",
    commonErrors: ["Mutating state directly", "Missing action types"]
  },
  { day: 12, title: "Component Lifecycle", difficulty: "Intermediate", duration: "70 min", category: "core",
    topics: ["Mount/unmount", "Update cycle", "useEffect lifecycle", "Cleanup patterns"],
    starterCode: "useEffect(() => {\n  // Mount\n  const timer = setInterval(() => {}, 1000);\n  return () => {\n    // Unmount cleanup\n    clearInterval(timer);\n  };\n}, []);",
    breakCode: "useEffect(() => {\n  const timer = setInterval(() => {}, 1000);\n}, []);",
    commonErrors: ["Memory leaks", "Cleanup not called", "Effect dependency issues"]
  },
  { day: 13, title: "React Router Basics", difficulty: "Intermediate", duration: "75 min", category: "core",
    topics: ["BrowserRouter", "Routes & Route", "Link & NavLink", "useNavigate"],
    starterCode: "import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
    breakCode: "import { BrowserRouter, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Route path=\"/\" component={Home} />\n    </BrowserRouter>\n  );\n}",
    commonErrors: ["React Router v6 API changes", "Routes not nested correctly"]
  },
  { day: 14, title: "Styling in React", difficulty: "Intermediate", duration: "65 min", category: "core",
    topics: ["CSS Modules", "Inline styles", "Styled components", "CSS-in-JS"],
    starterCode: "import styles from './Button.module.css';\n\nfunction Button() {\n  return <button className={styles.btn}>Click</button>;\n}",
    breakCode: "import './Button.css';\n\nfunction Button() {\n  return <button class=\"btn\">Click</button>;\n}",
    commonErrors: ["Using 'class' instead of 'className'", "Style conflicts"]
  },

  // Week 3: Advanced (Days 15-21)
  { day: 15, title: "Performance: React.memo", difficulty: "Advanced", duration: "75 min", category: "advanced",
    topics: ["React.memo", "Memoization", "Preventing re-renders", "When to use"],
    starterCode: "const MemoizedChild = React.memo(function Child({ data }) {\n  return <div>{data}</div>;\n});",
    breakCode: "function Child({ data }) {\n  console.log('Rendering');\n  return <div>{data}</div>;\n}\n// Re-renders on every parent render",
    commonErrors: ["Unnecessary re-renders", "Over-optimization"]
  },
  { day: 16, title: "useMemo & useCallback", difficulty: "Advanced", duration: "80 min", category: "advanced",
    topics: ["useMemo hook", "useCallback hook", "Expensive computations", "Reference equality"],
    starterCode: "const memoizedValue = useMemo(() => {\n  return expensiveCalculation(data);\n}, [data]);\n\nconst memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);",
    breakCode: "const value = useMemo(() => {\n  return expensiveCalculation(data);\n});\n// Missing dependencies",
    commonErrors: ["Missing dependencies", "Premature optimization"]
  },
  { day: 17, title: "Error Boundaries", difficulty: "Advanced", duration: "70 min", category: "advanced",
    topics: ["Error catching", "componentDidCatch", "Error UI", "Error recovery"],
    starterCode: "class ErrorBoundary extends React.Component {\n  state = { hasError: false };\n  \n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n  \n  componentDidCatch(error, info) {\n    console.error(error, info);\n  }\n  \n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong.</h1>;\n    }\n    return this.props.children;\n  }\n}",
    breakCode: "function ErrorBoundary({ children }) {\n  try {\n    return children;\n  } catch (error) {\n    return <div>Error!</div>;\n  }\n}",
    commonErrors: ["Errors not caught", "Event handler errors not caught"]
  },
  { day: 18, title: "Portals & Refs", difficulty: "Advanced", duration: "70 min", category: "advanced",
    topics: ["ReactDOM.createPortal", "useRef hook", "DOM access", "Focus management"],
    starterCode: "const modalRoot = document.getElementById('modal-root');\n\nfunction Modal({ children }) {\n  return ReactDOM.createPortal(\n    children,\n    modalRoot\n  );\n}",
    breakCode: "function Modal({ children }) {\n  return <div id=\"modal\">{children}</div>;\n}",
    commonErrors: ["Modal not rendered at root level", "Z-index issues"]
  },
  { day: 19, title: "Data Fetching Patterns", difficulty: "Advanced", duration: "80 min", category: "advanced",
    topics: ["Fetch in useEffect", "Loading states", "Error handling", "Cancellation"],
    starterCode: "useEffect(() => {\n  let cancelled = false;\n  fetch('/api/data')\n    .then(res => res.json())\n    .then(data => {\n      if (!cancelled) setData(data);\n    });\n  return () => { cancelled = true; };\n}, []);",
    breakCode: "useEffect(() => {\n  fetch('/api/data')\n    .then(res => res.json())\n    .then(data => setData(data));\n}, []);",
    commonErrors: ["Can't perform state update on unmounted component", "Memory leaks"]
  },
  { day: 20, title: "Code Splitting & Lazy Loading", difficulty: "Advanced", duration: "75 min", category: "advanced",
    topics: ["React.lazy", "Suspense", "Dynamic imports", "Bundle optimization"],
    starterCode: "const LazyComponent = React.lazy(() => import('./Component'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <LazyComponent />\n    </Suspense>\n  );\n}",
    breakCode: "const LazyComponent = React.lazy(() => import('./Component'));\n\nfunction App() {\n  return <LazyComponent />;\n}",
    commonErrors: ["Suspense boundary not provided", "Loading state missing"]
  },
  { day: 21, title: "Testing React Components", difficulty: "Advanced", duration: "85 min", category: "advanced",
    topics: ["React Testing Library", "User events", "Async testing", "Mocking"],
    starterCode: "import { render, screen, fireEvent } from '@testing-library/react';\n\ntest('button click', () => {\n  render(<Button />);\n  fireEvent.click(screen.getByText('Click'));\n  expect(screen.getByText('Clicked')).toBeInTheDocument();\n});",
    breakCode: "test('button click', () => {\n  render(<Button />);\n  const button = document.querySelector('button');\n  button.click();\n});",
    commonErrors: ["Query not found", "Async assertions failing"]
  },

  // Week 4: Production (Days 22-30)
  { day: 22, title: "State Management: Redux Toolkit", difficulty: "Advanced", duration: "90 min", category: "production",
    topics: ["Redux store", "Slices", "Actions", "Selectors"],
    starterCode: "import { createSlice, configureStore } from '@reduxjs/toolkit';\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: state => { state.value += 1; }\n  }\n});",
    breakCode: "const counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: state => { return { value: state.value + 1 }; }\n  }\n});",
    commonErrors: ["Immer usage confusion", "Selector performance"]
  },
  { day: 23, title: "React Query / TanStack Query", difficulty: "Advanced", duration: "85 min", category: "production",
    topics: ["useQuery", "useMutation", "Cache management", "Optimistic updates"],
    starterCode: "const { data, isLoading, error } = useQuery('todos', fetchTodos);\n\nconst mutation = useMutation(addTodo, {\n  onSuccess: () => {\n    queryClient.invalidateQueries('todos');\n  }\n});",
    breakCode: "const { data } = useQuery('todos', fetchTodos());\n// Function called immediately",
    commonErrors: ["Query key conflicts", "Stale data"]
  },
  { day: 24, title: "Form Validation with Formik", difficulty: "Advanced", duration: "80 min", category: "production",
    topics: ["Formik setup", "Validation schemas", "Error messages", "Form submission"],
    starterCode: "import { Formik, Form, Field } from 'formik';\nimport * as Yup from 'yup';\n\nconst schema = Yup.object({\n  email: Yup.string().email().required()\n});",
    breakCode: "const schema = Yup.object({\n  email: Yup.string().required()\n});\n// Missing email validation",
    commonErrors: ["Validation not triggering", "Field not connected"]
  },
  { day: 25, title: "TypeScript with React", difficulty: "Advanced", duration: "85 min", category: "production",
    topics: ["Component types", "Props interfaces", "Event types", "Generic components"],
    starterCode: "interface ButtonProps {\n  label: string;\n  onClick: () => void;\n}\n\nfunction Button({ label, onClick }: ButtonProps) {\n  return <button onClick={onClick}>{label}</button>;\n}",
    breakCode: "function Button({ label, onClick }) {\n  return <button onClick={onClick}>{label}</button>;\n}",
    commonErrors: ["Type errors", "Any types everywhere"]
  },
  { day: 26, title: "Server-Side Rendering Basics", difficulty: "Advanced", duration: "80 min", category: "production",
    topics: ["SSR concepts", "Next.js basics", "getServerSideProps", "Hydration"],
    starterCode: "export async function getServerSideProps() {\n  const data = await fetchData();\n  return { props: { data } };\n}\n\nexport default function Page({ data }) {\n  return <div>{data}</div>;\n}",
    breakCode: "export default function Page() {\n  const [data, setData] = useState(null);\n  useEffect(() => {\n    fetchData().then(setData);\n  }, []);\n  return <div>{data}</div>;\n}",
    commonErrors: ["Hydration mismatch", "Client-only code on server"]
  },
  { day: 27, title: "Authentication Flow", difficulty: "Advanced", duration: "85 min", category: "production",
    topics: ["Protected routes", "Auth context", "JWT handling", "Redirect logic"],
    starterCode: "function ProtectedRoute({ children }) {\n  const { user } = useAuth();\n  if (!user) return <Navigate to=\"/login\" />;\n  return children;\n}",
    breakCode: "function ProtectedRoute({ children }) {\n  const user = localStorage.getItem('user');\n  if (!user) return <Navigate to=\"/login\" />;\n  return children;\n}",
    commonErrors: ["Auth state not persisted", "Infinite redirects"]
  },
  { day: 28, title: "Accessibility (a11y)", difficulty: "Advanced", duration: "75 min", category: "production",
    topics: ["ARIA labels", "Keyboard navigation", "Screen readers", "Focus management"],
    starterCode: "function Modal() {\n  const closeButtonRef = useRef();\n  useEffect(() => {\n    closeButtonRef.current?.focus();\n  }, []);\n  return (\n    <div role=\"dialog\" aria-labelledby=\"title\">\n      <h2 id=\"title\">Modal Title</h2>\n    </div>\n  );\n}",
    breakCode: "function Modal() {\n  return (\n    <div>\n      <h2>Modal Title</h2>\n    </div>\n  );\n}",
    commonErrors: ["Missing ARIA labels", "Keyboard trap"]
  },
  { day: 29, title: "Performance Monitoring", difficulty: "Advanced", duration: "80 min", category: "production",
    topics: ["React DevTools Profiler", "Performance API", "Metrics", "Optimization"],
    starterCode: "import { Profiler } from 'react';\n\nfunction onRenderCallback(id, phase, actualDuration) {\n  console.log({ id, phase, actualDuration });\n}\n\n<Profiler id=\"App\" onRender={onRenderCallback}>\n  <App />\n</Profiler>",
    breakCode: "// No profiling\n<App />",
    commonErrors: ["Slow renders", "Unnecessary calculations"]
  },
  { day: 30, title: "Production Build & Deployment", difficulty: "Advanced", duration: "85 min", category: "production",
    topics: ["Build optimization", "Environment variables", "Deployment", "CI/CD"],
    starterCode: "// .env.production\nREACT_APP_API_URL=https://api.production.com\n\n// package.json\n\"scripts\": {\n  \"build\": \"react-scripts build\",\n  \"deploy\": \"npm run build && deploy.sh\"\n}",
    breakCode: "// Hardcoded production URLs\nconst API_URL = 'https://api.production.com';",
    commonErrors: ["Environment variables not set", "Build failures"]
  }
]

export const getReactLessonByDay = (day) => {
  return reactLessons.find(lesson => lesson.day === parseInt(day))
}

export const getReactLessonsByCategory = (category) => {
  return reactLessons.filter(lesson => lesson.category === category)
}
