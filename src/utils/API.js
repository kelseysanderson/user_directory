import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getRandomUsers: function() {
    return axios.get("https://randomuser.me/api/?results=100&inc=name,email,phone,picture" );
  }
};