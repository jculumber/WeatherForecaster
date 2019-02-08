import React, { Component } from "react";
import "../styles/ForecastTable.css";
import ForecastRow from "./ForecastRow";
import data from "../data.json";

class ForecastTable extends Component {
    render() {
        return (
            <table className="table">
                <tbody>
                    <ForecastRow 
                        date={data.list[0].dt}
                        weather={data.list[0].weather[0].main}
                        high={data.list[0].main.temp_max}
                        low={data.list[0].main.temp_min}
                    />
                    <ForecastRow
                        date={data.list[1].dt}
                        weather={data.list[1].weather[0].main}
                        high={data.list[1].main.temp_max}
                        low={data.list[1].main.temp_min}
                    />
                    <ForecastRow
                        date={data.list[2].dt}
                        weather={data.list[2].weather[0].main}
                        high={data.list[2].main.temp_max}
                        low={data.list[2].main.temp_min}
                    />
                </tbody>
            </table>
        );
    }
};


export default ForecastTable;