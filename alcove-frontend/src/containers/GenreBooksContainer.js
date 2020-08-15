import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook } from '../actions/books'
import { getGenres } from '../actions/genres'

class GenreBooksContainer extends Component {

    componentDidMount(){
        this.props.getGenres()
    }

    componentDidUpdate(prevProps){
        // debugger
        if (prevProps.genres.find(g => g.id == this.props.match.params.id).books.length !== this.props.books.filter(b => b.genre.id == this.props.match.params.id).length){
            this.props.getGenres()
        }
    }

    handleClick = event => {
        this.props.deleteBook(event.target.id)

    }

    render() {
        // debugger
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
        genres: state.genreReducer.genres,
        books: state.bookReducer.books
    }
}

export default connect(mapStateToProps, { deleteBook, getGenres })(GenreBooksContainer)