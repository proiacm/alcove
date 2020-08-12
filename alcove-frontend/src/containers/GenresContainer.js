import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genre from '../components/Genre'
import { getGenres } from '../actions/genres'

class GenresContainer extends Component {

    componentDidMount(){
        this.props.getGenres()
    }

    render() {
    
        const genres = this.props.genres.map((genre, i) => <Genre key={i} genre={genre}/>)
        
        return (
            <>
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

export default connect(mapStateToProps, { getGenres })(GenresContainer);