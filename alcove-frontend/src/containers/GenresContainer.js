import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genre from '../components/Genre'
import { getGenres } from '../actions/genres'

class GenresContainer extends Component {

    componentDidMount(){
        this.props.getGenres()
    }

    render() {
    
        const genres = this.props.genres.map((genre) => 
            <div key={genre.id}> <div className="card">
        <div className="card-body">
            <h5 className="card-title"> <Genre genre={genre} /> </h5>
            {/* <p className="card-text"><Books/></p> */}
            <a href="#" className="card-link">Add Book</a>
        </div> 
        </div><br/>
        </div>
        )
        
        return (
            <>
                {this.props.loading ? <h4>Loading...</h4> : genres }
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