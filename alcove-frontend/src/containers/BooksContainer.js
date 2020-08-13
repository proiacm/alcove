import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/books';
import { getGenres } from '../actions/genres';
import Book from '../components/Book';
import BookForm from '../components/BookForm';

class BooksContainer extends Component {

    componentDidMount() {
        this.props.getBooks(),
        this.props.getGenres()
    }

    handleSubmit = name => {
        this.props.addBook({name: name})
    }

    render() {
            console.log(this.props)
        // const books = this.props.books.map((book, i) => <Book key={i} book={book} />)
        
        return (
            <div>
                <h4>Add New Book</h4>
                <BookForm handleOnSubmit={this.handleSubmit}/>
                 {/* { this.props.loading ? <h4>Loading...</h4> : books } */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.bookReducer.books,
        loading: state.bookReducer.loading,
        genres: state.genreReducer.genres
    }
}

export default connect(mapStateToProps, { getBooks, getGenres })(BooksContainer);