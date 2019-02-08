import React, { Component } from "react";
import "../styles/MainCard.css";
import ForecastTable from "./ForecastTable";
import Map from "./Map";
import data from "../../src/data.json";

class MainCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row p-4">
                    <div className="col-5">
                        <div className="row">
                            <h1>{data.city.name + "," + data.city.country}</h1>
                            <button type="button" className="btn btn-white btn-outline-dark">Remove</button>
                        </div>
                        <div className="row">
                            <ForecastTable />
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row float-right">
                            <ul>
                                <li>
                                    <h4>Today</h4>
                                </li>
                                <li>
                                    <h5>{data.list[0].weather[0].main}</h5>
                                </li>
                            </ul>
                            <h2 className="high">High: {" " + Math.floor(data.list[0].main.temp_max)}</h2>
                            <h2 className="low">Low: {" " + Math.floor(data.list[0].main.temp_min)}</h2>
                        </div>
                        <div className="row">
                            <Map
                                lat={data.city.coord.lat}
                                lon={data.city.coord.lon}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default MainCard;