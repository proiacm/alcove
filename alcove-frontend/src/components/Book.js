import React from 'react'
// import { Link } from 'react-router-dom';

const Book = props => {
  
    return (
        <div className="card text-center" >
        <div className="card-body">
            <h5 className="card-title">{props.book.title}</h5>
            <p className="card-text"> by {props.book.author} </p>
            {/* <Link to={`/books/${props.book.id}`}>Explore</Link>  */}
            <button id={props.book.id} onClick={props.handleClick}>Delete</button>
        </div>
        </div>
      
    )
}

export default Book