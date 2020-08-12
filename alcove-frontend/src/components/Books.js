import React from 'react'

const Books = props => {

    const books = props.books.map((book, i) => <li key={i}> {book.title} </li>)
        
    return (
        <div>
            { props.loading ? <h4>Loading...</h4> : books }
        </div>
      
    )
}

export default Books
