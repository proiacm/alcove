import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genres from '../components/Genres'

class GenresContainer extends Component {

    render() {
        
        return (
            <div>
                {/* <Genres genres={this.props.genres} /> */}
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

export default connect(mapStateToProps)(GenresContainer);