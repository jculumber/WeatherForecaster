import React, { Component } from "react";
import "../styles/ForecastTable.css";
import ForecastRow from "./ForecastRow";

class ForecastTable extends Component {
    render() {
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>
                            <ForecastRow date="June 28th"/>
                        </td>
                        <th scope="row"></th>
                        <td>
                            <ForecastRow />
                        </td>
                        <th scope="row"></th>
                        <td>
                            <ForecastRow />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
};


export default ForecastTable;