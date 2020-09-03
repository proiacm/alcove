export const getGenres = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_GENRES'})
        fetch('/genres')
        .then(response => {
            if(response.ok) {
               console.log('Error!')
            }
            return response.json()
         })
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
        .then(genre => {
            return dispatch({ type: 'GENRE_ADDED', payload: genre})
        })
    }
}