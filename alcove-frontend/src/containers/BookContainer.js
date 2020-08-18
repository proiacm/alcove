// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addBook } from '../actions/books';
// import { getBooks } from '../actions/books';


// class BookContainer extends Component {

//     componentDidMount() {
//         this.props.getBooks()
//     }

//     handleSubmit = book => {
//         this.props.addBook(book)
//     }

//     render() {
        
//         const books = this.props.books.map((book, i) => console.log(book))
        
//         return (
//             <div>
//                 {/* <BookForm genres={this.props.genres} handleOnSubmit={this.handleSubmit}/> */}
//                  {/* { this.props.loading ? <h4>Loading...</h4> : books } */}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         books: state.bookReducer.books
//     }
// }

// export default connect(mapStateToProps, { getBooks, addBook })(BookContainer);