import React, { Component } from 'react';
import { connect } from 'react-redux';
import Books from '../components/Books'

class BooksContainer extends Component {
    render() {
        return (
            <div>
                {/* <Books books={this.props.books} /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.bookReducer.books,
        loading: state.bookReducer.loading
    }
}

export default connect(mapStateToProps)(BooksContainer);