import React from 'react';
import Book from '../components/Book';
import { NavLink } from 'react-router-dom';



const Genre = props => {

    return (
        <div className="card text-center" >
        <div className="card-body">
            <h5 className="card-title">{props.genre.name}</h5>
            {/* <p className="card-text">  </p> */}
            <NavLink to={`/genres/${props.genre.id}`}>View Books in this Genre</NavLink>
        </div>
        </div>
      
    )
}

export default Genre

