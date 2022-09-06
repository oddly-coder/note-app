
import './note.css';


function Note({text, deleteItem}) {
  const handleDelete = (e) =>{
    e.preventDefault()
    deleteItem(e.currentTarget.id)
  };
  const selected = e =>{
    let itemToEdit = e.currentTarget.id
    return itemToEdit
  }
  
  return (
    <div className="container">
      <div key={text.id} className="note-container">
        <div value = {text.heading} className="text-heading">
          <b>{text.heading}</b>
        </div>
        <small className='text-date'>{text.date}</small>
        <p value = {text.body} id={text.id}>
            {text.body}
        </p>
        <button className="btn btn-danger" id={text.id} onClick = {handleDelete} type="submit">Delete</button>
        </div>  
    </div>
  );
}

export default Note;