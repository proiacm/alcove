export const getGenres = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_GENRES'})
        fetch('/genres')
        .then(res => res.json())
        .then(genres => dispatch({ type: 'GENRES_LOADED', payload: genres}))
    }
}

export const addGenre = (genre) => {
    return dispatch => {
        dispatch({ type: 'ADDING_GENRE' })
        fetch('/genres', {
            method: 'POST',
            body: JSON.stringify(genre),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(genre => dispatch({ type: 'GENRE_ADDED', payload: genre}))
    }
}