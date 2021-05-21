import React, { Component } from 'react';
import BookShelf from '../components/BookShelf'
import '../App.css'


class ListBooks extends Component {
    change = (title, loc) =>
    {
        console.log(title, loc);
        this.props.change(title, loc)
    }
    render() {
        const CurrentlyReading = "currentlyReading"
        const WantToRead = "wantToRead"
        const Read = "read"
        const {books} = this.props;
        return (
            <div className="list-books-content">
            <div>
                <BookShelf
                change={this.change}
                books={
                    books.filter(book => book.shelf === CurrentlyReading)
                }
                title="Currently Reading"
                ></BookShelf>

                 <BookShelf
                change={this.change}
                books={
                    books.filter(book => book.shelf === WantToRead)
                }
                title="Want to Read"
                ></BookShelf>

                 <BookShelf
                change={this.change}
                books={
                    books.filter(book => book.shelf === Read)
                }
                title="Read"
                ></BookShelf>
              
            </div>
          </div>
        );
    }
}

export default ListBooks;