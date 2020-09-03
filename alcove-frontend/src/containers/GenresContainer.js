import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genre from '../components/Genre';
import { getGenres } from '../actions/genres';
import { addGenre } from '../actions/genres';
import GenreForm from '../components/GenreForm';

class GenresContainer extends Component {

    state = {
        search: ""
    }

    componentDidMount(){
        this.props.getGenres()
    }

    handleSubmit = name => {
        this.props.addGenre({name: name})
    }

    handleSearch = event => {
        this.setState({
            search: event.target.value
        })
    }

    render() {

        const filteredGenres = this.props.genres.filter(genre => {
            return (
                genre.name.toLowerCase().includes(this.state.search.toLowerCase())  
            )
        })
        const genres = filteredGenres.map((genre, i) => {
            return (
                <div>
                    <Genre key={i} genre={genre} />
                </div>
            )
        })
      
        return (
            <>
                {/* <input type="text" placeholder="Search Genres" onChange={this.handleSearch}/> */}
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