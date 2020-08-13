import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genre from '../components/Genre';
import { getGenres } from '../actions/genres';
import { addGenre } from '../actions/genres';
import GenreForm from '../components/GenreForm';
import Book from '../components/Book';


class GenresContainer extends Component {

    componentDidMount(){
        this.props.getGenres()
    }

    handleSubmit = name => {
        this.props.addGenre({name: name})
    }

    render() {

        const genres = this.props.genres.map((genre, i) => {
            const books = genre.books.map(book => <Book book={book}/>)

            return (
                <div>
                    <Genre key={i} genre={genre} />
                    {/* {books} */}
                </div>
            )
        })

      
        return (
            <>
                <GenreForm handleOnSubmit={this.handleSubmit}/>
                { this.props.loading ? <h4>Loading...</h4> : genres}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        genres: state.genreReducer.genres,
        loading: state.genreReducer.loading
    }
}

export default connect(mapStateToProps, { getGenres, addGenre })(GenresContainer);