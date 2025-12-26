export const projectsData = [
  {
    id: 1,
    title: "Python CLI Todo App",
    technology: "python",
    week: 1,
    difficulty: "Beginner",
    duration: "2 hours",
    description: "Build a command-line todo list application with file persistence.",
    objectives: [
      "Practice Python basics and functions",
      "Work with lists and dictionaries",
      "Implement file I/O operations",
      "Create a user-friendly CLI interface"
    ],
    requirements: [
      "Add, remove, and list todos",
      "Mark todos as complete",
      "Save todos to a file",
      "Load todos when starting the app"
    ],
    starterCode: `# todo_app.py
import json

def load_todos():
    """Load todos from file"""
    # Your code here
    pass

def save_todos(todos):
    """Save todos to file"""
    # Your code here
    pass

def add_todo(todos, task):
    """Add a new todo"""
    # Your code here
    pass

def main():
    """Main application loop"""
    todos = load_todos()
    
    while True:
        print("\\n1. Add Todo")
        print("2. List Todos")
        print("3. Mark Complete")
        print("4. Delete Todo")
        print("5. Exit")
        
        choice = input("Choose an option: ")
        # Your code here

if __name__ == "__main__":
    main()
`,
    solution: `# todo_app.py
import json
import os

FILENAME = "todos.json"

def load_todos():
    """Load todos from file"""
    if os.path.exists(FILENAME):
        with open(FILENAME, 'r') as f:
            return json.load(f)
    return []

def save_todos(todos):
    """Save todos to file"""
    with open(FILENAME, 'w') as f:
        json.dump(todos, f, indent=2)

def add_todo(todos, task):
    """Add a new todo"""
    todo = {
        'id': len(todos) + 1,
        'task': task,
        'completed': False
    }
    todos.append(todo)
    return todos

def list_todos(todos):
    """Display all todos"""
    if not todos:
        print("No todos yet!")
        return
    
    for todo in todos:
        status = "✓" if todo['completed'] else " "
        print(f"[{status}] {todo['id']}. {todo['task']}")

def main():
    """Main application loop"""
    todos = load_todos()
    
    while True:
        print("\\n=== Python Todo App ===")
        print("1. Add Todo")
        print("2. List Todos")
        print("3. Mark Complete")
        print("4. Delete Todo")
        print("5. Exit")
        
        choice = input("Choose an option: ")
        
        if choice == '1':
            task = input("Enter todo: ")
            todos = add_todo(todos, task)
            save_todos(todos)
            print("Todo added!")
        
        elif choice == '2':
            list_todos(todos)
        
        elif choice == '3':
            list_todos(todos)
            todo_id = int(input("Enter todo ID: "))
            for todo in todos:
                if todo['id'] == todo_id:
                    todo['completed'] = True
                    save_todos(todos)
                    print("Marked as complete!")
                    break
        
        elif choice == '4':
            list_todos(todos)
            todo_id = int(input("Enter todo ID: "))
            todos = [t for t in todos if t['id'] != todo_id]
            save_todos(todos)
            print("Todo deleted!")
        
        elif choice == '5':
            print("Goodbye!")
            break

if __name__ == "__main__":
    main()
`,
    hints: [
      "Use json.load() and json.dump() for file operations",
      "Each todo should be a dictionary with id, task, and completed fields",
      "Use a list to store all todos",
      "Remember to save after every modification"
    ]
  },
  {
    id: 2,
    title: "React Counter App",
    technology: "react",
    week: 1,
    difficulty: "Beginner",
    duration: "1.5 hours",
    description: "Create an interactive counter with increment, decrement, and reset functionality.",
    objectives: [
      "Practice useState hook",
      "Handle click events",
      "Implement conditional styling",
      "Create reusable button components"
    ],
    requirements: [
      "Display current count",
      "Increment and decrement buttons",
      "Reset button",
      "Change color based on count (red if negative, green if positive)"
    ],
    starterCode: `import { useState } from 'react';

function Counter() {
  // Your code here
  
  return (
    <div className="counter">
      {/* Your JSX here */}
    </div>
  );
}

export default Counter;
`,
    solution: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  const getColor = () => {
    if (count > 0) return 'green';
    if (count < 0) return 'red';
    return 'black';
  };
  
  return (
    <div className="counter">
      <h1 style={{ color: getColor(), fontSize: '4rem' }}>
        {count}
      </h1>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
`,
    hints: [
      "Use useState to manage the count state",
      "Create separate functions for increment, decrement, and reset",
      "Use inline styles or className to change color",
      "Consider using ternary operators for conditional rendering"
    ]
  },
  {
    id: 3,
    title: "JavaScript Form Validator",
    technology: "javascript",
    week: 1,
    difficulty: "Beginner",
    duration: "2 hours",
    description: "Build a form validation system with real-time feedback.",
    objectives: [
      "Practice DOM manipulation",
      "Work with regular expressions",
      "Handle form events",
      "Provide user feedback"
    ],
    requirements: [
      "Validate email format",
      "Check password strength",
      "Confirm password match",
      "Display error messages in real-time"
    ],
    starterCode: `// validator.js

function validateEmail(email) {
  // Your code here
}

function validatePassword(password) {
  // Your code here
  // Return object with: isValid, message
}

function validateConfirmPassword(password, confirmPassword) {
  // Your code here
}

// Setup event listeners
document.getElementById('email').addEventListener('input', (e) => {
  // Your code here
});

// Add more event listeners
`,
    solution: `// validator.js

function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  const minLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\\d/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
  
  const isValid = minLength && hasUpperCase && hasLowerCase && hasNumber;
  
  let message = '';
  if (!minLength) message += 'At least 8 characters. ';
  if (!hasUpperCase) message += 'One uppercase letter. ';
  if (!hasLowerCase) message += 'One lowercase letter. ';
  if (!hasNumber) message += 'One number. ';
  
  return {
    isValid,
    message: isValid ? 'Strong password!' : message
  };
}

function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

function showError(input, message) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
  input.style.borderColor = 'red';
}

function showSuccess(input, message = '') {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = message;
  errorDiv.style.color = 'green';
  input.style.borderColor = 'green';
}

// Email validation
document.getElementById('email').addEventListener('input', (e) => {
  const email = e.target.value;
  if (validateEmail(email)) {
    showSuccess(e.target, 'Valid email!');
  } else {
    showError(e.target, 'Invalid email format');
  }
});

// Password validation
document.getElementById('password').addEventListener('input', (e) => {
  const password = e.target.value;
  const result = validatePassword(password);
  
  if (result.isValid) {
    showSuccess(e.target, result.message);
  } else {
    showError(e.target, result.message);
  }
});

// Confirm password validation
document.getElementById('confirmPassword').addEventListener('input', (e) => {
  const password = document.getElementById('password').value;
  const confirmPassword = e.target.value;
  
  if (validateConfirmPassword(password, confirmPassword)) {
    showSuccess(e.target, 'Passwords match!');
  } else {
    showError(e.target, 'Passwords do not match');
  }
});
`,
    hints: [
      "Use regular expressions for email and password validation",
      "Update error messages in real-time using input events",
      "Store error elements as siblings to input fields",
      "Consider using data attributes to store validation state"
    ]
  },
  {
    id: 4,
    title: "Full-Stack Dashboard (Capstone)",
    technology: "all",
    week: 4,
    difficulty: "Advanced",
    duration: "8 hours",
    description: "Build a complete dashboard integrating Python backend, React frontend, and JavaScript utilities.",
    objectives: [
      "Create a REST API with Python",
      "Build a React interface",
      "Implement data visualization",
      "Connect frontend to backend"
    ],
    requirements: [
      "Python Flask/FastAPI backend with user authentication",
      "React dashboard with multiple views",
      "Data visualization with charts",
      "CRUD operations for managing data",
      "Responsive design"
    ],
    starterCode: `# Available as separate files in the capstone project folder
# - backend/app.py (Python)
# - frontend/src/App.jsx (React)
# - frontend/src/utils/api.js (JavaScript)
`,
    solution: "Complete solution provided in separate repository",
    hints: [
      "Start with the backend API structure",
      "Use fetch or axios for API calls",
      "Implement authentication with JWT",
      "Use React Router for navigation",
      "Consider using a state management solution"
    ]
  },
  {
    id: 5,
    title: "Real-Time Chat Application",
    technology: "all",
    week: 2,
    difficulty: "Advanced",
    duration: "6 hours",
    description: "Create a real-time messaging app with WebSockets, user authentication, and message persistence.",
    objectives: [
      "Implement WebSocket communication",
      "Handle real-time data updates",
      "Build secure user authentication",
      "Store and retrieve message history"
    ],
    requirements: [
      "Python backend with WebSocket support (FastAPI + WebSockets)",
      "Real-time message broadcasting",
      "User authentication and sessions",
      "Message history with timestamps",
      "Online/offline status indicators",
      "Typing indicators"
    ],
    starterCode: `# backend/chat_server.py
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import List, Dict
import json
from datetime import datetime

app = FastAPI()

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []
        self.users: Dict[str, WebSocket] = {}
    
    async def connect(self, websocket: WebSocket, username: str):
        # Your code here
        pass
    
    async def disconnect(self, websocket: WebSocket):
        # Your code here
        pass
    
    async def broadcast(self, message: dict):
        # Your code here
        pass

manager = ConnectionManager()

@app.websocket("/ws/{username}")
async def websocket_endpoint(websocket: WebSocket, username: str):
    # Your implementation here
    pass

# React Frontend (Chat.jsx)
import { useState, useEffect, useRef } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const ws = useRef(null);
  
  useEffect(() => {
    // Connect to WebSocket
    // Your code here
  }, []);
  
  const sendMessage = () => {
    // Your code here
  };
  
  return (
    <div className="chat-container">
      {/* Your JSX here */}
    </div>
  );
}
`,
    solution: `# Complete backend solution
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
import json
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []
        self.users: Dict[str, WebSocket] = {}
    
    async def connect(self, websocket: WebSocket, username: str):
        await websocket.accept()
        self.active_connections.append(websocket)
        self.users[username] = websocket
        await self.broadcast({
            "type": "user_joined",
            "username": username,
            "timestamp": datetime.now().isoformat()
        })
    
    async def disconnect(self, websocket: WebSocket, username: str):
        self.active_connections.remove(websocket)
        if username in self.users:
            del self.users[username]
        await self.broadcast({
            "type": "user_left",
            "username": username,
            "timestamp": datetime.now().isoformat()
        })
    
    async def broadcast(self, message: dict):
        for connection in self.active_connections:
            try:
                await connection.send_json(message)
            except:
                pass

