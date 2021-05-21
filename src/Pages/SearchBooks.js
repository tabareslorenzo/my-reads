import React, { Component } from 'react';
import '../App.css'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'

class SearchBooks extends Component {
    changePage = () =>
    {
        this.props.toListPage();
    }
    handleSearch  = (search) =>
    {
        console.log(search);
        this.props.handleSearch(search)
    }
    change = (title, loc) =>
    {
        console.log(title, loc);
        this.props.change(title, loc)
    }
    render() {
        return (
            <div className="search-books">
            <SearchBar changePage={this.changePage} handleSearch={this.handleSearch}></SearchBar>
            <SearchResults change={this.change} books={this.props.books}></SearchResults>
          </div>
        );
    }
}

export default SearchBooks;