import React from 'react'

const Genres = props => {

    const genres = props.genres.map((genre, i) => 
        <ul key={i}> <div className="card">
        <div className="card-body">
            <h5 className="card-title">{genre.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Add Book</a>
        </div>
        </div>
        </ul>
        )
        
    return (
        <div>
            { props.loading ? <h4>Loading...</h4> : genres }
        </div>
      
    )
}

export default Genres

