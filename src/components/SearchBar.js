import React, { Component } from 'react';
import '../App.css'

class SearchBar extends Component {
    changePage = () =>
    {
        this.props.changePage();
    }
    handleChange = (e) =>
    {
        console.log(e);
        console.log(e.target.value);
        this.props.handleSearch(e.target.value);
    }
    render() {

        return (
            <div className="search-books-bar">
                <button className="close-search" onClick={this.changePage}>Close</button>
                <div className="search-books-input-wrapper">
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>

                </div>
          </div>
        );
    }
}

export default SearchBar;