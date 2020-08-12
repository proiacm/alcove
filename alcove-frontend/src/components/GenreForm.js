import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGenre } from '../actions/genres'

class GenreForm extends Component {

    state = {
        name: ""
    }

    handleChange = event => {
        this.setState ({
            name: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const genre = {name: this.state.name}
        this.props.addGenre(genre)
        this.setState({
            name: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addGenre })(GenreForm)