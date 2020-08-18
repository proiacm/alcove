import React from 'react'

const Book = props => {

    return (
        <div className="card text-center" >
        <div className="card-body">
            <h5 className="card-title">{props.book.title}</h5>
            <p className="card-text"> by {props.book.author} </p>
            <p className="card-text"> Quotes: <li>{props.book.quotes}</li></p>
            <button id={props.book.id} onClick={props.handleClick}>Delete</button>
        </div>
        </div>
      
    )
}

export default Book