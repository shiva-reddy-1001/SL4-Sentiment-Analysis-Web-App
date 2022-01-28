
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

  const [text,setText] = useState('');
  const [result,setResult] = useState('');

  const handleClick = () => { 
    //console.log(process.env.REACT_APP_AZURE_KEY);
    var config = { 
      headers: {
      "Ocp-Apim-Subscription-Key": "3b74d3ea745a4d0cbd89ccb1886fc8b0"
      }
   };
   var body = {
    documents: [{
        id: 1,
        text: text
    }]
   };
   
  axios
    .post("https://sl4-nlp-api.cognitiveservices.azure.com/text/analytics/v3.2-preview.1/sentiment?opinionMining=true",
    body,
    config)
    .then(res => {
      setResult(res.data.documents[0].sentiment.toUpperCase())
      console.log(res.data)
    })
    .catch(err => console.error(err));
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
