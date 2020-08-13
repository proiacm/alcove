export const getBooks = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_BOOKS'})
        fetch('/books')
        .then(res => res.json())
        .then(books => console.log(books))
    }
}

