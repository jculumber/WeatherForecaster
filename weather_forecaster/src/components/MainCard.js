import React, { Component } from "react";
import "../styles/MainCard.css";
import ForecastTable from "./ForecastTable";
import ForecastRow from "./ForecastRow";
//import MyFancyComponent from "./Map";
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
                                {/* {this.state.data.map (row => (
                                   <ForecastRow
                                    key={row.id}
                                    id={row.id}
                                   /> 
                                ))} */}
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <h1>{data.forecasts[0].day}</h1>
                        </div>
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default MainCard;