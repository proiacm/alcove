import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {

    render() {

        return (
            <div>
                <h1>Book Details</h1>
            </div>
        )
    }
}


export default connect()(BookDetails)
