import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class GenreContainer extends Component {

    render() {

        const genre = this.props.genres.find( genre => genre.id == this.props.match.params.id)
        const books = genre.books.map(book => <Book book={book}/>)

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

export default connect(mapStateToProps)(GenreContainer)