import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRandomUsers: function() {
    return axios.get("https://randomuser.me/api/?results=100&inc=name,email,phone,picture&nat=us" );
  },
};

