import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook } from '../actions/books'

class GenreContainer extends Component {

    handleClick = event => {
        this.props.deleteBook(event.target.id)
    }


    render() {

        const genre = this.props.genres.find( genre => genre.id == this.props.match.params.id)
        const books = genre.books.map(book => <Book book={book} handleClick={this.handleClick}/>)

        return (
            <div className="card text-center" >
                <h3>{genre.name}</h3>
                    {books}
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        genres: state.genreReducer.genres
    }
}

export default connect(mapStateToProps, { deleteBook })(GenreContainer)