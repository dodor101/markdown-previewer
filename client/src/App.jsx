import { useState } from 'react'
import Markdown from "react-markdown"
function App() {

  const [ textarea, setTextarea ] = useState("");
  const [ editorView, setEditorView ] = useState(true);
const [previewView, setPreviewView] = useState(true);

  const handleEditorView = () => {
    setEditorView(false);
    setPreviewView(true);
  }

  const handlePreviewer = () => {
    setEditorView(true);
    setPreviewView(false);
  }

  const handleChange = (e) => {
    const textInput = e.target.value;
    setTextarea(textInput)
  }
  return (
    <>
      <div className="container">
        <div className="editor">
          {editorView && (
            <>
              <header className="editor-header">
                <h2>✍️ Editor</h2>
                <button onClick={handleEditorView}>X</button>
              </header>{' '}
              <textarea placeholder="Enter Text" name="content" id="content" onChange={handleChange}></textarea>
            </>
          )}
        </div>
        <div className="previewer">
          {previewView && (
            <>
              <header className="previewer-header">
                <h2>Previewer 👁️</h2> <button onClick={handlePreviewer}>X</button>
              </header>
              <Markdown className="markdown">{`${textarea}`}</Markdown>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App
