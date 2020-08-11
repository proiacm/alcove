export const getGenres = () => {
    return dispatch => {
        dispatch({ type: "LOADING_GENRES"})
        fetch('/genres')
            .then(res => res.json())
            .then(genres => dispatch({ type: "GENRES_LOADED", payload: genres}))
    }
}