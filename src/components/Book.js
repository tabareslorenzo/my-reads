import React, { Component } from 'react';
import '../App.css'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    change = (loc) => {
        const {title} = this.props;
        this.props.change(title, loc);
        console.log(title, loc);
    }
    render() {
        const {url, title, author} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
                <BookShelfChanger change={this.change}></BookShelfChanger>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        );
    }
}

export default Book;