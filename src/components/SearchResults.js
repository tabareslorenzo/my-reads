import React, { Component } from 'react';
import '../App.css'
import Book from './Book'

class SearchResults extends Component {
    change = (title, loc) => {
        console.log(title, loc);
        this.props.change(title, loc);
    }
    render() {
        const {books} = this.props
        return (
            <div className="search-books-results">
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
        );
    }
}

export default SearchResults;