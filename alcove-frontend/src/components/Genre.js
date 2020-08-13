import React from 'react';
import { Link } from 'react-router-dom';



const Genre = props => {
    
    return (
        <div className="card text-center" >
        <div className="card-body">
            <h3 className="card-title">{props.genre.name}</h3>
            <Link to={`/genres/${props.genre.id}`}>View Books in this Genre</Link>
           
        </div>
        </div>
      
    )
}

export default Genre

