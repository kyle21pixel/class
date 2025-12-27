import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const CodeEditor = ({ value, onChange, language = 'javascript' }) => {
  const getLanguageExtension = () => {
    switch (language) {
      case 'python':
        return [python()]
      case 'javascript':
      case 'jsx':
        return [javascript({ jsx: language === 'jsx' })]
      default:
        return [javascript()]
    }
  }

  return (
    <CodeMirror
      value={value}
      height="100%"
      theme={oneDark}
      extensions={getLanguageExtension()}
      onChange={(value) => onChange(value)}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLineGutter: true,
        highlightSpecialChars: true,
        foldGutter: true,
        drawSelection: true,
        dropCursor: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        rectangularSelection: true,
        crosshairCursor: true,
        highlightActiveLine: true,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        searchKeymap: true,
        foldKeymap: true,
        completionKeymap: true,
        lintKeymap: true,
      }}
      style={{
        fontSize: '14px',
        height: '100%',
        flex: 1,
      }}
    />
  )
}

export default CodeEditor
