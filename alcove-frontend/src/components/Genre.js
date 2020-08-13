import React from 'react'
import Book from '../components/Book'



const Genre = props => {


    return (
        <div key={props.genre.id}> <div className="card">
        <div className="card-body">
            <h5 className="card-title"> {props.genre.name.toUpperCase()} </h5>
            <p className="card-text"></p>
            <a href="#" className="card-link">Add Book</a>
        </div> 
        </div><br/>
        </div>
      
    )
}

export default Genre

