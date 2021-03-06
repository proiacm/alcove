export const getBooks = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_BOOKS'})
        fetch('/books')
        .then(res => res.json())
        .then(books => dispatch({ type: 'BOOKS_LOADED', payload: books}))
    }
}

export const addBook = (book) => {
    return dispatch => {
        dispatch({ type: 'ADDING_BOOK' })
        fetch('/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(book => dispatch({ type: 'BOOK_ADDED', payload: book}))
    }
}

export const deleteBook = (id) => {
    return dispatch => {
        dispatch({ type: 'DELETING_BOOK' })
        fetch(`/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(() => dispatch({ type: 'BOOK_DELETED', payload: id}))
    }
}