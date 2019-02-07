import axios from "axios";

export default {
    //Get Weather information
    getWeather: function(params) {
        return axios.get("https://api.openweathermap.org/data/2.5/forecast?appid=05e4032b5d266749881b97c4660b4974&q=" + params + "&cnt=7&units=imperial")
    }
}