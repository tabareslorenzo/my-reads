import React, { Component } from 'react';
import '../App.css'

class BookShelfChanger extends Component {

    handleChange = e => {
        console.log(e.target.value);
        this.props.change(e.target.value);
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <form>
                <select onChange={this.handleChange}>
                        
                        <option value="move" disabled selected>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </form> 
                </div>
        );
    }
}

export default BookShelfChanger;