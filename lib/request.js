const axios = require('axios');
const config = require('./config');

const request = url => axios({
  url,
  headers: config.headers,
  method: 'get',
}).then(reps => reps.data);

module.exports = request;
