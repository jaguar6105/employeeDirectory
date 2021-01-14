import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

// Export an object
export default {
  default: function() {
    return axios.get(BASEURL);
  }
};
