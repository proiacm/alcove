import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genres from '../components/Genres'
import { getGenres } from '../actions/genres'

class GenresContainer extends Component {

    componentDidMount(){
        this.props.getGenres()
    }

    render() {
        
        return (
            <div>
                <Genres genres={this.props.genres} />
            </div>
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