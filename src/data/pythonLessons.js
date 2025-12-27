// 30-day Python curriculum
export const pythonLessons = [
  // Week 1: Fundamentals (Days 1-7)
  { day: 1, title: "Python Syntax & Variables", difficulty: "Beginner", duration: "45 min", category: "fundamentals", 
    topics: ["Print statements", "Variables & data types", "Basic operators", "String formatting"],
    starterCode: "# Welcome to Python!\nname = \"Developer\"\nprint(f\"Hello, {name}!\")\n\n# Your task: Create variables and perform operations",
    breakCode: "name = Developer\nprint(f\"Hello, {name}!)\"",
    commonErrors: ["NameError: name is not defined", "SyntaxError: EOL while scanning string literal"]
  },
  { day: 2, title: "Control Flow: If/Else", difficulty: "Beginner", duration: "50 min", category: "fundamentals",
    topics: ["Conditional statements", "Comparison operators", "Logical operators", "Nested conditions"],
    starterCode: "age = 25\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Minor\")",
    breakCode: "if age >= 18\n    print(\"Adult\")\nelse\n    print(\"Minor\")",
    commonErrors: ["SyntaxError: invalid syntax", "IndentationError: expected an indented block"]
  },
  { day: 3, title: "Loops: For & While", difficulty: "Beginner", duration: "55 min", category: "fundamentals",
    topics: ["For loops", "While loops", "Range function", "Break & continue"],
    starterCode: "for i in range(5):\n    print(i)\n\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1",
    breakCode: "for i in range(5)\n    print(i)",
    commonErrors: ["SyntaxError: invalid syntax", "IndentationError", "Infinite loop"]
  },
  { day: 4, title: "Lists & List Operations", difficulty: "Beginner", duration: "60 min", category: "fundamentals",
    topics: ["Creating lists", "Indexing & slicing", "List methods", "List comprehensions"],
    starterCode: "numbers = [1, 2, 3, 4, 5]\nprint(numbers[0])\nnumbers.append(6)\nsquared = [x**2 for x in numbers]",
    breakCode: "numbers = [1, 2, 3, 4, 5]\nprint(numbers[5])",
    commonErrors: ["IndexError: list index out of range", "TypeError: list indices must be integers"]
  },
  { day: 5, title: "Dictionaries & Sets", difficulty: "Beginner", duration: "60 min", category: "fundamentals",
    topics: ["Dictionary creation", "Accessing values", "Dictionary methods", "Sets & set operations"],
    starterCode: "person = {\"name\": \"Alice\", \"age\": 30}\nprint(person[\"name\"])\nperson[\"city\"] = \"NYC\"",
    breakCode: "person = {\"name\": \"Alice\", \"age\": 30}\nprint(person[\"email\"])",
    commonErrors: ["KeyError: 'email'", "TypeError: unhashable type"]
  },
  { day: 6, title: "Functions & Parameters", difficulty: "Beginner", duration: "65 min", category: "fundamentals",
    topics: ["Defining functions", "Parameters & arguments", "Return values", "Default parameters"],
    starterCode: "def greet(name, greeting=\"Hello\"):\n    return f\"{greeting}, {name}!\"\n\nprint(greet(\"Alice\"))",
    breakCode: "def greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet())",
    commonErrors: ["TypeError: greet() missing 1 required positional argument", "NameError: function not defined"]
  },
  { day: 7, title: "String Manipulation", difficulty: "Beginner", duration: "50 min", category: "fundamentals",
    topics: ["String methods", "String formatting", "String slicing", "Regular expressions intro"],
    starterCode: "text = \"Python Programming\"\nprint(text.lower())\nprint(text.split())\nprint(text[0:6])",
    breakCode: "text = \"Python Programming\"\nprint(text.split(\"\"))",
    commonErrors: ["ValueError: empty separator", "AttributeError: object has no attribute"]
  },

  // Week 2: Core Concepts (Days 8-14)
  { day: 8, title: "File Handling", difficulty: "Intermediate", duration: "70 min", category: "core",
    topics: ["Reading files", "Writing files", "File modes", "Context managers"],
    starterCode: "with open('data.txt', 'r') as file:\n    content = file.read()\n    print(content)",
    breakCode: "file = open('data.txt', 'r')\ncontent = file.read()\nprint(content)",
    commonErrors: ["FileNotFoundError", "IOError: file not closed properly"]
  },
  { day: 9, title: "Exception Handling", difficulty: "Intermediate", duration: "65 min", category: "core",
    topics: ["Try/except blocks", "Multiple exceptions", "Finally clause", "Raising exceptions"],
    starterCode: "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")",
    breakCode: "try:\n    result = 10 / 0\nexcept:\n    pass",
    commonErrors: ["Bare except catches all exceptions", "Exception not handled properly"]
  },
  { day: 10, title: "Object-Oriented Programming: Classes", difficulty: "Intermediate", duration: "75 min", category: "core",
    topics: ["Class definition", "Constructors", "Instance methods", "Class vs instance attributes"],
    starterCode: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age",
    breakCode: "class Person:\n    def __init__(name, age):\n        name = name\n        age = age",
    commonErrors: ["TypeError: __init__() missing 1 required positional argument: 'self'"]
  },
  { day: 11, title: "OOP: Inheritance & Polymorphism", difficulty: "Intermediate", duration: "75 min", category: "core",
    topics: ["Inheritance", "Method overriding", "Super() function", "Polymorphism"],
    starterCode: "class Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof!\"",
    breakCode: "class Dog(Animal):\n    def speak():\n        return \"Woof!\"",
    commonErrors: ["TypeError: speak() takes 0 positional arguments but 1 was given"]
  },
  { day: 12, title: "Modules & Packages", difficulty: "Intermediate", duration: "60 min", category: "core",
    topics: ["Importing modules", "Creating modules", "Package structure", "Standard library"],
    starterCode: "import math\nfrom datetime import datetime\n\nprint(math.pi)\nprint(datetime.now())",
    breakCode: "import math\nprint(Math.pi)",
    commonErrors: ["ModuleNotFoundError", "AttributeError: module has no attribute"]
  },
  { day: 13, title: "List Comprehensions & Generators", difficulty: "Intermediate", duration: "65 min", category: "core",
    topics: ["List comprehensions", "Generator expressions", "Generator functions", "Yield keyword"],
    starterCode: "squares = [x**2 for x in range(10)]\ngen = (x**2 for x in range(10))\n\ndef count_up():\n    count = 0\n    while True:\n        yield count\n        count += 1",
    breakCode: "squares = [x**2 for x in range(10)]\nprint(squares[10])",
    commonErrors: ["IndexError: list index out of range", "StopIteration"]
  },
  { day: 14, title: "Lambda & Higher-Order Functions", difficulty: "Intermediate", duration: "70 min", category: "core",
    topics: ["Lambda functions", "Map, filter, reduce", "Closures", "Decorators intro"],
    starterCode: "add = lambda x, y: x + y\nnumbers = [1, 2, 3, 4]\nsquared = list(map(lambda x: x**2, numbers))",
    breakCode: "add = lambda x, y: x + y\nresult = add(5)",
    commonErrors: ["TypeError: <lambda>() missing 1 required positional argument"]
  },

  // Week 3: Advanced (Days 15-21)
  { day: 15, title: "Decorators", difficulty: "Advanced", duration: "80 min", category: "advanced",
    topics: ["Function decorators", "Class decorators", "Decorator with arguments", "Built-in decorators"],
    starterCode: "def timing_decorator(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f\"Took {time.time() - start}s\")\n        return result\n    return wrapper",
    breakCode: "def timing_decorator(func):\n    def wrapper(*args, **kwargs):\n        result = func(args, kwargs)\n        return result\n    return wrapper",
    commonErrors: ["TypeError: positional argument follows keyword argument"]
  },
  { day: 16, title: "Context Managers", difficulty: "Advanced", duration: "70 min", category: "advanced",
    topics: ["With statement", "Creating context managers", "__enter__ and __exit__", "contextlib module"],
    starterCode: "class FileManager:\n    def __init__(self, filename):\n        self.filename = filename\n    def __enter__(self):\n        self.file = open(self.filename, 'r')\n        return self.file\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.file.close()",
    breakCode: "class FileManager:\n    def __init__(self, filename):\n        self.filename = filename\n    def __enter__(self):\n        self.file = open(self.filename, 'r')\n        return self.file",
    commonErrors: ["AttributeError: __exit__ method required"]
  },
  { day: 17, title: "Iterators & Iterables", difficulty: "Advanced", duration: "75 min", category: "advanced",
    topics: ["Iterator protocol", "__iter__ and __next__", "Custom iterators", "iter() and next()"],
    starterCode: "class Counter:\n    def __init__(self, max):\n        self.max = max\n        self.current = 0\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.current < self.max:\n            self.current += 1\n            return self.current\n        raise StopIteration",
    breakCode: "class Counter:\n    def __init__(self, max):\n        self.max = max\n        self.current = 0\n    def __iter__(self):\n        return self\n    def __next__(self):\n        self.current += 1\n        return self.current",
    commonErrors: ["Infinite iteration", "StopIteration not raised"]
  },
  { day: 18, title: "Regular Expressions", difficulty: "Advanced", duration: "80 min", category: "advanced",
    topics: ["Regex patterns", "Match vs search", "Groups & capturing", "Regex flags"],
    starterCode: "import re\npattern = r'\\d{3}-\\d{2}-\\d{4}'\ntext = 'SSN: 123-45-6789'\nmatch = re.search(pattern, text)",
    breakCode: "import re\npattern = r'\\d{3}-\\d{2}-\\d{4}'\ntext = 'SSN: 123-45-6789'\nmatch = re.search(pattern, text)\nprint(match.group(1))",
    commonErrors: ["IndexError: no such group", "re.error: bad escape"]
  },
  { day: 19, title: "Multithreading & Multiprocessing", difficulty: "Advanced", duration: "85 min", category: "advanced",
    topics: ["Threading module", "GIL limitations", "Multiprocessing", "Concurrent.futures"],
    starterCode: "import threading\n\ndef worker(num):\n    print(f'Worker {num}')\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=worker, args=(i,))\n    threads.append(t)\n    t.start()",
    breakCode: "import threading\n\ndef worker(num):\n    print(f'Worker {num}')\n\nfor i in range(5):\n    t = threading.Thread(target=worker, args=(i))\n    t.start()",
    commonErrors: ["TypeError: args must be a tuple"]
  },
  { day: 20, title: "Async/Await & Asyncio", difficulty: "Advanced", duration: "85 min", category: "advanced",
    topics: ["Async functions", "Await keyword", "Event loop", "Asyncio library"],
    starterCode: "import asyncio\n\nasync def fetch_data():\n    await asyncio.sleep(1)\n    return 'Data'\n\nasync def main():\n    result = await fetch_data()\n    print(result)\n\nasyncio.run(main())",
    breakCode: "import asyncio\n\nasync def fetch_data():\n    asyncio.sleep(1)\n    return 'Data'\n\nasync def main():\n    result = fetch_data()\n    print(result)",
    commonErrors: ["RuntimeWarning: coroutine was never awaited"]
  },
  { day: 21, title: "Working with APIs & JSON", difficulty: "Advanced", duration: "75 min", category: "advanced",
    topics: ["Requests library", "JSON parsing", "API authentication", "Error handling"],
    starterCode: "import requests\nimport json\n\nresponse = requests.get('https://api.github.com/users/github')\ndata = response.json()\nprint(data['name'])",
    breakCode: "import requests\n\nresponse = requests.get('https://api.github.com/users/github')\ndata = response.json\nprint(data['name'])",
    commonErrors: ["TypeError: 'method' object is not subscriptable"]
  },

  // Week 4: Production Patterns (Days 22-30)
  { day: 22, title: "Testing with Pytest", difficulty: "Advanced", duration: "80 min", category: "production",
    topics: ["Unit tests", "Fixtures", "Parametrize", "Mocking"],
    starterCode: "import pytest\n\ndef add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0",
    breakCode: "def test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 1",
    commonErrors: ["AssertionError", "Test failure"]
  },
  { day: 23, title: "Logging & Debugging", difficulty: "Advanced", duration: "70 min", category: "production",
    topics: ["Logging module", "Log levels", "Handlers & formatters", "Debugging techniques"],
    starterCode: "import logging\n\nlogging.basicConfig(level=logging.INFO)\nlogger = logging.getLogger(__name__)\n\nlogger.info('Application started')\nlogger.error('An error occurred')",
    breakCode: "import logging\n\nlogger = logging.getLogger(__name__)\nlogger.info('Application started')",
    commonErrors: ["No handlers configured", "Log messages not appearing"]
  },
  { day: 24, title: "Environment Variables & Config", difficulty: "Advanced", duration: "65 min", category: "production",
    topics: ["Os.environ", "Python-dotenv", "Config files", "Settings management"],
    starterCode: "import os\nfrom dotenv import load_dotenv\n\nload_dotenv()\napi_key = os.getenv('API_KEY')\nprint(api_key)",
    breakCode: "import os\n\napi_key = os.environ['API_KEY']\nprint(api_key)",
    commonErrors: ["KeyError: 'API_KEY'", "Environment variable not found"]
  },
  { day: 25, title: "Virtual Environments & Dependencies", difficulty: "Advanced", duration: "60 min", category: "production",
    topics: ["Venv & virtualenv", "Requirements.txt", "Pip", "Package management"],
    starterCode: "# Command line:\n# python -m venv venv\n# source venv/bin/activate\n# pip install -r requirements.txt\n# pip freeze > requirements.txt",
    breakCode: "# Common mistake: Installing globally\n# pip install package\n# Instead: activate venv first",
    commonErrors: ["ModuleNotFoundError after activation", "Permission errors"]
  },
  { day: 26, title: "Database Operations with SQLite", difficulty: "Advanced", duration: "85 min", category: "production",
    topics: ["Sqlite3 module", "CRUD operations", "SQL queries", "Connection management"],
    starterCode: "import sqlite3\n\nconn = sqlite3.connect('app.db')\ncursor = conn.cursor()\ncursor.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)')\nconn.commit()\nconn.close()",
    breakCode: "import sqlite3\n\nconn = sqlite3.connect('app.db')\ncursor = conn.cursor()\ncursor.execute('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)')\nconn.close()",
    commonErrors: ["sqlite3.OperationalError: table already exists", "Connection not committed"]
  },
  { day: 27, title: "Flask API Development", difficulty: "Advanced", duration: "90 min", category: "production",
    topics: ["Flask basics", "Routes & methods", "Request/response", "JSON APIs"],
    starterCode: "from flask import Flask, jsonify, request\n\napp = Flask(__name__)\n\n@app.route('/api/users', methods=['GET'])\ndef get_users():\n    return jsonify({'users': []})\n\nif __name__ == '__main__':\n    app.run(debug=True)",
    breakCode: "from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.route('/api/users')\ndef get_users():\n    return {'users': []}\n\napp.run()",
    commonErrors: ["TypeError: Object is not JSON serializable", "Port already in use"]
  },
  { day: 28, title: "Data Processing with Pandas", difficulty: "Advanced", duration: "85 min", category: "production",
    topics: ["DataFrames", "Reading CSV/Excel", "Data filtering", "Aggregations"],
    starterCode: "import pandas as pd\n\ndf = pd.DataFrame({'name': ['Alice', 'Bob'], 'age': [25, 30]})\nprint(df)\nfiltered = df[df['age'] > 26]",
    breakCode: "import pandas as pd\n\ndf = pd.DataFrame({'name': ['Alice', 'Bob'], 'age': [25, 30]})\nfiltered = df[df.age > 26]",
    commonErrors: ["AttributeError: DataFrame has no attribute", "KeyError"]
  },
  { day: 29, title: "Web Scraping with BeautifulSoup", difficulty: "Advanced", duration: "80 min", category: "production",
    topics: ["BeautifulSoup basics", "HTML parsing", "CSS selectors", "Ethical scraping"],
    starterCode: "from bs4 import BeautifulSoup\nimport requests\n\nresponse = requests.get('https://example.com')\nsoup = BeautifulSoup(response.content, 'html.parser')\ntitle = soup.find('title').text",
    breakCode: "from bs4 import BeautifulSoup\nimport requests\n\nresponse = requests.get('https://example.com')\nsoup = BeautifulSoup(response.content)\ntitle = soup.find('title').text",
    commonErrors: ["AttributeError: 'NoneType' object has no attribute 'text'"]
  },
  { day: 30, title: "Production Deployment Patterns", difficulty: "Advanced", duration: "90 min", category: "production",
    topics: ["Project structure", "Error handling", "Performance optimization", "Security best practices"],
    starterCode: "# Production-ready structure:\n# /app\n#   __init__.py\n#   config.py\n#   models.py\n#   routes.py\n# /tests\n# requirements.txt\n# .env\n# README.md",
    breakCode: "# Common mistakes:\n# - Hardcoded credentials\n# - No error handling\n# - Debug=True in production\n# - No input validation",
    commonErrors: ["Security vulnerabilities", "Performance issues", "Scalability problems"]
  }
]

export const getPythonLessonByDay = (day) => {
  return pythonLessons.find(lesson => lesson.day === parseInt(day))
}

export const getPythonLessonsByCategory = (category) => {
  return pythonLessons.filter(lesson => lesson.category === category)
}
