
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

  const [text,setText] = useState('');
  const [result,setResult] = useState('');

  const handleClick = async () => { 
    const val = await axios.post("/api/NLP-trigger",{text:text})
    setResult(val.data)
  }

  return (
    <div>
    <h1> ~ Sentiment Analysis </h1>
      <textarea id="text-input" rows="20" cols="100" value={text} onChange={e => setText(e.target.value)}></textarea>
      <br></br>
      <button id="analyze-button" onClick={handleClick}>Analyze</button>
      <h1 id='result'>{result}</h1>
    </div>
  );
}

export default App;
