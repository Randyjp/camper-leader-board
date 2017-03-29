import axios from 'axios';

const CAMPERS_API_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/';

module.exports {
  getCampers: (type) => {
    var encodedQueryType = encodeURIComponent(type);
    var requestURL = `${CAMPERS_API_URL}${type}`;

    //return an axios promise
    return axios.get(requestURL).then((res) => {
      if (res.length > 0) {
        return res;
      } else {
        throw new Error('Returned empty array');
      }
    }, (res) => {
      //fail to get data
      throw new Error('Unable to retrieve campers from the URL');
    });
  };
};