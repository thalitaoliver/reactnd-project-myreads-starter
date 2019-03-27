import React, { Component } from 'react'

class BookList extends Component {
    render(){
        return(
            <div className="bookshelf-books">
            <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.url})`}}></div>
                                <div className="book-shelf-changer">
                                    <select>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.name}</div>
                            <div className="book-authors">{book.author}</div>
                        </div>
                    </li>
                ))}     
            </ol>
            </div>
        )
    }
}

export default BookList