import axios from "axios";

const BASEURL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=";
const TYPES = "&types=(cities)&key=";
const APIKEY = "AIzaSyCK7cWDcBqSE2SRbNpvQyy4zz_pxKHYqnA";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + TYPES + APIKEY);
  }
};