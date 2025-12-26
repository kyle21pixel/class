export const lessonsData = {
  python: [
    {
      day: 1,
      title: "Python Basics & Setup",
      topic: "Introduction to Python",
      duration: "45 min",
      description: "Learn Python fundamentals, setup your environment, and write your first program.",
      content: `# Welcome to Python!

Python is a powerful, beginner-friendly programming language used in web development, data science, AI, and more.

## Why Python?
- Easy to read and write
- Versatile and powerful
- Huge community and libraries
- High demand in job market

## Your First Python Program

\`\`\`python
print("Hello, World!")
\`\`\`

## Variables and Data Types

\`\`\`python
# Numbers
age = 25
price = 19.99

# Strings
name = "Alice"
message = 'Hello, Python!'

# Booleans
is_student = True
has_completed = False

# Print variables
print(f"My name is {name} and I am {age} years old")
\`\`\`

## Basic Operations

\`\`\`python
# Arithmetic
result = 10 + 5
difference = 20 - 8
product = 4 * 7
quotient = 15 / 3

# String operations
greeting = "Hello" + " " + "World"
repeated = "Python! " * 3
\`\`\``,
      exercises: [
        {
          question: "Create a variable called 'favorite_language' and assign it the value 'Python'",
          starterCode: "# Write your code here\n",
          solution: "favorite_language = 'Python'\nprint(favorite_language)"
        }
      ],
      resources: [
        { title: "Python Official Tutorial", url: "https://docs.python.org/3/tutorial/" },
        { title: "Python for Beginners", url: "https://www.python.org/about/gettingstarted/" }
      ]
    },
    {
      day: 2,
      title: "Control Flow",
      topic: "If Statements & Loops",
      duration: "50 min",
      description: "Master conditional statements and loops to control program flow.",
      content: `# Control Flow in Python

## If Statements

\`\`\`python
age = 18

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")
\`\`\`

## For Loops

\`\`\`python
# Loop through a range
for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4

# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")
\`\`\`

## While Loops

\`\`\`python
count = 0
while count < 5:
    print(f"Count is {count}")
    count += 1
\`\`\`

## Loop Control

\`\`\`python
# Break - exit loop early
for i in range(10):
    if i == 5:
        break
    print(i)

# Continue - skip to next iteration
for i in range(5):
    if i == 2:
        continue
    print(i)
\`\`\``,
      exercises: [
        {
          question: "Write a program that prints numbers from 1 to 10, but only even numbers",
          starterCode: "# Write your code here\nfor i in range(1, 11):\n    ",
          solution: "for i in range(1, 11):\n    if i % 2 == 0:\n        print(i)"
        }
      ],
      resources: [
        { title: "Python Control Flow", url: "https://docs.python.org/3/tutorial/controlflow.html" }
      ]
    },
    {
      day: 3,
      title: "Functions",
      topic: "Creating Reusable Code",
      duration: "55 min",
      description: "Learn to write functions to organize and reuse your code effectively.",
      content: `# Functions in Python

## Basic Function

\`\`\`python
def greet():
    print("Hello!")

greet()  # Call the function
\`\`\`

## Functions with Parameters

\`\`\`python
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")
greet_person("Bob")
\`\`\`

## Return Values

\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
\`\`\`

## Default Parameters

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))  # Hello, Alice!
print(greet("Bob", "Hi"))  # Hi, Bob!
\`\`\`

## Multiple Return Values

\`\`\`python
def get_min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([1, 5, 3, 9, 2])
print(f"Min: {minimum}, Max: {maximum}")
\`\`\``,
      exercises: [
        {
          question: "Create a function that calculates the area of a rectangle",
          starterCode: "def calculate_area(length, width):\n    # Your code here\n    pass\n",
          solution: "def calculate_area(length, width):\n    return length * width\n\nprint(calculate_area(5, 3))"
        }
      ],
      resources: [
        { title: "Python Functions", url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions" }
      ]
    },
    {
      day: 4,
      title: "Lists & Tuples",
      topic: "Working with Collections",
      duration: "50 min",
      description: "Master Python's fundamental data structures for storing collections of items.",
      content: `# Lists and Tuples

## Lists (Mutable)

\`\`\`python
# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# Accessing elements
first_fruit = fruits[0]  # "apple"
last_fruit = fruits[-1]  # "cherry"

# List methods
fruits.append("orange")  # Add to end
fruits.insert(1, "mango")  # Insert at position
fruits.remove("banana")  # Remove by value
popped = fruits.pop()  # Remove and return last

# List operations
length = len(fruits)
sorted_fruits = sorted(fruits)
reversed_fruits = fruits[::-1]
\`\`\`

## List Comprehensions

\`\`\`python
# Traditional way
squares = []
for i in range(10):
    squares.append(i ** 2)

# List comprehension
squares = [i ** 2 for i in range(10)]

# With condition
even_squares = [i ** 2 for i in range(10) if i % 2 == 0]
\`\`\`

## Tuples (Immutable)

\`\`\`python
# Creating tuples
coordinates = (10, 20)
rgb = (255, 0, 128)

# Unpacking
x, y = coordinates
red, green, blue = rgb
\`\`\``,
      exercises: [
        {
          question: "Create a list of numbers 1-10 and print only the odd numbers",
          starterCode: "numbers = list(range(1, 11))\n# Your code here\n",
          solution: "numbers = list(range(1, 11))\nfor num in numbers:\n    if num % 2 != 0:\n        print(num)"
        }
      ],
      resources: [
        { title: "Python Lists", url: "https://docs.python.org/3/tutorial/datastructures.html" }
      ]
    },
    {
      day: 5,
      title: "Dictionaries",
      topic: "Key-Value Data Structures",
      duration: "50 min",
      description: "Learn to work with Python dictionaries for efficient data storage and retrieval.",
      content: `# Dictionaries in Python

## Creating Dictionaries

\`\`\`python
# Empty dictionary
empty_dict = {}

# Dictionary with data
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Using dict()
colors = dict(red="#FF0000", green="#00FF00", blue="#0000FF")
\`\`\`

## Accessing and Modifying

\`\`\`python
# Access values
name = person["name"]
age = person.get("age")  # Safer - returns None if key doesn't exist

# Modify values
person["age"] = 26
person["email"] = "alice@example.com"  # Add new key

# Remove items
del person["city"]
email = person.pop("email")
\`\`\`

## Dictionary Methods

\`\`\`python
# Get all keys
keys = person.keys()

# Get all values
values = person.values()

# Get key-value pairs
items = person.items()

# Iterate
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

## Nested Dictionaries

\`\`\`python
users = {
    "user1": {"name": "Alice", "age": 25},
    "user2": {"name": "Bob", "age": 30}
}

alice_age = users["user1"]["age"]
\`\`\``,
      exercises: [
        {
          question: "Create a dictionary representing a book with title, author, and year",
          starterCode: "# Create your dictionary here\nbook = \n",
          solution: 'book = {\n    "title": "Python Crash Course",\n    "author": "Eric Matthes",\n    "year": 2019\n}\nprint(book)'
        }
      ],
      resources: [
        { title: "Python Dictionaries", url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries" }
      ]
    },
    {
      day: 6,
      title: "String Manipulation",
      topic: "Working with Text",
      duration: "45 min",
      description: "Master string operations and formatting techniques in Python.",
      content: `# String Manipulation

## String Methods

\`\`\`python
text = "  Hello, World!  "

# Case conversion
upper = text.upper()  # "  HELLO, WORLD!  "
lower = text.lower()  # "  hello, world!  "
title = text.title()  # "  Hello, World!  "

# Whitespace
stripped = text.strip()  # "Hello, World!"
left_strip = text.lstrip()  # "Hello, World!  "

# Find and replace
index = text.find("World")  # Returns position
replaced = text.replace("World", "Python")

# Split and join
words = "apple,banana,cherry".split(",")
joined = " ".join(words)
\`\`\`

## String Formatting

\`\`\`python
name = "Alice"
age = 25

# f-strings (modern)
message = f"My name is {name} and I'm {age} years old"

# format() method
message = "My name is {} and I'm {} years old".format(name, age)

# Old style
message = "My name is %s and I'm %d years old" % (name, age)
\`\`\`

## String Slicing

\`\`\`python
text = "Python Programming"

first_six = text[:6]  # "Python"
last_four = text[-4:]  # "ming"
middle = text[7:14]  # "Program"
reversed_text = text[::-1]
\`\`\``,
      exercises: [
        {
          question: "Write a function that takes a string and returns it reversed and in uppercase",
          starterCode: "def transform_string(text):\n    # Your code here\n    pass\n",
          solution: "def transform_string(text):\n    return text[::-1].upper()\n\nprint(transform_string('hello'))"
        }
      ],
      resources: [
        { title: "Python String Methods", url: "https://docs.python.org/3/library/stdtypes.html#string-methods" }
      ]
    },
    {
      day: 7,
      title: "File Handling",
      topic: "Reading and Writing Files",
      duration: "50 min",
      description: "Learn to read from and write to files in Python.",
      content: `# File Handling in Python

## Reading Files

\`\`\`python
# Read entire file
with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# Read line by line
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

# Read all lines into a list
with open("data.txt", "r") as file:
    lines = file.readlines()
\`\`\`

## Writing Files

\`\`\`python
# Write (overwrites existing content)
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("Python is awesome!")

# Append (adds to existing content)
with open("output.txt", "a") as file:
    file.write("\\nAppending new line")
\`\`\`

## Working with CSV

\`\`\`python
import csv

# Reading CSV
with open("data.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Writing CSV
data = [["Name", "Age"], ["Alice", 25], ["Bob", 30]]
with open("output.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)
\`\`\`

## File Paths

\`\`\`python
import os

# Check if file exists
if os.path.exists("data.txt"):
    print("File exists")

# Get file size
size = os.path.getsize("data.txt")
\`\`\``,
      exercises: [
        {
          question: "Write a function that reads a file and counts the number of words",
          starterCode: "def count_words(filename):\n    # Your code here\n    pass\n",
          solution: "def count_words(filename):\n    with open(filename, 'r') as file:\n        content = file.read()\n        words = content.split()\n        return len(words)"
        }
      ],
      resources: [
        { title: "Python File I/O", url: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files" }
      ]
    },
    {
      day: 8,
      title: "Exception Handling",
      topic: "Error Management",
      duration: "45 min",
      description: "Learn to handle errors gracefully in your Python programs.",
      content: `# Exception Handling

## Try-Except Blocks

\`\`\`python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## Multiple Exceptions

\`\`\`python
try:
    # Some code that might raise exceptions
    pass
except (ValueError, TypeError) as e:
    print(f"Error occurred: {e}")
\`\`\`

## Finally Block

\`\`\`python
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found")
finally:
    # Always executes
    if 'file' in locals():
        file.close()
\`\`\`

## Raising Exceptions

\`\`\`python
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

try:
    result = divide(10, 0)
except ValueError as e:
    print(e)
\`\`\`

## Custom Exceptions

\`\`\`python
class InvalidAgeError(Exception):
    pass

def set_age(age):
    if age < 0:
        raise InvalidAgeError("Age cannot be negative")
    return age
\`\`\``,
      exercises: [
        {
          question: "Write a safe division function that handles division by zero",
          starterCode: "def safe_divide(a, b):\n    # Your code here\n    pass\n",
          solution: "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return 'Cannot divide by zero'\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))"
        }
      ],
      resources: [
        { title: "Python Exceptions", url: "https://docs.python.org/3/tutorial/errors.html" }
      ]
    },
    {
      day: 9,
      title: "Object-Oriented Programming",
      topic: "Classes and Objects",
      duration: "60 min",
      description: "Introduction to OOP concepts in Python with classes and objects.",
      content: `# Object-Oriented Programming

## Classes and Objects

\`\`\`python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says woof!"
    
    def get_info(self):
        return f"{self.name} is {self.age} years old"

# Creating objects
my_dog = Dog("Buddy", 3)
print(my_dog.bark())
print(my_dog.get_info())
\`\`\`

## Class Variables vs Instance Variables

\`\`\`python
class Dog:
    species = "Canis familiaris"  # Class variable
    
    def __init__(self, name):
        self.name = name  # Instance variable

dog1 = Dog("Buddy")
dog2 = Dog("Max")
print(Dog.species)  # Accessed via class
\`\`\`

## Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")
print(dog.speak())
print(cat.speak())
\`\`\`

## Special Methods

\`\`\`python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    
    def __str__(self):
        return f"{self.title} by {self.author}"
    
    def __len__(self):
        return len(self.title)

book = Book("Python Basics", "John Doe")
print(book)  # Calls __str__
print(len(book))  # Calls __len__
\`\`\``,
      exercises: [
        {
          question: "Create a Car class with brand, model, and a method to display info",
          starterCode: "class Car:\n    # Your code here\n    pass\n",
          solution: "class Car:\n    def __init__(self, brand, model):\n        self.brand = brand\n        self.model = model\n    \n    def display_info(self):\n        return f'{self.brand} {self.model}'\n\ncar = Car('Toyota', 'Camry')\nprint(car.display_info())"
        }
      ],
      resources: [
        { title: "Python Classes", url: "https://docs.python.org/3/tutorial/classes.html" }
      ]
    },
    {
      day: 10,
      title: "Modules and Packages",
      topic: "Code Organization",
      duration: "45 min",
      description: "Learn to organize code using modules and packages in Python.",
      content: `# Modules and Packages

## Importing Modules

\`\`\`python
# Import entire module
import math
print(math.sqrt(16))

# Import specific functions
from math import sqrt, pi
print(sqrt(16))
print(pi)

# Import with alias
import numpy as np
import pandas as pd

# Import all (not recommended)
from math import *
\`\`\`

## Creating Your Own Module

\`\`\`python
# mymodule.py
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

# main.py
import mymodule
print(mymodule.greet("Alice"))
\`\`\`

## Popular Built-in Modules

\`\`\`python
# datetime
from datetime import datetime
now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))

# random
import random
number = random.randint(1, 100)
choice = random.choice(['apple', 'banana', 'cherry'])

# os
import os
current_dir = os.getcwd()
files = os.listdir('.')

# json
import json
data = {"name": "Alice", "age": 25}
json_string = json.dumps(data)
parsed_data = json.loads(json_string)
\`\`\`

## Creating Packages

\`\`\`
mypackage/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py
\`\`\`

\`\`\`python
from mypackage import module1
from mypackage.subpackage import module3
\`\`\``,
      exercises: [
        {
          question: "Import the random module and generate a random number between 1 and 100",
          starterCode: "# Your code here\n",
          solution: "import random\nnumber = random.randint(1, 100)\nprint(f'Random number: {number}')"
        }
      ],
      resources: [
        { title: "Python Modules", url: "https://docs.python.org/3/tutorial/modules.html" }
      ]
    }
  ],
  react: [
    {
      day: 1,
      title: "React Basics & JSX",
      topic: "Introduction to React",
      duration: "50 min",
      description: "Learn React fundamentals, JSX syntax, and create your first component.",
      content: `# Welcome to React!

React is a JavaScript library for building user interfaces, developed by Facebook.

## Why React?
- Component-based architecture
- Virtual DOM for performance
- Reusable components
- Huge ecosystem and community

## JSX Basics

\`\`\`jsx
// JSX combines HTML and JavaScript
const element = <h1>Hello, React!</h1>;

// JavaScript expressions in JSX
const name = "Alice";
const greeting = <h1>Hello, {name}!</h1>;

// JSX attributes (use camelCase)
const image = <img src="photo.jpg" alt="Description" />;
const div = <div className="container">Content</div>;
\`\`\`

## Your First Component

\`\`\`jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// With props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Alice" />
\`\`\`

## Component Composition

\`\`\`jsx
function App() {
  return (
    <div>
      <Welcome />
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
\`\`\``,
      exercises: [
        {
          question: "Create a Card component that displays a title and description",
          starterCode: "function Card(props) {\n  // Your code here\n}\n",
          solution: "function Card(props) {\n  return (\n    <div className='card'>\n      <h2>{props.title}</h2>\n      <p>{props.description}</p>\n    </div>\n  );\n}"
        }
      ],
      resources: [
        { title: "React Documentation", url: "https://react.dev/" },
        { title: "React Tutorial", url: "https://react.dev/learn" }
      ]
    },
    {
      day: 2,
      title: "Props and Components",
      topic: "Component Communication",
      duration: "55 min",
      description: "Master props for passing data between components.",
      content: `# Props in React

Props (properties) are how components communicate with each other.

## Passing Props

\`\`\`jsx
function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

// Usage
<UserCard 
  name="Alice" 
  age={25} 
  email="alice@example.com" 
/>
\`\`\`

## Destructuring Props

\`\`\`jsx
function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}
\`\`\`

## Default Props

\`\`\`jsx
function Button({ text = "Click Me", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
\`\`\`

## Props Children

\`\`\`jsx
function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage
<Card title="My Card">
  <p>This is the content</p>
  <button>Click</button>
</Card>
\`\`\`

## Prop Types and Validation

\`\`\`jsx
import PropTypes from 'prop-types';

function UserCard({ name, age }) {
  return <div>{name} - {age}</div>;
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
\`\`\``,
      exercises: [
        {
          question: "Create a ProductCard component with name, price, and image props",
          starterCode: "function ProductCard({ name, price, image }) {\n  // Your code here\n}\n",
          solution: "function ProductCard({ name, price, image }) {\n  return (\n    <div className='product-card'>\n      <img src={image} alt={name} />\n      <h3>{name}</h3>\n      <p>${price}</p>\n    </div>\n  );\n}"
        }
      ],
      resources: [
        { title: "React Props", url: "https://react.dev/learn/passing-props-to-a-component" }
      ]
    },
    {
      day: 3,
      title: "State with useState",
      topic: "Managing Component State",
      duration: "60 min",
      description: "Learn to manage component state with the useState hook.",
      content: `# State Management with useState

State allows components to remember information and re-render when it changes.

## Basic useState

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Multiple State Variables

\`\`\`jsx
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  
  return (
    <form>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
    </form>
  );
}
\`\`\`

## State with Objects

\`\`\`jsx
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });
  
  const updateField = (field, value) => {
    setUser(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  return (
    <input 
      value={user.name}
      onChange={(e) => updateField('name', e.target.value)}
    />
  );
}
\`\`\`

## State with Arrays

\`\`\`jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
\`\`\``,
      exercises: [
        {
          question: "Create a toggle button that switches between 'ON' and 'OFF'",
          starterCode: "function ToggleButton() {\n  // Your code here\n}\n",
          solution: "function ToggleButton() {\n  const [isOn, setIsOn] = useState(false);\n  \n  return (\n    <button onClick={() => setIsOn(!isOn)}>\n      {isOn ? 'ON' : 'OFF'}\n    </button>\n  );\n}"
        }
      ],
      resources: [
        { title: "useState Hook", url: "https://react.dev/reference/react/useState" }
      ]
    },
    {
      day: 4,
      title: "Event Handling",
      topic: "User Interactions",
      duration: "50 min",
      description: "Learn to handle user events in React applications.",
      content: `# Event Handling in React

## Basic Events

\`\`\`jsx
function EventExample() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  const handleMouseEnter = () => {
    console.log('Mouse entered');
  };
  
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <div onMouseEnter={handleMouseEnter}>Hover Me</div>
    </div>
  );
}
\`\`\`

## Form Events

\`\`\`jsx
function Form() {
  const [value, setValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', value);
  };
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

## Event Object

\`\`\`jsx
function KeyboardEvents() {
  const handleKeyPress = (e) => {
    console.log('Key pressed:', e.key);
    console.log('Key code:', e.keyCode);
    console.log('Ctrl pressed:', e.ctrlKey);
  };
  
  return (
    <input 
      onKeyPress={handleKeyPress}
      onKeyDown={(e) => console.log('Key down')}
      onKeyUp={(e) => console.log('Key up')}
    />
  );
}
\`\`\`

## Passing Arguments

\`\`\`jsx
function ItemList() {
  const handleDelete = (id) => {
    console.log('Deleting item:', id);
  };
  
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
\`\`\``,
      exercises: [
        {
          question: "Create a component with an input that displays the character count",
          starterCode: "function CharacterCounter() {\n  // Your code here\n}\n",
          solution: "function CharacterCounter() {\n  const [text, setText] = useState('');\n  \n  return (\n    <div>\n      <input \n        value={text}\n        onChange={(e) => setText(e.target.value)}\n      />\n      <p>Characters: {text.length}</p>\n    </div>\n  );\n}"
        }
      ],
      resources: [
        { title: "Handling Events", url: "https://react.dev/learn/responding-to-events" }
      ]
    },
    {
      day: 5,
      title: "Conditional Rendering",
      topic: "Dynamic UI Display",
      duration: "45 min",
      description: "Master techniques for conditionally rendering components and elements.",
      content: `# Conditional Rendering

## If-Else with Variables

\`\`\`jsx
function Greeting({ isLoggedIn }) {
  let message;
  
  if (isLoggedIn) {
    message = <h1>Welcome back!</h1>;
  } else {
    message = <h1>Please sign in.</h1>;
  }
  
  return <div>{message}</div>;
}
\`\`\`

## Ternary Operator

\`\`\`jsx
function UserStatus({ isOnline }) {
  return (
    <div>
      {isOnline ? (
        <span className="online">Online</span>
      ) : (
        <span className="offline">Offline</span>
      )}
    </div>
  );
}
\`\`\`

## Logical AND (&&)

\`\`\`jsx
function Notifications({ messages }) {
  return (
    <div>
      <h1>Inbox</h1>
      {messages.length > 0 && (
        <p>You have {messages.length} unread messages.</p>
      )}
    </div>
  );
}
\`\`\`

## Switch Case Pattern

\`\`\`jsx
function StatusBadge({ status }) {
  switch(status) {
    case 'success':
      return <span className="badge-success">Success</span>;
    case 'warning':
      return <span className="badge-warning">Warning</span>;
    case 'error':
      return <span className="badge-error">Error</span>;
    default:
      return <span className="badge-default">Unknown</span>;
  }
}
\`\`\`

## Conditional Component Rendering

\`\`\`jsx
function App() {
  const [view, setView] = useState('home');
  
  const renderView = () => {
    if (view === 'home') return <Home />;
    if (view === 'profile') return <Profile />;
    if (view === 'settings') return <Settings />;
  };
  
  return (
    <div>
      <nav>
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('profile')}>Profile</button>
      </nav>
      {renderView()}
    </div>
  );
}
\`\`\``,
      exercises: [
        {
          question: "Create a LoginButton that shows 'Login' or 'Logout' based on state",
          starterCode: "function LoginButton() {\n  // Your code here\n}\n",
          solution: "function LoginButton() {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n  \n  return (\n    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>\n      {isLoggedIn ? 'Logout' : 'Login'}\n    </button>\n  );\n}"
        }
      ],
      resources: [
        { title: "Conditional Rendering", url: "https://react.dev/learn/conditional-rendering" }
      ]
    }
  ],
  javascript: [
    {
      day: 1,
      title: "JavaScript Fundamentals",
      topic: "Variables and Data Types",
      duration: "50 min",
      description: "Learn JavaScript basics including variables, data types, and operators.",
      content: `# JavaScript Fundamentals

JavaScript is the programming language of the web, enabling interactive websites.

## Variables

\`\`\`javascript
// Modern way (preferred)
let name = "Alice";
const PI = 3.14159;

// Old way (avoid)
var age = 25;

// Reassignment
let count = 0;
count = 1;  // OK

const MAX = 100;
// MAX = 200;  // Error! Cannot reassign const
\`\`\`

## Data Types

\`\`\`javascript
// Primitives
let str = "Hello";          // String
let num = 42;               // Number
let bool = true;            // Boolean
let nothing = null;         // Null
let notDefined = undefined; // Undefined
let sym = Symbol('id');     // Symbol
let bigInt = 9007199254740991n; // BigInt

// Objects
let person = { name: "Alice", age: 25 };
let numbers = [1, 2, 3, 4, 5];
let func = function() { return "Hello"; };
\`\`\`

## Operators

\`\`\`javascript
// Arithmetic
let sum = 5 + 3;        // 8
let diff = 10 - 4;      // 6
let product = 4 * 5;    // 20
let quotient = 20 / 4;  // 5
let remainder = 10 % 3; // 1
let power = 2 ** 3;     // 8

// Comparison
5 === 5    // true (strict equality)
5 == "5"   // true (loose equality)
5 !== 3    // true
10 > 5     // true

// Logical
true && false  // false
true || false  // true
!true          // false
\`\`\`

## String Operations

\`\`\`javascript
let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals
let greeting = \`Hello, \${firstName} \${lastName}!\`;

// String methods
let text = "JavaScript";
text.length           // 10
text.toUpperCase()    // "JAVASCRIPT"
text.toLowerCase()    // "javascript"
text.includes("Script") // true
text.slice(0, 4)      // "Java"
\`\`\``,
      exercises: [
        {
          question: "Create variables for your name and age, then create a greeting message",
          starterCode: "// Your code here\n",
          solution: "const name = 'Alice';\nconst age = 25;\nconst greeting = `My name is ${name} and I am ${age} years old`;\nconsole.log(greeting);"
        }
      ],
      resources: [
        { title: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        { title: "JavaScript.info", url: "https://javascript.info/" }
      ]
    },
    {
      day: 2,
      title: "Functions",
      topic: "Creating Reusable Code",
      duration: "55 min",
      description: "Master JavaScript functions including arrow functions and callbacks.",
      content: `# JavaScript Functions

## Function Declaration

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

const message = greet("Alice");
console.log(message);
\`\`\`

## Function Expression

\`\`\`javascript
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // 8
\`\`\`

## Arrow Functions

\`\`\`javascript
// Traditional
const multiply = function(a, b) {
  return a * b;
};

// Arrow function
const multiply = (a, b) => {
  return a * b;
};

// Concise arrow function
const multiply = (a, b) => a * b;

// Single parameter
const square = x => x * x;

// No parameters
const getPI = () => 3.14159;
\`\`\`

## Default Parameters

\`\`\`javascript
function greet(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

greet();              // "Hello, Guest!"
greet("Alice");       // "Hello, Alice!"
greet("Bob", "Hi");   // "Hi, Bob!"
\`\`\`

## Rest Parameters

\`\`\`javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3);        // 6
sum(1, 2, 3, 4, 5);  // 15
\`\`\`

## Callback Functions

\`\`\`javascript
function processArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8]
\`\`\`

## Higher-Order Functions

\`\`\`javascript
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
\`\`\``,
      exercises: [
        {
          question: "Create an arrow function that calculates the area of a rectangle",
          starterCode: "// Your code here\n",
          solution: "const calculateArea = (length, width) => length * width;\n\nconsole.log(calculateArea(5, 3)); // 15"
        }
      ],
      resources: [
        { title: "Functions - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" }
      ]
    },
    {
      day: 3,
      title: "Arrays and Array Methods",
      topic: "Working with Collections",
      duration: "60 min",
      description: "Master JavaScript arrays and powerful array methods.",
      content: `# Arrays in JavaScript

## Creating Arrays

\`\`\`javascript
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null, { name: "Alice" }];
const empty = [];
\`\`\`

## Accessing Elements

\`\`\`javascript
const fruits = ["apple", "banana", "cherry"];

fruits[0]        // "apple"
fruits[2]        // "cherry"
fruits.length    // 3
fruits.at(-1)    // "cherry" (last element)
\`\`\`

## Array Methods - Mutating

\`\`\`javascript
const fruits = ["apple", "banana"];

// Add elements
fruits.push("cherry");      // Add to end
fruits.unshift("mango");    // Add to beginning

// Remove elements
fruits.pop();               // Remove from end
fruits.shift();             // Remove from beginning

// Modify array
fruits.splice(1, 1, "orange"); // Remove 1 at index 1, add "orange"
\`\`\`

## Array Methods - Non-Mutating

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(x => x * 2);
// [2, 4, 6, 8, 10]

// filter - keep elements that pass test
const evens = numbers.filter(x => x % 2 === 0);
// [2, 4]

// find - get first element that passes test
const found = numbers.find(x => x > 3);
// 4

// reduce - reduce to single value
const sum = numbers.reduce((total, x) => total + x, 0);
// 15

// some - check if any element passes test
const hasEven = numbers.some(x => x % 2 === 0);
// true

// every - check if all elements pass test
const allPositive = numbers.every(x => x > 0);
// true
\`\`\`

## Chaining Methods

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(x => x % 2 === 0)    // [2, 4, 6]
  .map(x => x * 2)              // [4, 8, 12]
  .reduce((sum, x) => sum + x, 0); // 24
\`\`\`

## Spread Operator

\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];

// Add elements
const extended = [...arr1, 4, 5];
\`\`\``,
      exercises: [
        {
          question: "Filter numbers > 5, double them, then sum the result",
          starterCode: "const numbers = [3, 7, 2, 9, 5, 12, 1];\n// Your code here\n",
          solution: "const numbers = [3, 7, 2, 9, 5, 12, 1];\nconst result = numbers\n  .filter(x => x > 5)\n  .map(x => x * 2)\n  .reduce((sum, x) => sum + x, 0);\nconsole.log(result);"
        }
      ],
      resources: [
        { title: "Array Methods - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }
      ]
    },
    {
      day: 4,
      title: "Objects and Destructuring",
      topic: "Working with Objects",
      duration: "50 min",
      description: "Learn JavaScript objects, methods, and modern destructuring syntax.",
      content: `# Objects in JavaScript

## Creating Objects

\`\`\`javascript
// Object literal
const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

// Using new Object()
const user = new Object();
user.name = "Bob";
user.age = 30;
\`\`\`

## Accessing Properties

\`\`\`javascript
const person = { name: "Alice", age: 25 };

// Dot notation
console.log(person.name);  // "Alice"

// Bracket notation
console.log(person["age"]); // 25

// Dynamic property access
const prop = "name";
console.log(person[prop]);  // "Alice"
\`\`\`

## Object Methods

\`\`\`javascript
const person = {
  name: "Alice",
  age: 25,
  greet: function() {
    return \`Hello, I'm \${this.name}\`;
  },
  // Shorthand
  introduce() {
    return \`I'm \${this.name}, \${this.age} years old\`;
  }
};

person.greet();      // "Hello, I'm Alice"
person.introduce();  // "I'm Alice, 25 years old"
\`\`\`

## Object Destructuring

\`\`\`javascript
const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

// Extract properties
const { name, age } = person;
console.log(name); // "Alice"
console.log(age);  // 25

// Rename while destructuring
const { name: personName } = person;

// Default values
const { country = "USA" } = person;

// Nested destructuring
const user = {
  name: "Bob",
  address: {
    city: "Boston",
    zip: "02101"
  }
};

const { address: { city } } = user;
\`\`\`

## Spread Operator

\`\`\`javascript
const person = { name: "Alice", age: 25 };

// Copy object
const copy = { ...person };

// Merge objects
const address = { city: "New York", country: "USA" };
const fullProfile = { ...person, ...address };

// Override properties
const updated = { ...person, age: 26 };
\`\`\`

## Object Methods

\`\`\`javascript
const person = { name: "Alice", age: 25, city: "NY" };

// Get keys
Object.keys(person);     // ["name", "age", "city"]

// Get values
Object.values(person);   // ["Alice", 25, "NY"]

// Get entries
Object.entries(person);  // [["name", "Alice"], ["age", 25], ...]

// Check property exists
person.hasOwnProperty("name"); // true
"name" in person;              // true
\`\`\``,
      exercises: [
        {
          question: "Create a book object and use destructuring to extract title and author",
          starterCode: "// Your code here\n",
          solution: "const book = {\n  title: 'JavaScript Guide',\n  author: 'John Doe',\n  year: 2023\n};\n\nconst { title, author } = book;\nconsole.log(`${title} by ${author}`);"
        }
      ],
      resources: [
        { title: "Working with Objects - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects" }
      ]
    },
    {
      day: 5,
      title: "Async JavaScript - Promises",
      topic: "Asynchronous Programming",
      duration: "60 min",
      description: "Learn asynchronous JavaScript with Promises and async/await.",
      content: `# Asynchronous JavaScript

## Callbacks

\`\`\`javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // "Data loaded" after 1 second
});
\`\`\`

## Promises

\`\`\`javascript
// Creating a Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  }, 1000);
});

// Using a Promise
promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));
\`\`\`

## Promise Chaining

\`\`\`javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return processData(data);
  })
  .then(processed => {
    console.log(processed);
  })
  .catch(error => {
    console.error('Error:', error);
  });
\`\`\`

## Async/Await

\`\`\`javascript
// Async function returns a Promise
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Using async function
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Or with await
const data = await fetchData();
\`\`\`

## Promise.all

\`\`\`javascript
// Run multiple promises in parallel
const promise1 = fetch('https://api.example.com/users');
const promise2 = fetch('https://api.example.com/posts');
const promise3 = fetch('https://api.example.com/comments');

Promise.all([promise1, promise2, promise3])
  .then(responses => {
    return Promise.all(responses.map(r => r.json()));
  })
  .then(([users, posts, comments]) => {
    console.log(users, posts, comments);
  });

// With async/await
async function fetchAll() {
  const [users, posts, comments] = await Promise.all([
    fetch('/users').then(r => r.json()),
    fetch('/posts').then(r => r.json()),
    fetch('/comments').then(r => r.json())
  ]);
  
  return { users, posts, comments };
}
\`\`\`

## Promise.race

\`\`\`javascript
// Returns first promise to settle
const promise1 = new Promise(resolve => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise(resolve => setTimeout(resolve, 100, 'two'));

Promise.race([promise1, promise2])
  .then(value => console.log(value)); // "two"
\`\`\``,
      exercises: [
        {
          question: "Create an async function that simulates fetching user data after 1 second",
          starterCode: "// Your code here\n",
          solution: "async function fetchUser() {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve({ name: 'Alice', age: 25 });\n    }, 1000);\n  });\n}\n\nfetchUser().then(user => console.log(user));"
        }
      ],
      resources: [
        { title: "Promises - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" },
        { title: "Async/Await", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await" }
      ]
    }
  ]
};

export default lessonsData;
