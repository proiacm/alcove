import React, { Component } from 'react';

class BookForm extends Component {

    state = {
        genre_id: "",
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

    handleSelectChange = event => {
        this.setState ({
            genre_id: parseInt(event.target.options[event.target.selectedIndex].value)
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const book = {
            genre_id: this.state.genre_id,
            title: this.state.title,
            author: this.state.author,
            quotes: this.state.quotes
        }
        this.props.addBook(book)
        console.log(book)
        const genre_id = this.state.genre_id
        this.setState({
            genre_id: "",
            title: "",
            author: "",
            quotes: ""
        })
        this.props.history.push(`/genres/${genre_id}`)
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                <h4>Add New Book</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Select Genre:<br/>
                    <select name='genre_id' value={this.state.genre_id} onChange={this.handleSelectChange}>
                    <option selected value> -- select a genre -- </option>
                        { this.props.genres.map((genre, i) => <option key={i} value={genre.id} > {genre.name}</option>)}
                    </select></label><br/>  
                    <label>Title:<br/><input type="text" name='title' value={this.state.title} onChange={this.handleChange} placeholder="Title"/></label><br/>
                    <label>Author:<br/><input type="text" name='author' value={this.state.author} onChange={this.handleChange} placeholder="Author"/></label><br/>
                    <label>Add memorable quote or note:<br/><input type="text" name='quotes' value={this.state.quotes} onChange={this.handleChange} placeholder="This stuck with me.."/></label><br/>
                    <input type="submit"/>
                </form>
                </div>
            </div>
        )
    }
}

export default BookForm
