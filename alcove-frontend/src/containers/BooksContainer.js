import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/books';
import { getGenres } from '../actions/genres';
import BookForm from '../components/BookForm';

class BooksContainer extends Component {

    componentDidMount() {
        this.props.getGenres()
    }

    handleSubmit = book => {
        this.props.addBook(book)
    }

    render() {
        
        // const books = this.props.books.map((book, i) => <Book key={i} book={book} />)
        
        return (
            <div>
                {/* <BookForm genres={this.props.genres} handleOnSubmit={this.handleSubmit}/> */}
                 {/* { this.props.loading ? <h4>Loading...</h4> : books } */}
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        genres: state.genreReducer.genres
    }
}

export default connect(mapStateToProps, { getGenres, addBook })(BooksContainer);