manager = ConnectionManager()

@app.websocket("/ws/{username}")
async def websocket_endpoint(websocket: WebSocket, username: str):
    await manager.connect(websocket, username)
    try:
        while True:
            data = await websocket.receive_text()
            message = {
                "type": "message",
                "username": username,
                "content": data,
                "timestamp": datetime.now().isoformat()
            }
            await manager.broadcast(message)
    except WebSocketDisconnect:
        await manager.disconnect(websocket, username)

# React Frontend
import { useState, useEffect, useRef } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef(null);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(scrollToBottom, [messages]);
  
  const connect = () => {
    if (!username.trim()) return;
    
    ws.current = new WebSocket(\`ws://localhost:8000/ws/\${username}\`);
    
    ws.current.onopen = () => {
      setIsConnected(true);
    };
    
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages(prev => [...prev, data]);
    };
    
    ws.current.onclose = () => {
      setIsConnected(false);
    };
  };
  
  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() && ws.current) {
      ws.current.send(inputMessage);
      setInputMessage('');
    }
  };
  
  if (!isConnected) {
    return (
      <div className="login-container">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button onClick={connect}>Join Chat</button>
      </div>
    );
  }
  
  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={\`message \${msg.type}\`}>
            {msg.type === 'message' ? (
              <>
                <strong>{msg.username}:</strong> {msg.content}
              </>
            ) : (
              <em>{msg.username} {msg.type === 'user_joined' ? 'joined' : 'left'}</em>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
`,
    hints: [
      "Install FastAPI and uvicorn[standard] for WebSocket support",
      "Use WebSocket's send_json() for structured data",
      "Store connections in a manager class",
      "Handle disconnections gracefully in try/catch",
      "Auto-scroll to bottom when new messages arrive"
    ]
  },
  {
    id: 6,
    title: "Algorithmic Trading Simulator",
    technology: "python",
    week: 3,
    difficulty: "Advanced",
    duration: "5 hours",
    description: "Build a stock trading simulator with technical indicators, backtesting, and portfolio management.",
    objectives: [
      "Fetch real market data",
      "Calculate technical indicators (SMA, RSI, MACD)",
      "Implement trading strategies",
      "Backtest strategy performance"
    ],
    requirements: [
      "Integration with Yahoo Finance or Alpha Vantage API",
      "Calculate at least 3 technical indicators",
      "Implement buy/sell logic based on indicators",
      "Track portfolio value over time",
      "Generate performance metrics (returns, Sharpe ratio)",
      "Visualize trades on price chart"
    ],
    starterCode: `# trading_simulator.py
import yfinance as yf
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

class TradingSimulator:
    def __init__(self, initial_capital=10000):
        self.initial_capital = initial_capital
        self.capital = initial_capital
        self.holdings = 0
        self.trades = []
    
    def fetch_data(self, symbol, start_date, end_date):
        """Fetch historical stock data"""
        # Your code here
        pass
    
    def calculate_sma(self, data, period=20):
        """Calculate Simple Moving Average"""
        # Your code here
        pass
    
    def calculate_rsi(self, data, period=14):
        """Calculate Relative Strength Index"""
        # Your code here
        pass
    
    def generate_signals(self, data):
        """Generate buy/sell signals"""
        # Your code here
        pass
    
    def execute_trade(self, signal, price, date):
        """Execute buy or sell order"""
        # Your code here
        pass
    
    def backtest(self, symbol, start_date, end_date):
        """Run backtest on historical data"""
        # Your code here
        pass
    
    def calculate_metrics(self):
        """Calculate performance metrics"""
        # Your code here
        pass

if __name__ == "__main__":
    simulator = TradingSimulator(initial_capital=10000)
    # Your code here
`,
    solution: `# trading_simulator.py
import yfinance as yf
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import matplotlib.pyplot as plt

class TradingSimulator:
    def __init__(self, initial_capital=10000):
        self.initial_capital = initial_capital
        self.capital = initial_capital
        self.holdings = 0
        self.trades = []
        self.portfolio_value = []
    
    def fetch_data(self, symbol, start_date, end_date):
        """Fetch historical stock data"""
        data = yf.download(symbol, start=start_date, end=end_date)
        return data
    
    def calculate_sma(self, data, period=20):
        """Calculate Simple Moving Average"""
        return data['Close'].rolling(window=period).mean()
    
    def calculate_rsi(self, data, period=14):
        """Calculate Relative Strength Index"""
        delta = data['Close'].diff()
        gain = (delta.where(delta > 0, 0)).rolling(window=period).mean()
        loss = (-delta.where(delta < 0, 0)).rolling(window=period).mean()
        rs = gain / loss
        rsi = 100 - (100 / (1 + rs))
        return rsi
    
    def calculate_macd(self, data):
        """Calculate MACD"""
        exp1 = data['Close'].ewm(span=12, adjust=False).mean()
        exp2 = data['Close'].ewm(span=26, adjust=False).mean()
        macd = exp1 - exp2
        signal = macd.ewm(span=9, adjust=False).mean()
        return macd, signal
    
    def generate_signals(self, data):
        """Generate buy/sell signals"""
        signals = pd.DataFrame(index=data.index)
        signals['price'] = data['Close']
        
        # Calculate indicators
        signals['SMA_20'] = self.calculate_sma(data, 20)
        signals['SMA_50'] = self.calculate_sma(data, 50)
        signals['RSI'] = self.calculate_rsi(data)
        signals['MACD'], signals['MACD_signal'] = self.calculate_macd(data)
        
        # Generate signals
        signals['signal'] = 0
        
        # Buy: SMA_20 crosses above SMA_50, RSI < 70
        signals.loc[(signals['SMA_20'] > signals['SMA_50']) & 
                   (signals['RSI'] < 70), 'signal'] = 1
        
        # Sell: SMA_20 crosses below SMA_50, RSI > 30
        signals.loc[(signals['SMA_20'] < signals['SMA_50']) & 
                   (signals['RSI'] > 30), 'signal'] = -1
        
        return signals
    
    def execute_trade(self, signal, price, date):
        """Execute buy or sell order"""
        if signal == 1 and self.capital > 0:  # Buy
            shares = self.capital // price
            cost = shares * price
            self.capital -= cost
            self.holdings += shares
            self.trades.append({
                'date': date,
                'type': 'BUY',
                'shares': shares,
                'price': price,
                'capital': self.capital
            })
        elif signal == -1 and self.holdings > 0:  # Sell
            revenue = self.holdings * price
            self.capital += revenue
            self.trades.append({
                'date': date,
                'type': 'SELL',
                'shares': self.holdings,
                'price': price,
                'capital': self.capital
            })
            self.holdings = 0
    
    def backtest(self, symbol, start_date, end_date):
        """Run backtest on historical data"""
        print(f"Backtesting {symbol} from {start_date} to {end_date}")
        
        data = self.fetch_data(symbol, start_date, end_date)
        signals = self.generate_signals(data)
        
        prev_signal = 0
        for date, row in signals.iterrows():
            if pd.notna(row['signal']) and row['signal'] != prev_signal:
                self.execute_trade(row['signal'], row['price'], date)
                prev_signal = row['signal']
            
            # Track portfolio value
            current_value = self.capital + (self.holdings * row['price'])
            self.portfolio_value.append({
                'date': date,
                'value': current_value
            })
        
        # Close any remaining positions
        if self.holdings > 0:
            final_price = signals['price'].iloc[-1]
            self.execute_trade(-1, final_price, signals.index[-1])
        
        return signals
    
    def calculate_metrics(self):
        """Calculate performance metrics"""
        final_value = self.capital
        total_return = ((final_value - self.initial_capital) / self.initial_capital) * 100
        
        portfolio_df = pd.DataFrame(self.portfolio_value)
        returns = portfolio_df['value'].pct_change().dropna()
        sharpe_ratio = (returns.mean() / returns.std()) * np.sqrt(252) if len(returns) > 0 else 0
        
        print(f"\\n=== Performance Metrics ===")
        print(f"Initial Capital: ${self.initial_capital:,.2f}")
        print(f"Final Value: ${final_value:,.2f}")
        print(f"Total Return: {total_return:.2f}%")
        print(f"Number of Trades: {len(self.trades)}")
        print(f"Sharpe Ratio: {sharpe_ratio:.2f}")
        
        return {
            'initial_capital': self.initial_capital,
            'final_value': final_value,
            'total_return': total_return,
            'num_trades': len(self.trades),
            'sharpe_ratio': sharpe_ratio
        }
    
    def plot_results(self, signals):
        """Plot trading results"""
        fig, (ax1, ax2, ax3) = plt.subplots(3, 1, figsize=(15, 10))
        
        # Price and moving averages
        ax1.plot(signals.index, signals['price'], label='Price', alpha=0.5)
        ax1.plot(signals.index, signals['SMA_20'], label='SMA 20')
        ax1.plot(signals.index, signals['SMA_50'], label='SMA 50')
        
        # Mark trades
        for trade in self.trades:
            color = 'g' if trade['type'] == 'BUY' else 'r'
            marker = '^' if trade['type'] == 'BUY' else 'v'
            ax1.scatter(trade['date'], trade['price'], color=color, marker=marker, s=100)
        
        ax1.set_title('Price and Trading Signals')
        ax1.legend()
        ax1.grid(True)
        
        # RSI
        ax2.plot(signals.index, signals['RSI'])
        ax2.axhline(y=70, color='r', linestyle='--')
        ax2.axhline(y=30, color='g', linestyle='--')
        ax2.set_title('RSI')
        ax2.grid(True)
        
        # Portfolio value
        portfolio_df = pd.DataFrame(self.portfolio_value)
        ax3.plot(portfolio_df['date'], portfolio_df['value'])
        ax3.set_title('Portfolio Value Over Time')
        ax3.grid(True)
        
        plt.tight_layout()
        plt.show()

if __name__ == "__main__":
    simulator = TradingSimulator(initial_capital=10000)
    
    end_date = datetime.now()
    start_date = end_date - timedelta(days=365)
    
    signals = simulator.backtest('AAPL', 
                                 start_date.strftime('%Y-%m-%d'),
                                 end_date.strftime('%Y-%m-%d'))
    
    metrics = simulator.calculate_metrics()
    simulator.plot_results(signals)
`,
    hints: [
      "Install yfinance library: pip install yfinance",
      "Use pandas rolling() for moving averages",
      "RSI = 100 - (100 / (1 + RS)) where RS = average gain / average loss",
      "Track capital and holdings separately",
      "Calculate Sharpe ratio: (mean return / std return) * sqrt(252)"
    ]
  },
  {
    id: 7,
    title: "E-Commerce Product Filter System",
    technology: "react",
    week: 2,
    difficulty: "Advanced",
    duration: "4 hours",
    description: "Build a sophisticated product filtering system with multiple criteria, sorting, and search.",
    objectives: [
      "Implement complex state management",
      "Create reusable filter components",
      "Optimize rendering performance",
      "Handle multiple filter combinations"
    ],
    requirements: [
      "Filter by category, price range, rating, brand",
      "Real-time search functionality",
      "Sort by price, rating, popularity",
      "Pagination or infinite scroll",
      "Display active filters with clear options",
      "Show result count"
    ],
    starterCode: `import { useState, useMemo } from 'react';

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999, rating: 4.5, brand: "TechCo" },
  // Add more products...
];

function ProductFilter() {
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 2000],
    minRating: 0,
    brand: 'all',
    searchTerm: ''
  });
  
  const [sortBy, setSortBy] = useState('popularity');
  
  const filteredProducts = useMemo(() => {
    // Your filtering logic here
  }, [filters, sortBy]);
  
  return (
    <div className="product-filter">
      {/* Your component here */}
    </div>
  );
}

export default ProductFilter;
`,
    solution: `import { useState, useMemo } from 'react';

const products = [
  { id: 1, name: "Laptop Pro", category: "Electronics", price: 1299, rating: 4.5, brand: "TechCo", stock: 15 },
  { id: 2, name: "Wireless Mouse", category: "Electronics", price: 29, rating: 4.2, brand: "TechCo", stock: 50 },
  { id: 3, name: "Office Chair", category: "Furniture", price: 199, rating: 4.7, brand: "ComfortPlus", stock: 8 },
  { id: 4, name: "Desk Lamp", category: "Furniture", price: 45, rating: 4.0, brand: "LightCo", stock: 30 },
  { id: 5, name: "Coffee Maker", category: "Appliances", price: 89, rating: 4.6, brand: "BrewMaster", stock: 12 },
  { id: 6, name: "Smartphone", category: "Electronics", price: 799, rating: 4.8, brand: "TechCo", stock: 25 },
  { id: 7, name: "Bookshelf", category: "Furniture", price: 149, rating: 4.3, brand: "ComfortPlus", stock: 6 },
  { id: 8, name: "Blender", category: "Appliances", price: 59, rating: 4.1, brand: "BrewMaster", stock: 20 },
];

function ProductFilter() {
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 2000],
    minRating: 0,
    brand: 'all',
    searchTerm: ''
  });
  
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };
  
  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }
      
      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }
      
      // Rating filter
      if (product.rating < filters.minRating) {
        return false;
      }
      
      // Brand filter
      if (filters.brand !== 'all' && product.brand !== filters.brand) {
        return false;
      }
      
      // Search filter
      if (filters.searchTerm && !product.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });
    
    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    return result;
  }, [filters, sortBy]);
  
  const clearFilters = () => {
    setFilters({
      category: 'all',
      priceRange: [0, 2000],
      minRating: 0,
      brand: 'all',
      searchTerm: ''
    });
  };
  
  const uniqueBrands = [...new Set(products.map(p => p.brand))];
  const uniqueCategories = [...new Set(products.map(p => p.category))];
  
  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <div className="product-filter-container">
      <aside className="filters-sidebar">
        <div className="filter-header">
          <h2>Filters</h2>
          <button onClick={clearFilters} className="clear-btn">Clear All</button>
        </div>
        
        {/* Search */}
        <div className="filter-group">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search products..."
            value={filters.searchTerm}
            onChange={(e) => updateFilter('searchTerm', e.target.value)}
          />
        </div>
        
        {/* Category */}
        <div className="filter-group">
          <label>Category</label>
          <select value={filters.category} onChange={(e) => updateFilter('category', e.target.value)}>
            <option value="all">All Categories</option>
            {uniqueCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        {/* Price Range */}
        <div className="filter-group">
          <label>Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="2000"
            value={filters.priceRange[1]}
            onChange={(e) => updateFilter('priceRange', [0, parseInt(e.target.value)])}
          />
        </div>
        
        {/* Rating */}
        <div className="filter-group">
          <label>Minimum Rating</label>
          <div className="rating-buttons">
            {[0, 3, 4, 4.5].map(rating => (
              <button
                key={rating}
                className={\`rating-btn \${filters.minRating === rating ? 'active' : ''}\`}
                onClick={() => updateFilter('minRating', rating)}
              >
                {rating === 0 ? 'All' : \`\${rating}+ ⭐\`}
              </button>
            ))}
          </div>
        </div>
        
        {/* Brand */}
        <div className="filter-group">
          <label>Brand</label>
          <select value={filters.brand} onChange={(e) => updateFilter('brand', e.target.value)}>
            <option value="all">All Brands</option>
            {uniqueBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </aside>
      
      <main className="products-main">
        <div className="products-header">
          <div className="results-info">
            <h1>Products</h1>
            <p>{filteredProducts.length} results found</p>
          </div>
          
          <div className="sort-controls">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        
        <div className="products-grid">
          {paginatedProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">📦</div>
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <div className="product-meta">
                <span className="price">\${product.price}</span>
                <span className="rating">⭐ {product.rating}</span>
              </div>
              <p className="brand">{product.brand}</p>
              <p className="stock">{product.stock} in stock</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="pagination">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default ProductFilter;
`,
    hints: [
      "Use useMemo to optimize filtering - only recalculate when dependencies change",
      "Create helper functions for each filter type",
      "Store all filters in a single state object for easier management",
      "Use Array.filter() and chain multiple conditions",
      "Remember to reset pagination when filters change"
    ]
  },
  {
    id: 8,
    title: "Data Visualization Dashboard",
    technology: "javascript",
    week: 3,
    difficulty: "Advanced",
    duration: "5 hours",
    description: "Create an interactive dashboard with multiple chart types using D3.js or Chart.js.",
    objectives: [
      "Integrate charting library",
      "Fetch and process data",
      "Create interactive visualizations",
      "Implement real-time updates"
    ],
    requirements: [
      "At least 3 different chart types (line, bar, pie)",
      "Interactive tooltips and legends",
      "Data filtering and date range selection",
      "Export chart as image",
      "Responsive design",
      "Real-time data updates (simulate with intervals)"
    ],
    starterCode: `// dashboard.js
import Chart from 'chart.js/auto';

class Dashboard {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.charts = {};
    this.data = this.generateMockData();
  }
  
  generateMockData() {
    // Generate sample data
    // Your code here
  }
  
  createLineChart(canvasId, data) {
    // Create line chart
    // Your code here
  }
  
  createBarChart(canvasId, data) {
    // Create bar chart
    // Your code here
  }
  
  createPieChart(canvasId, data) {
    // Create pie chart
    // Your code here
  }
  
  updateData() {
    // Update charts with new data
    // Your code here
  }
  
  init() {
    // Initialize dashboard
    // Your code here
  }
}

// Initialize
const dashboard = new Dashboard('dashboard-container');
dashboard.init();
`,
    solution: `// dashboard.js
import Chart from 'chart.js/auto';

class Dashboard {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.charts = {};
    this.data = this.generateMockData();
    this.updateInterval = null;
  }
  
  generateMockData() {
    const labels = [];
    const sales = [];
    const expenses = [];
    const categories = ['Electronics', 'Clothing', 'Food', 'Books', 'Other'];
    const categoryData = {};
    
    // Generate 12 months of data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    months.forEach(month => {
      labels.push(month);
      sales.push(Math.floor(Math.random() * 50000) + 20000);
      expenses.push(Math.floor(Math.random() * 30000) + 10000);
    });
    
    categories.forEach(cat => {
      categoryData[cat] = Math.floor(Math.random() * 10000) + 5000;
    });
    
    return {
      labels,
      sales,
      expenses,
      categories,
      categoryData
    };
  }
  
  createLineChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    this.charts.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Sales',
            data: data.sales,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Expenses',
            data: data.expenses,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Sales vs Expenses (2024)',
            font: { size: 18 }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function(context) {
                return \`\${context.dataset.label}: $\${context.parsed.y.toLocaleString()}\`;
              }
            }
          },
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + value.toLocaleString();
              }
            }
          }
        }
      }
    });
  }
  
  createBarChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    const profit = data.sales.map((sale, i) => sale - data.expenses[i]);
    
    this.charts.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Monthly Profit',
          data: profit,
          backgroundColor: profit.map(p => p >= 0 ? 'rgba(75, 192, 192, 0.7)' : 'rgba(255, 99, 132, 0.7)'),
          borderColor: profit.map(p => p >= 0 ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)'),
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Profit Analysis',
            font: { size: 18 }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return \`Profit: $\${context.parsed.y.toLocaleString()}\`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + value.toLocaleString();
              }
            }
          }
        }
      }
    });
  }
  
  createPieChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    this.charts.pieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.categories,
        datasets: [{
          label: 'Sales by Category',
          data: Object.values(data.categoryData),
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Revenue by Category',
            font: { size: 18 }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((context.parsed / total) * 100).toFixed(1);
                return \`\${context.label}: $\${context.parsed.toLocaleString()} (\${percentage}%)\`;
              }
            }
          },
          legend: {
            display: true,
            position: 'right'
          }
        }
      }
    });
  }
  
  updateData() {
    // Simulate real-time data updates
    const lastSale = this.data.sales[this.data.sales.length - 1];
    const lastExpense = this.data.expenses[this.data.expenses.length - 1];
    
    // Add new data point
    this.data.sales.shift();
    this.data.sales.push(lastSale + Math.floor(Math.random() * 4000) - 2000);
    
    this.data.expenses.shift();
    this.data.expenses.push(lastExpense + Math.floor(Math.random() * 2000) - 1000);
    
    // Update charts
    this.charts.lineChart.data.datasets[0].data = this.data.sales;
    this.charts.lineChart.data.datasets[1].data = this.data.expenses;
    this.charts.lineChart.update('none'); // No animation for performance
    
    const profit = this.data.sales.map((sale, i) => sale - this.data.expenses[i]);
    this.charts.barChart.data.datasets[0].data = profit;
    this.charts.barChart.update('none');
  }
  
  exportChart(chartName) {
    const canvas = this.charts[chartName].canvas;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = \`\${chartName}-\${Date.now()}.png\`;
    link.href = url;
    link.click();
  }
  
  setupControls() {
    // Auto-update toggle
    document.getElementById('toggleUpdate').addEventListener('click', (e) => {
      if (this.updateInterval) {
        clearInterval(this.updateInterval);
        this.updateInterval = null;
        e.target.textContent = 'Start Auto-Update';
      } else {
        this.updateInterval = setInterval(() => this.updateData(), 2000);
        e.target.textContent = 'Stop Auto-Update';
      }
    });
    
    // Export buttons
    document.getElementById('exportLine').addEventListener('click', () => {
      this.exportChart('lineChart');
    });
    
    document.getElementById('exportBar').addEventListener('click', () => {
      this.exportChart('barChart');
    });
    
    document.getElementById('exportPie').addEventListener('click', () => {
      this.exportChart('pieChart');
    });
  }
  
  init() {
    this.createLineChart('lineChart', this.data);
    this.createBarChart('barChart', this.data);
    this.createPieChart('pieChart', this.data);
    this.setupControls();
    
    console.log('Dashboard initialized successfully!');
  }
  
  destroy() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    Object.values(this.charts).forEach(chart => chart.destroy());
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.dashboard = new Dashboard('dashboard-container');
  window.dashboard.init();
});

export default Dashboard;
`,
    hints: [
      "Install Chart.js: npm install chart.js",
      "Use toDataURL() method to export canvas as image",
      "Update charts with chart.update() method",
      "Use 'none' animation mode for real-time updates to improve performance",
      "Store chart instances to update them later"
    ]
  },
  {
    id: 9,
    title: "RESTful API with Authentication",
    technology: "python",
    week: 3,
    difficulty: "Advanced",
    duration: "6 hours",
    description: "Build a complete REST API with JWT authentication, database integration, and CRUD operations.",
    objectives: [
      "Create RESTful endpoints",
      "Implement JWT authentication",
      "Integrate with SQLite/PostgreSQL",
      "Add input validation and error handling"
    ],
    requirements: [
      "User registration and login with JWT",
      "Protected routes requiring authentication",
      "CRUD operations for a resource (e.g., tasks, posts)",
      "Password hashing with bcrypt",
      "Request validation",
      "Proper HTTP status codes and error messages",
      "API documentation"
    ],
    starterCode: `# api.py
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import Optional
import jwt
from datetime import datetime, timedelta
import bcrypt

app = FastAPI()

# Configuration
SECRET_KEY = "your-secret-key-here"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Models
class User(BaseModel):
    username: str
    email: str
    password: str

class Task(BaseModel):
    title: str
    description: Optional[str] = None
    completed: bool = False

# Database (simplified - use real database in production)
users_db = {}
tasks_db = []

# Helper functions
def create_access_token(data: dict):
    # Your code here
    pass

def verify_token(token: str):
    # Your code here
    pass

def hash_password(password: str):
    # Your code here
    pass

def verify_password(plain_password: str, hashed_password: str):
    # Your code here
    pass

# Routes
@app.post("/register")
async def register(user: User):
    # Your code here
    pass

@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Your code here
    pass

@app.get("/tasks")
async def get_tasks(token: str = Depends(oauth2_scheme)):
    # Your code here
    pass

@app.post("/tasks")
async def create_task(task: Task, token: str = Depends(oauth2_scheme)):
    # Your code here
    pass

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
`,
    solution: `# api.py
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
import jwt
from datetime import datetime, timedelta
import bcrypt
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Task Management API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuration
SECRET_KEY = "your-secret-key-change-in-production"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Models
class User(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    password: str = Field(..., min_length=6)

class UserResponse(BaseModel):
    username: str
    email: str

class Task(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    description: Optional[str] = None
    completed: bool = False

class TaskResponse(Task):
    id: int
    owner: str
    created_at: datetime

class Token(BaseModel):
    access_token: str
    token_type: str

# Database (in-memory - use real database in production)
users_db = {}
tasks_db = []
task_id_counter = 1

# Helper functions
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication credentials"
            )
        return username
    except jwt.PyJWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials"
        )

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed.decode('utf-8')

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(
        plain_password.encode('utf-8'),
        hashed_password.encode('utf-8')
    )

def get_current_user(token: str = Depends(oauth2_scheme)) -> str:
    return verify_token(token)

# Routes
@app.get("/")
async def root():
    return {
        "message": "Task Management API",
        "version": "1.0.0",
        "endpoints": {
            "register": "POST /register",
            "login": "POST /token",
            "tasks": "GET /tasks",
            "create_task": "POST /tasks"
        }
    }

@app.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register(user: User):
    if user.username in users_db:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already exists"
        )
    
    if any(u["email"] == user.email for u in users_db.values()):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    hashed_password = hash_password(user.password)
    users_db[user.username] = {
        "username": user.username,
        "email": user.email,
        "hashed_password": hashed_password
    }
    
    return UserResponse(username=user.username, email=user.email)

@app.post("/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = users_db.get(form_data.username)
    
    if not user or not verify_password(form_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token = create_access_token(data={"sub": user["username"]})
    return Token(access_token=access_token, token_type="bearer")

@app.get("/tasks", response_model=List[TaskResponse])
async def get_tasks(current_user: str = Depends(get_current_user)):
    user_tasks = [task for task in tasks_db if task["owner"] == current_user]
    return user_tasks

@app.post("/tasks", response_model=TaskResponse, status_code=status.HTTP_201_CREATED)
async def create_task(task: Task, current_user: str = Depends(get_current_user)):
    global task_id_counter
    
    new_task = {
        "id": task_id_counter,
        "title": task.title,
        "description": task.description,
        "completed": task.completed,
        "owner": current_user,
        "created_at": datetime.utcnow()
    }
    
    tasks_db.append(new_task)
    task_id_counter += 1
    
    return TaskResponse(**new_task)

@app.get("/tasks/{task_id}", response_model=TaskResponse)
async def get_task(task_id: int, current_user: str = Depends(get_current_user)):
    task = next((t for t in tasks_db if t["id"] == task_id and t["owner"] == current_user), None)
    
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found"
        )
    
    return TaskResponse(**task)

@app.put("/tasks/{task_id}", response_model=TaskResponse)
async def update_task(task_id: int, task: Task, current_user: str = Depends(get_current_user)):
    existing_task = next((t for t in tasks_db if t["id"] == task_id and t["owner"] == current_user), None)
    
    if not existing_task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found"
        )
    
    existing_task.update({
        "title": task.title,
        "description": task.description,
        "completed": task.completed
    })
    
    return TaskResponse(**existing_task)

@app.delete("/tasks/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_task(task_id: int, current_user: str = Depends(get_current_user)):
    task_index = next((i for i, t in enumerate(tasks_db) 
                      if t["id"] == task_id and t["owner"] == current_user), None)
    
    if task_index is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found"
        )
    
    tasks_db.pop(task_index)
    return None

@app.get("/me", response_model=UserResponse)
async def get_current_user_info(current_user: str = Depends(get_current_user)):
    user = users_db.get(current_user)
    return UserResponse(username=user["username"], email=user["email"])

if __name__ == "__main__":
    import uvicorn
    print("Starting API server on http://localhost:8000")
    print("API docs available at http://localhost:8000/docs")
    uvicorn.run(app, host="0.0.0.0", port=8000)
`,
    hints: [
      "Install dependencies: pip install fastapi uvicorn pyjwt bcrypt python-multipart",
      "Use Pydantic for automatic request validation",
      "Store JWT tokens in Authorization header: Bearer <token>",
      "Always hash passwords - never store plain text",
      "FastAPI auto-generates API docs at /docs endpoint"
    ]
  },
  {
    id: 10,
    title: "Markdown Blog with CMS",
    technology: "all",
    week: 4,
    difficulty: "Advanced",
    duration: "7 hours",
    description: "Build a full-featured blog with markdown support, syntax highlighting, and a content management system.",
    objectives: [
      "Parse and render markdown",
      "Implement syntax highlighting for code blocks",
      "Create a rich text editor",
      "Build admin dashboard for content management"
    ],
    requirements: [
      "React frontend with markdown rendering",
      "Python backend for content storage",
      "Rich markdown editor with preview",
      "Syntax highlighting for code blocks",
      "Tag and category system",
      "Search functionality",
      "SEO-friendly URLs",
      "Image upload support"
    ],
    starterCode: `# Available as separate project template
# Includes:
# - Frontend: React with react-markdown
# - Backend: FastAPI with file-based storage
# - Editor: react-simplemde-editor
# - Syntax: Prism.js for highlighting
`,
    solution: "Complete solution provided as separate repository with detailed setup instructions",
    hints: [
      "Use react-markdown for rendering",
      "Add rehype-highlight for syntax highlighting",
      "Store markdown files with frontmatter (title, date, tags)",
      "Use slugify for SEO-friendly URLs",
      "Implement debounced search for better UX"
    ]
  }
];

export default projectsData;
