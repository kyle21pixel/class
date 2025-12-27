// 30-day JavaScript curriculum
export const javascriptLessons = [
  // Week 1: Fundamentals (Days 1-7)
  { day: 1, title: "JavaScript Basics & Variables", difficulty: "Beginner", duration: "45 min", category: "fundamentals",
    topics: ["var, let, const", "Data types", "Type coercion", "Console.log"],
    starterCode: "let name = 'Developer';\nconst age = 25;\nconsole.log(`${name} is ${age} years old`);\n\n// Task: Declare variables and log output",
    breakCode: "const name = 'Developer';\nname = 'John';\nconsole.log(name);",
    commonErrors: ["TypeError: Assignment to constant variable", "ReferenceError: variable is not defined"]
  },
  { day: 2, title: "Functions & Arrow Functions", difficulty: "Beginner", duration: "50 min", category: "fundamentals",
    topics: ["Function declarations", "Function expressions", "Arrow functions", "Return values"],
    starterCode: "function greet(name) {\n  return `Hello, ${name}`;\n}\n\nconst greetArrow = (name) => `Hello, ${name}`;",
    breakCode: "const greet = (name) => {\n  `Hello, ${name}`\n};",
    commonErrors: ["TypeError: greet is not a function", "Missing return statement"]
  },
  { day: 3, title: "Arrays & Array Methods", difficulty: "Beginner", duration: "55 min", category: "fundamentals",
    topics: ["Array creation", "Map, filter, reduce", "forEach", "Array destructuring"],
    starterCode: "const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconst evens = numbers.filter(n => n % 2 === 0);",
    breakCode: "const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => { n * 2 });",
    commonErrors: ["TypeError: undefined is not a function", "Missing return in arrow function"]
  },
  { day: 4, title: "Objects & Object Methods", difficulty: "Beginner", duration: "60 min", category: "fundamentals",
    topics: ["Object literals", "Object methods", "This keyword", "Object destructuring"],
    starterCode: "const person = {\n  name: 'Alice',\n  greet() {\n    return `Hi, I'm ${this.name}`;\n  }\n};",
    breakCode: "const person = {\n  name: 'Alice',\n  greet: () => {\n    return `Hi, I'm ${this.name}`;\n  }\n};",
    commonErrors: ["TypeError: Cannot read property of undefined", "Arrow function 'this' binding issue"]
  },
  { day: 5, title: "Conditional Logic & Operators", difficulty: "Beginner", duration: "50 min", category: "fundamentals",
    topics: ["If/else", "Ternary operator", "Switch statements", "Logical operators"],
    starterCode: "const age = 20;\nconst status = age >= 18 ? 'adult' : 'minor';\n\nif (age >= 21) {\n  console.log('Can drink');\n}",
    breakCode: "const age = 20;\nif (age = 18) {\n  console.log('Adult');\n}",
    commonErrors: ["Assignment in condition instead of comparison", "Type coercion issues"]
  },
  { day: 6, title: "Loops & Iteration", difficulty: "Beginner", duration: "55 min", category: "fundamentals",
    topics: ["For loops", "While loops", "For...of", "For...in"],
    starterCode: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\nconst arr = [1, 2, 3];\nfor (const num of arr) {\n  console.log(num);\n}",
    breakCode: "const arr = [1, 2, 3];\nfor (const num in arr) {\n  console.log(num);\n}",
    commonErrors: ["For...in returns indices not values", "Infinite loops"]
  },
  { day: 7, title: "Template Literals & Strings", difficulty: "Beginner", duration: "45 min", category: "fundamentals",
    topics: ["String methods", "Template literals", "String interpolation", "Multi-line strings"],
    starterCode: "const name = 'Alice';\nconst message = `Hello, ${name}!\nWelcome to JavaScript.`;\nconsole.log(message.toUpperCase());",
    breakCode: "const name = 'Alice';\nconst message = 'Hello, ' + name + '!\nWelcome.';",
    commonErrors: ["String concatenation vs template literals", "Escape character issues"]
  },

  // Week 2: Core Concepts (Days 8-14)
  { day: 8, title: "DOM Manipulation Basics", difficulty: "Intermediate", duration: "70 min", category: "core",
    topics: ["querySelector", "getElementById", "Creating elements", "Modifying content"],
    starterCode: "const element = document.querySelector('.btn');\nelement.textContent = 'Click me';\nelement.addEventListener('click', () => {\n  console.log('Clicked!');\n});",
    breakCode: "const element = document.querySelector('.btn');\nelement.innerHTML = userInput;",
    commonErrors: ["XSS vulnerability", "querySelector returns null", "Event listener not working"]
  },
  { day: 9, title: "Events & Event Handling", difficulty: "Intermediate", duration: "65 min", category: "core",
    topics: ["addEventListener", "Event object", "Event propagation", "preventDefault"],
    starterCode: "button.addEventListener('click', (e) => {\n  e.preventDefault();\n  console.log(e.target);\n});",
    breakCode: "button.onclick = handleClick;\nbutton.onclick = anotherHandler;",
    commonErrors: ["Event handlers overwriting each other", "Event bubbling issues"]
  },
  { day: 10, title: "Callbacks & Higher-Order Functions", difficulty: "Intermediate", duration: "70 min", category: "core",
    topics: ["Callback functions", "Higher-order functions", "Function composition", "Callback patterns"],
    starterCode: "function fetchData(callback) {\n  setTimeout(() => {\n    callback('Data loaded');\n  }, 1000);\n}\n\nfetchData((data) => console.log(data));",
    breakCode: "function fetchData(callback) {\n  setTimeout(() => {\n    callback('Data loaded');\n  }, 1000);\n}\n\nfetchData();",
    commonErrors: ["Callback is not a function", "Callback hell"]
  },
  { day: 11, title: "Promises & Promise Chaining", difficulty: "Intermediate", duration: "75 min", category: "core",
    topics: ["Promise creation", "Then/catch", "Promise chaining", "Promise.all"],
    starterCode: "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Success'), 1000);\n});\n\npromise.then(data => console.log(data));",
    breakCode: "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Success'), 1000);\n});\n\nconsole.log(promise);",
    commonErrors: ["Unhandled promise rejection", "Promise [object Promise]"]
  },
  { day: 12, title: "Async/Await", difficulty: "Intermediate", duration: "75 min", category: "core",
    topics: ["Async functions", "Await keyword", "Error handling", "Parallel execution"],
    starterCode: "async function fetchUser() {\n  const response = await fetch('/api/user');\n  const data = await response.json();\n  return data;\n}",
    breakCode: "async function fetchUser() {\n  const response = fetch('/api/user');\n  const data = response.json();\n  return data;\n}",
    commonErrors: ["Missing await keyword", "Unhandled promise rejection"]
  },
  { day: 13, title: "ES6+ Features", difficulty: "Intermediate", duration: "70 min", category: "core",
    topics: ["Destructuring", "Spread/rest operators", "Default parameters", "Optional chaining"],
    starterCode: "const { name, age } = user;\nconst newArr = [...oldArr, newItem];\nconst value = obj?.property?.nested;",
    breakCode: "const { name, age } = user;\nconst newArr = oldArr.push(newItem);",
    commonErrors: ["Cannot destructure undefined", "Mutation instead of immutable operations"]
  },
  { day: 14, title: "Modules & Imports", difficulty: "Intermediate", duration: "65 min", category: "core",
    topics: ["ES6 modules", "Import/export", "Default exports", "Named exports"],
    starterCode: "// utils.js\nexport const add = (a, b) => a + b;\nexport default class Calculator {}\n\n// main.js\nimport Calculator, { add } from './utils.js';",
    breakCode: "// utils.js\nexport default const add = (a, b) => a + b;\n\n// main.js\nimport add from './utils.js';",
    commonErrors: ["SyntaxError: Unexpected token export", "Module not found"]
  },

  // Week 3: Advanced (Days 15-21)
  { day: 15, title: "Closures & Scope", difficulty: "Advanced", duration: "80 min", category: "advanced",
    topics: ["Lexical scope", "Closure patterns", "Private variables", "IIFE"],
    starterCode: "function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count\n  };\n}",
    breakCode: "function createCounter() {\n  var count = 0;\n  return {\n    increment: () => ++count,\n  };\n}\nconst counter = createCounter();\nconsole.log(counter.count);",
    commonErrors: ["Accessing private variables", "Closure memory leaks"]
  },
  { day: 16, title: "Prototypes & Inheritance", difficulty: "Advanced", duration: "75 min", category: "advanced",
    topics: ["Prototype chain", "Constructor functions", "Object.create", "Class syntax"],
    starterCode: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log(`${this.name} makes a sound`);\n  }\n}",
    breakCode: "function Animal(name) {\n  name = name;\n}\nAnimal.prototype.speak = function() {\n  console.log(this.name);\n};",
    commonErrors: ["TypeError: Cannot read property of undefined", "Missing 'this' keyword"]
  },
  { day: 17, title: "Error Handling & Debugging", difficulty: "Advanced", duration: "70 min", category: "advanced",
    topics: ["Try/catch", "Custom errors", "Error types", "Debugging techniques"],
    starterCode: "try {\n  throw new Error('Custom error');\n} catch (error) {\n  console.error(error.message);\n} finally {\n  console.log('Cleanup');\n}",
    breakCode: "try {\n  riskyOperation();\n} catch (error) {\n  console.log('Error occurred');\n}",
    commonErrors: ["Silent error swallowing", "Not rethrowing errors"]
  },
  { day: 18, title: "Fetch API & AJAX", difficulty: "Advanced", duration: "75 min", category: "advanced",
    topics: ["Fetch API", "Request/Response", "Headers", "Error handling"],
    starterCode: "async function fetchData() {\n  try {\n    const response = await fetch('/api/data');\n    if (!response.ok) throw new Error('Failed');\n    return await response.json();\n  } catch (error) {\n    console.error(error);\n  }\n}",
    breakCode: "async function fetchData() {\n  const response = await fetch('/api/data');\n  return await response.json();\n}",
    commonErrors: ["Not checking response.ok", "CORS errors", "JSON parse errors"]
  },
  { day: 19, title: "Local Storage & Session Storage", difficulty: "Advanced", duration: "65 min", category: "advanced",
    topics: ["localStorage API", "sessionStorage", "JSON serialization", "Storage events"],
    starterCode: "const user = { name: 'Alice', age: 25 };\nlocalStorage.setItem('user', JSON.stringify(user));\nconst retrieved = JSON.parse(localStorage.getItem('user'));",
    breakCode: "const user = { name: 'Alice', age: 25 };\nlocalStorage.setItem('user', user);\nconst retrieved = localStorage.getItem('user');",
    commonErrors: ["[object Object] in localStorage", "QuotaExceededError"]
  },
  { day: 20, title: "Regex & Pattern Matching", difficulty: "Advanced", duration: "70 min", category: "advanced",
    topics: ["Regular expressions", "Test & match methods", "Capture groups", "Regex flags"],
    starterCode: "const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconst isValid = emailRegex.test('user@example.com');",
    breakCode: "const emailRegex = '/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/';\nconst isValid = emailRegex.test('user@example.com');",
    commonErrors: ["String instead of RegExp object", "Incorrect regex patterns"]
  },
  { day: 21, title: "Performance Optimization", difficulty: "Advanced", duration: "80 min", category: "advanced",
    topics: ["Debouncing", "Throttling", "Memoization", "Lazy loading"],
    starterCode: "function debounce(func, delay) {\n  let timeoutId;\n  return (...args) => {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => func(...args), delay);\n  };\n}",
    breakCode: "function debounce(func, delay) {\n  return (...args) => {\n    setTimeout(() => func(...args), delay);\n  };\n}",
    commonErrors: ["Multiple function calls", "Memory leaks from uncleaned timeouts"]
  },

  // Week 4: Production Patterns (Days 22-30)
  { day: 22, title: "Design Patterns: Module Pattern", difficulty: "Advanced", duration: "75 min", category: "production",
    topics: ["Module pattern", "Revealing module", "Singleton", "Factory pattern"],
    starterCode: "const Module = (function() {\n  const privateVar = 'secret';\n  function privateMethod() {}\n  return {\n    publicMethod() {\n      return privateVar;\n    }\n  };\n})();",
    breakCode: "const Module = {\n  privateVar: 'secret',\n  publicMethod() {\n    return this.privateVar;\n  }\n};",
    commonErrors: ["Exposed private variables", "Memory inefficiency"]
  },
  { day: 23, title: "Testing with Jest", difficulty: "Advanced", duration: "80 min", category: "production",
    topics: ["Unit testing", "Mocking", "Assertions", "Test coverage"],
    starterCode: "test('adds 1 + 2 to equal 3', () => {\n  expect(add(1, 2)).toBe(3);\n});\n\ntest('async data', async () => {\n  const data = await fetchData();\n  expect(data).toBe('peanut butter');\n});",
    breakCode: "test('async data', () => {\n  const data = fetchData();\n  expect(data).toBe('peanut butter');\n});",
    commonErrors: ["Test timeout", "Async assertions failing"]
  },
  { day: 24, title: "Build Tools: Webpack Basics", difficulty: "Advanced", duration: "75 min", category: "production",
    topics: ["Webpack config", "Loaders", "Plugins", "Code splitting"],
    starterCode: "// webpack.config.js\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  }\n};",
    breakCode: "module.exports = {\n  entry: './src/index.js',\n  output: 'dist/bundle.js'\n};",
    commonErrors: ["Configuration validation errors", "Module not found"]
  },
  { day: 25, title: "NPM & Package Management", difficulty: "Advanced", duration: "65 min", category: "production",
    topics: ["Package.json", "Dependencies", "Scripts", "Semantic versioning"],
    starterCode: "// package.json\n{\n  \"name\": \"my-app\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"start\": \"node index.js\",\n    \"test\": \"jest\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.18.0\"\n  }\n}",
    breakCode: "// Common mistake: not saving dependencies\n// npm install package\n// Should be: npm install --save package",
    commonErrors: ["Module not found after install", "Version conflicts"]
  },
  { day: 26, title: "REST API Development", difficulty: "Advanced", duration: "85 min", category: "production",
    topics: ["Express.js", "Routes", "Middleware", "Error handling"],
    starterCode: "const express = require('express');\nconst app = express();\n\napp.get('/api/users', (req, res) => {\n  res.json({ users: [] });\n});\n\napp.listen(3000);",
    breakCode: "const express = require('express');\nconst app = express();\n\napp.get('/api/users', (req, res) => {\n  res.send({ users: [] });\n});\n\napp.listen(3000);",
    commonErrors: ["TypeError: res.json is not a function", "Port already in use"]
  },
  { day: 27, title: "Authentication & JWT", difficulty: "Advanced", duration: "85 min", category: "production",
    topics: ["JWT tokens", "Authentication middleware", "Password hashing", "Session management"],
    starterCode: "const jwt = require('jsonwebtoken');\n\nconst token = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });\nconst decoded = jwt.verify(token, 'secret');",
    breakCode: "const jwt = require('jsonwebtoken');\n\nconst token = jwt.sign({ userId: 123 }, 'secret');\nconst decoded = jwt.decode(token);",
    commonErrors: ["JsonWebTokenError: invalid signature", "Token expiration"]
  },
  { day: 28, title: "WebSockets & Real-time", difficulty: "Advanced", duration: "80 min", category: "production",
    topics: ["Socket.io", "Real-time communication", "Event emitters", "Broadcasting"],
    starterCode: "const io = require('socket.io')(3000);\n\nio.on('connection', (socket) => {\n  socket.on('message', (data) => {\n    io.emit('message', data);\n  });\n});",
    breakCode: "const io = require('socket.io')(3000);\n\nio.on('connection', (socket) => {\n  socket.on('message', (data) => {\n    socket.emit('message', data);\n  });\n});",
    commonErrors: ["Message only sent to sender", "Connection drops"]
  },
  { day: 29, title: "Security Best Practices", difficulty: "Advanced", duration: "75 min", category: "production",
    topics: ["XSS prevention", "CSRF tokens", "Input sanitization", "Security headers"],
    starterCode: "// XSS Prevention\nconst sanitized = DOMPurify.sanitize(userInput);\nelement.textContent = sanitized; // Not innerHTML\n\n// CSRF\napp.use(csrf());\napp.post('/transfer', csrfProtection, handler);",
    breakCode: "// Dangerous\nelement.innerHTML = userInput;\n\n// No CSRF protection\napp.post('/transfer', handler);",
    commonErrors: ["XSS vulnerabilities", "CSRF attacks", "SQL injection"]
  },
  { day: 30, title: "Production Deployment", difficulty: "Advanced", duration: "85 min", category: "production",
    topics: ["Environment variables", "PM2", "Nginx", "CI/CD basics"],
    starterCode: "// .env\nNODE_ENV=production\nPORT=3000\nDB_URL=mongodb://...\n\n// app.js\nrequire('dotenv').config();\nconst port = process.env.PORT || 3000;",
    breakCode: "// Hardcoded values\nconst port = 3000;\nconst dbUrl = 'mongodb://localhost/mydb';",
    commonErrors: ["Exposed secrets", "Port conflicts", "Environment mismatches"]
  }
]

export const getJavaScriptLessonByDay = (day) => {
  return javascriptLessons.find(lesson => lesson.day === parseInt(day))
}

export const getJavaScriptLessonsByCategory = (category) => {
  return javascriptLessons.filter(lesson => lesson.category === category)
}
