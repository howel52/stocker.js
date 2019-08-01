const axios = require('axios');
const config = require('./config');

const get = url => axios({
  url,
  responseType: 'arraybuffer',
  headers: config.headers,
  method: 'get',
}).then(reps => reps.data);

module.exports = {
  get,
};
