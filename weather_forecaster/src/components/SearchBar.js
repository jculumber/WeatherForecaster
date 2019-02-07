import React, { Component } from "react";
import "../styles/SearchBar.css";

class SearchBar extends Component {
    render() {
        return (
            <form className="py-4">
                <input type="text" placeholder="Enter Location" className="inputbar"/>
                <button className="ml-2 btn btn-primary button-add">Add City</button>
            </form>
        );
    }
};


export default SearchBar;