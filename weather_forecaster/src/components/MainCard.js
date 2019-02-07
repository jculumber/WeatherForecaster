import React, { Component } from "react";
import "../styles/MainCard.css";
import ForecastTable from "./ForecastTable";
import ForecastRow from "./ForecastRow";
import MyFancyComponent from "./Map";
import data from "../../src/data.json";

class MainCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row p-4">
                    <div className="col-5">
                        <div className="row">
                            <h1>{data.location.city + "," + data.location.region}</h1>
                            <button type="button" className="btn btn-white btn-outline-dark">Remove</button>
                        </div>
                        <div className="row">
                            <ForecastTable />
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row float-right">
                            <h4>Today</h4>
                            <h5>{data.forecasts[0].text}</h5>
                            <h2 className="high">High: {" " + data.forecasts[0].high}</h2>
                            <h2 className="low">Low: {" " + data.forecasts[0].low}</h2>
                        </div>
                        <div className="row">
                            <MyFancyComponent />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default MainCard;