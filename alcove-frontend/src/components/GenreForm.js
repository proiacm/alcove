import React, { Component } from 'react'

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
        this.props.handleOnSubmit(this.state.name)
        // console.log(this.state.name)
        this.setState({
            name: ""
        })
    }

    render() {
        return (
                <div className="card text-center">
                <div className="card-body">
                    <h4>Add New Genre</h4> 
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Genre"/><br/><br/>
                        <input type="submit"/>
                    </form><br/>
                </div>
                </div>  
        )
    }
}

export default GenreForm