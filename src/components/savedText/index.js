import './savedText.css';
import { useState } from 'react';


//components
import CreateButton from '../createButton';
import Note from '../note';


function SavedText({text, deleteItem}) {
  const[searchValue, setSearchValue] = useState([]);
  const[searching, setSearching] = useState(false);
    const handleChange = (e) =>{
        setSearchValue(e.currentTarget.value);
        setSearching(false);
    }
    const handleSubmit = () =>{
      let searchedItem = text.filter(items=>{
        return items.body.includes(searchValue)
      })
      setSearchValue(searchedItem);
      setSearching(true)
    }
    const displayNotes = (searching) =>{
      if(!searching){
        return(
          <div>{text.map(text=>{
            return(
              <Note key={text.id} text={text} deleteItem = {deleteItem}/>
            )  
          })}</div>
        )
      }
      else{
        return(
          <div>
          {searchValue.map(text=>{
            return(
              <Note   key={text.id} text={text} deleteItem = {deleteItem}/>
            )  
          })}
        </div>
        )
      }
    }
  return (
    <div className="texts-container">
      <div className="search-container">
            <input placeholder="search notes..." type="search" onChange={handleChange}
            className='form-control form-control-sm' id="search" value={searchValue.body}/>

            <button className='btn btn-primary' onClick={handleSubmit}>Search</button>
      </div>
      {displayNotes(searching)}
      <CreateButton link="textArea"/>
    </div>
  );
}

export default SavedText;