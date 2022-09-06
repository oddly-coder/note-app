import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import data from './data.json';

//components
import SavedText from './components/savedText';
import TextArea from './components/textArea';

function App() { 
  const [text, setText] = useState(data);

  const saveText = (value) =>{
    if(value.body.trim().length > 0){
      let d = new Date();
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      let presentTime = d.getHours() + ":" +  d.getMinutes() + " " + 
      "|" + d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear()
      console.log(presentTime)
      let newText = [...text, {body : value.body, id: text.length + 1, heading : value.heading, date: presentTime}];
      setText(newText)
    }
  };
  const deleteItem = (contentId) =>{
    let item = text.filter(notes=>{
      return notes.id != contentId
    })
    setText(item)
  };
  
  console.log(text)
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<SavedText text={text} deleteItem = {deleteItem} />}/>
          <Route path="textArea" element={<TextArea saveText = {saveText} text={text}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
