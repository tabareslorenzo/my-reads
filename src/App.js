import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './Pages/ListBooks'
import SearchBooks from './Pages/SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchbooks: [],
    showSearchPage: false
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then(books => {
      this.setState({books})
      // url={book.imageLinks.thumbnail}
      // title={book.title}
      // author={book.author[0]}>
      // console.log(this.state);
      // console.log(this.state.books[0].imageLinks.thumbnail);
      // console.log(this.state.books[0].authors[0]);
    })
  }

  change = (title, loc) =>
  {
    console.log(title, loc);
    const {books} = this.state;
    const book = books.filter(book => book.title === title)[0];
    BooksAPI.update(book.id, loc).catch(err => console.log(err));
    book.shelf = loc;
    if(loc === 'none')
    {
      this.setState((prevState) => ({
        books: prevState.books.filter(bk => bk.id !== book.id)
      }))
    }
    else{
      this.setState((prevState) => ({
        books: prevState.books.filter(bk => bk.id !== book.id).concat(book)
      }))
    }

  }
  change = (title, loc) =>
  {
    console.log(title, loc);
    const {searchbooks} = this.state;
    const book = searchbooks.filter(book => book.title === title)[0];
    BooksAPI.update(book.id, loc).catch(err => console.log(err));
    book.shelf = loc;
    if(loc === 'none')
    {
      this.setState((prevState) => ({
        books: prevState.books.filter(bk => bk.id !== book.id)
      }))
    }
    else{
      this.setState((prevState) => ({
        books: prevState.books.filter(bk => bk.id !== book.id).concat(book)
      }))
    }

  }
  toListPage = () => {
    this.setState({ 
      showSearchPage: false,
      searchbooks: []
    })
  }
  handleSearch = async (search) => {
    console.log(search);
    const books = await BooksAPI.search(search);
    console.log(books);
    this.setState({ searchbooks: books })
  }
  render() {
    const {searchbooks, books} = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
          change={this.change} 
          toListPage={this.toListPage} 
          handleSearch={this.handleSearch}
          books={searchbooks}
          ></SearchBooks>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks change={this.changeSearch} books={books}></ListBooks>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
