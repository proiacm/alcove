import React, { Component } from 'react';
import { connect } from 'react-redux';

class Books extends Component {
    render() {
        return (
            <div>
                Book Component!
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

export default connect(mapStateToProps)(Books);