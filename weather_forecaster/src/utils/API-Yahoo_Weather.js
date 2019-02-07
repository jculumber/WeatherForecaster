import axios from "axios";
var OAuth = require('oauth');

const BASEURL = "https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json";
const TYPES = "&types=(cities)&key=";
const APIKEY = "AIzaSyCK7cWDcBqSE2SRbNpvQyy4zz_pxKHYqnA";


// Require node-oauth package: npm install oauth


var header = {
    "Yahoo-App-Id": "eQuDm858"
};
var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9OWxrRE9FbUcyc3lpJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWRl',
    '6618c912395ce529642ba5788abc3a1b10a52aa3',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
request.get(
    'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    }
);
// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + TYPES + APIKEY);
  }
};