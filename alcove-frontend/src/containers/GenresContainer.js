import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genre from '../components/Genre';
import { getGenres } from '../actions/genres';
import { addGenre } from '../actions/genres';
import GenreForm from '../components/GenreForm';

class GenresContainer extends Component {

    componentDidMount(){
        this.props.getGenres()
    }

    handleSubmit = name => {
        this.props.addGenre({name: name})
    }

    render() {
    
        const genres = this.props.genres.map((genre, i) => <Genre key={i} genre={genre} />)
        console.log(genres)

        
        return (
            <>
                <h4>Add New Genre</h4>
                <GenreForm handleOnSubmit={this.handleSubmit}/>
                { this.props.loading ? <h4>Loading...</h4> : genres }
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