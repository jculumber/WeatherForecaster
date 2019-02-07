import React, { Component } from "react";
import "../styles/ForecastRow.css";

class ForecastRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    <ul>
                        <li>
                            {new Date((this.props.date * 1000)).toDateString()}
                        </li>
                        <li>
                            {this.props.weather}
                        </li>
                    </ul>
                </td>
                <td>
                    <h5>High:{" " + Math.floor(this.props.high)}</h5>
                </td>
                <td>
                    <h5>Low:{" " + Math.floor(this.props.low)}</h5>
                </td>
            </tr>
        );
    }
};


export default ForecastRow;