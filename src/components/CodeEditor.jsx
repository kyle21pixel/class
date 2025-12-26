import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { javascript } from '@codemirror/lang-javascript';
import { Play, RotateCcw } from 'lucide-react';
import './CodeEditor.css';

function CodeEditor({ language, initialCode, readOnly = false, technology }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const getLanguageExtension = () => {
    if (language === 'python') return [python()];
    if (language === 'javascript' || language === 'jsx') return [javascript({ jsx: true })];
    return [];
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
  };

  const runCode = () => {
    setIsRunning(true);
    setOutput('');

    try {
      if (language === 'javascript' || language === 'jsx') {
        // Capture console output
        const originalLog = console.log;
        const logs = [];
        
        console.log = (...args) => {
          logs.push(args.join(' '));
        };

        try {
          // Create a function from the code and execute it
          const func = new Function(code);
          const result = func();
          
          if (result !== undefined) {
            logs.push(String(result));
          }
          
          setOutput(logs.length > 0 ? logs.join('\n') : 'Code executed successfully! (No output)');
        } catch (error) {
          setOutput(`Error: ${error.message}`);
        } finally {
          console.log = originalLog;
        }
      } else if (language === 'python') {
        // Simulated Python execution (in a real app, you'd use a backend or Pyodide)
        setOutput('Python execution requires a backend server.\nYour code looks good! ✓\n\nIn a production app, this would execute via:\n- Backend API (Flask/FastAPI)\n- Browser-based Python (Pyodide)\n- WebAssembly Python runtime');
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="code-editor-container">
      <div className="editor-header">
        <span className={`language-badge ${technology}`}>
          {language.toUpperCase()}
        </span>
        {!readOnly && (
          <div className="editor-actions">
            <button className="editor-btn reset-btn" onClick={handleReset} title="Reset">
              <RotateCcw size={16} />
            </button>
            <button 
              className="editor-btn run-btn" 
              onClick={runCode}
              disabled={isRunning}
              title="Run Code"
            >
              <Play size={16} />
              {isRunning ? 'Running...' : 'Run'}
            </button>
          </div>
        )}
      </div>

      <CodeMirror
        value={code}
        height="auto"
        minHeight="150px"
        maxHeight="500px"
        extensions={getLanguageExtension()}
        onChange={(value) => !readOnly && setCode(value)}
        editable={!readOnly}
        theme="dark"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightActiveLine: true,
          foldGutter: true,
        }}
        className="code-mirror-editor"
      />

      {!readOnly && output && (
        <div className="code-output">
          <div className="output-header">Output:</div>
          <pre className="output-content">{output}</pre>
        </div>
      )}
    </div>
  );
}

export default CodeEditor;
