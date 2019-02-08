import React, { Component } from "react";
import "../styles/ForecastRow.css";
import Weather from "../utils/API-Yahoo_Weather"
import data from "../data.json"

class ForecastRow extends Component {
    render() {
        return (
            <tr>
                <th scope="row"></th>
                <td>
                    <ul>
                        <li>
                            {new Date((this.props.date * 1000)).toDateString()}
                        </li>
                        <li>
                            <Weather 
                                city={data.city.name}
                                list={this.props.list}/>
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