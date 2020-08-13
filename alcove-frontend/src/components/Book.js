import React from 'react'

const Book = props => {

    function handleClick(){
        console.log("I've been clicked!")
    }
  
    return (
        <div className="card text-center" >
        <div className="card-body">
            <h5 className="card-title">{props.book.title}</h5>
            <p className="card-text"> by {props.book.author} </p>
            <a href="#" className="card-link" onClick={handleClick}>Add Favorite Quotes</a>
        </div>
        </div>
      
    )
}

export default Book
