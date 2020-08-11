import React from 'react'

const Genres = props => {

    const genre = props.genres.map((genre, i) => <li key={i}>{genre.name}</li>)
    // console.log(genre)
    return (
        <div>
            {genre}
        </div>
    )
}

export default Genres