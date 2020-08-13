import React, { Component } from 'react';

class BookForm extends Component {

    state = {
        genre_id: null,
        title: "",
        author: "",
        quotes: "",
        completed: false

    }

    handleChange = event => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleOnSubmit(this.state.name)
        this.setState({
            genre_id: null,
            title: "",
            author: "",
            quotes: "",
            completed: false
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select name='genre_id' value={this.state.genre_id} onChange={this.handleChange}>
                        { this.props.genres.map((genre, i) => <option key={i} value={genre.id}> {genre.name} </option>)}
                    </select>    
                    <input type="text" name='title' value={this.state.title} onChange={this.handleChange} placeholder="Title"/>
                    <input type="text" name='author' value={this.state.author} onChange={this.handleChange} placeholder="Author"/>
                    <input type="text_area" name='quotes' value={this.state.quotes} onChange={this.handleChange} placeholder="Quotes"/>
                    <input type="checkbox" name='completed'/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default BookForm
