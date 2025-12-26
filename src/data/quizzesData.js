export const quizzesData = {
  python: [
    {
      id: 1,
      title: "Python Basics Quiz",
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          question: "What is the correct way to create a variable in Python?",
          options: [
            "var x = 5",
            "x = 5",
            "int x = 5",
            "let x = 5"
          ],
          correctAnswer: 1,
          explanation: "In Python, you simply assign a value to a variable name without declaring its type."
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "Which of the following is a mutable data type?",
          options: ["Tuple", "String", "List", "Integer"],
          correctAnswer: 2,
          explanation: "Lists are mutable, meaning they can be modified after creation."
        },
        {
          id: 3,
          type: "fill-blank",
          question: "Complete: print(___('Hello World'))",
          answer: "len",
          explanation: "len() returns the length of a string or collection."
        },
        {
          id: 4,
          type: "multiple-choice",
          question: "What does the range(5) function return?",
          options: [
            "Numbers 1 to 5",
            "Numbers 0 to 4",
            "Numbers 0 to 5",
            "Numbers 1 to 4"
          ],
          correctAnswer: 1,
          explanation: "range(5) returns numbers from 0 up to but not including 5."
        },
        {
          id: 5,
          type: "code",
          question: "Write a function that returns the sum of two numbers",
          starterCode: "def add(a, b):\n    # Your code here\n    pass",
          testCases: [
            { input: [2, 3], expected: 5 },
            { input: [10, 5], expected: 15 }
          ],
          solution: "def add(a, b):\n    return a + b"
        }
      ]
    }
  ],
  react: [
    {
      id: 1,
      title: "React Fundamentals Quiz",
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          question: "What does JSX stand for?",
          options: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JavaScript Extra",
            "Java XML"
          ],
          correctAnswer: 0,
          explanation: "JSX stands for JavaScript XML, allowing you to write HTML-like syntax in JavaScript."
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "Which hook is used to manage state in functional components?",
          options: [
            "useEffect",
            "useState",
            "useContext",
            "useReducer"
          ],
          correctAnswer: 1,
          explanation: "useState is the primary hook for managing state in functional components."
        },
        {
          id: 3,
          type: "fill-blank",
          question: "Props are ___ (mutable/immutable) in React",
          answer: "immutable",
          explanation: "Props are read-only and cannot be modified by the receiving component."
        },
        {
          id: 4,
          type: "multiple-choice",
          question: "What is the virtual DOM?",
          options: [
            "A copy of the real DOM kept in memory",
            "A new browser API",
            "A CSS framework",
            "A database"
          ],
          correctAnswer: 0,
          explanation: "The virtual DOM is a lightweight copy of the real DOM that React uses for efficient updates."
        },
        {
          id: 5,
          type: "code",
          question: "Create a component that displays 'Hello, World!'",
          starterCode: "function Hello() {\n  // Your code here\n}",
          solution: "function Hello() {\n  return <h1>Hello, World!</h1>;\n}"
        }
      ]
    }
  ],
  javascript: [
    {
      id: 1,
      title: "JavaScript Essentials Quiz",
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          question: "What is the difference between == and ===?",
          options: [
            "No difference",
            "=== checks type and value, == only checks value",
            "== checks type and value, === only checks value",
            "They work the same in all cases"
          ],
          correctAnswer: 1,
          explanation: "=== is strict equality checking both type and value, while == converts types."
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "Which method adds an element to the end of an array?",
          options: ["shift()", "unshift()", "push()", "pop()"],
          correctAnswer: 2,
          explanation: "push() adds elements to the end of an array."
        },
        {
          id: 3,
          type: "fill-blank",
          question: "An arrow function is defined using the ___ operator",
          answer: "=>",
          explanation: "Arrow functions use the => syntax."
        },
        {
          id: 4,
          type: "multiple-choice",
          question: "What does 'async' keyword do?",
          options: [
            "Makes function run faster",
            "Makes function return a Promise",
            "Makes function synchronous",
            "Prevents function from running"
          ],
          correctAnswer: 1,
          explanation: "The async keyword makes a function return a Promise automatically."
        },
        {
          id: 5,
          type: "code",
          question: "Write an arrow function that doubles a number",
          starterCode: "const double = ",
          solution: "const double = (x) => x * 2;"
        }
      ]
    }
  ]
};

export default quizzesData;
