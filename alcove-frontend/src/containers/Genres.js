import React, { Component } from 'react';
import { connect } from 'react-redux';

class Genres extends Component {

    render() {
        
        return (
            <div>
                Genres Component!
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

export default connect(mapStateToProps)(Genres);