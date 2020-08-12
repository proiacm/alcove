import React from 'react'


const Genre = props => {

    return (
        <div key={props.genre.id}> <div className="card">
        <div className="card-body">
            <h5 className="card-title"> {props.genre.name} </h5>
            {/* <p className="card-text"><Books/></p> */}
            <a href="#" className="card-link">Add Book</a>
        </div> 
        </div><br/>
        </div>
      
    )
}

export default Genre

