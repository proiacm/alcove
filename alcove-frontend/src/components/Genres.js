import React from 'react'
import Books from '../components/Books'

const Genres = props => {

    const genres = props.genres.map((genre, i) => 
        <div key={i}> <div className="card">
        <div className="card-body">
            <h5 className="card-title">{genre.name}</h5>
            {/* <p className="card-text"><Books/></p> */}
            <a href="#" className="card-link">Add Book</a>
        </div> 
        </div><br/>
        </div>
        )
        
    return (
        <div>
            { props.loading ? <h4>Loading...</h4> : genres }
        </div>
      
    )
}

export default Genres

