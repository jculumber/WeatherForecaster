import React, { Component } from "react";
import "../styles/SearchBar.css";

class SearchBar extends Component {
    render() {
        return (
            <form className="py-4">
                <input type="text" placeholder="Add New City" />
                <button className="ml-2">Add City</button>
            </form>
        );
    }
};


export default SearchBar;