import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genres from '../components/Genres';
import { getGenres } from '../actions/genres';
import { BrowserRouter as Router, Route } from 'react-router-dom';;

class GenresContainer extends Component {

    componentDidMount(){
        this.props.getGenres()
    }

    render() {
        
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/genres" component={Genres} />
                    {/* <Route exact path="/books" component={Books} />     */}
                </div>
            </Router>
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