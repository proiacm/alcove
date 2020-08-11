import React from 'react'

const Genres = props => {

    const genres = props.genres.map((genre, i) => <li key={i}>{genre.name}</li>)
    // console.log(genre)
    return (
        <div>
            { props.loading ? <h4>Loading...</h4> : genres }
        </div>
    )
}

export default Genres