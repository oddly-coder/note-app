import { useState } from 'react';
import './textArea.css';

function TextArea({saveText}) {
    const [inputedText, setInputedText] = useState({})
    const handleSubmit = (e) =>{
        e.preventDefault()
        saveText(inputedText)
    };
    
    const handleChange = (e) =>{
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        const newNote = values =>({...values, [name] : value})
        setInputedText(newNote)
    };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input name="heading" placeholder='Note heading...' onChange={handleChange}
        className="form-control form-control-sm" value={inputedText.heading}/>
        <textarea className="text-area" name="body"  id="text-content" value={inputedText.body} onChange={handleChange}/>
        <button type="submit" className="btn btn-primary" id="btn">Save</button>
      </form>
    </div>
  );
}

export default TextArea;