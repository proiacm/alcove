import React, { Component } from 'react';
import { connect } from 'react-redux';
import Books from '../components/Book'

class BooksContainer extends Component {
    render() {
        const books = this.props.books.map((book, i) => <li key={i}> {book.title} </li>)
        return (
            <div>
                 { this.props.loading ? <h4>Loading...</h4> : books }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.bookReducer.books,
        loading: state.bookReducer.loading
    }
}

export default connect(mapStateToProps)(BooksContainer);