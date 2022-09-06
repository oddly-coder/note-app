import {Link} from 'react-router-dom';
import './createButton.css';


function CreateButton(props) {
  return (
    <div className="container">
      <Link to={props.link}>
        <button className="btn btn-primary" type="submit">Create note</button>
      </Link>
    </div>
  );
}
export default CreateButton;