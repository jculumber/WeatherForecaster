import React, { Component } from "react";
import "../styles/ForecastRow.css";

class ForecastRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.date}</td>
            </tr>
        );
    }
};


export default ForecastRow;