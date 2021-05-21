import React, { Component } from 'react';
import Book from './Book'
import '../App.css'

class BookShelf extends Component {
    change = (title, loc) => {
        console.log(title, loc);
        this.props.change(title, loc);
    }
    render() {
        const {books, title} = this.props;

        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books !== undefined && books.length>0 &&
                        books.map(book => <li>
                            <Book change={this.change}
                            url={book.imageLinks
                                ? book.imageLinks.thumbnail
                                : 'icons/book-placeholder.svg'}
                                title={book.title}
                                author={book.authors? book.authors[0] : "no author"}>
                            </Book>
                        </li>)
                    }
                    </ol>
                  </div>
                </div>
        );
    }
}

export default BookShelf;