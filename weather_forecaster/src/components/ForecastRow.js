import React, { Component } from "react";
import "../styles/ForecastRow.css";

class ForecastRow extends Component {
    render() {
        const location = this.props.location;
        const weather = this.props.forecasts;

        return (
            <tr>
                <td>{location}</td>
                <td>{weather}</td>
            </tr>
        );
    }
};


export default ForecastRow;