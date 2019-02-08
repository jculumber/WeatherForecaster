import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isloaded: false,
            list: [],
        };
    }
    
    componentDidMount() {
        let cityName = this.props.city;    
        let queryURL = "https://api.openweathermap.org/data/2.5/forecast?appid=05e4032b5d266749881b97c4660b4974&q=" + cityName + "&cnt=7&units=imperial"
        
        axios.get(queryURL)
        .then(res => res.json())
        .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        list: result.list
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, list} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(list);
            return (
                <ul>
                    {list.map(day => (
                        <li key={day.weather.main}>
                            {day.weather.main}
                        </li>
            ))}
                </ul>
            )
        }
    }
}
    export default Weather
