export const getBooks = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_BOOKS'})
        fetch('/')
        .then(res => res.json())
        .then(books => dispatch({ type: 'BOOKS_LOADED', payload: books}))
    }
}

