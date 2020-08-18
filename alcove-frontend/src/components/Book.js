import React from 'react'

const Book = props => {
  
    return (
        <div className="card text-center" >
        <div className="card-body">
            <h5 className="card-title">{props.book.title}</h5>
            <p className="card-text"> by {props.book.author} </p>
            <button id={props.book.id} onClick={props.handleClick}>Delete</button>
            <br/><br/>
            <h5>Add Memorable Quotes:</h5>
            <form>
                <input type="text" placeholder="Quotes"/><br/> <br/>
                <input type="text" placeholder="Quotes"/><br/> <br/>
                <input type="submit" />
            </form>
        </div>
        </div>
      
    )
}

export default Book