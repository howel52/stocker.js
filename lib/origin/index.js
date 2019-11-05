const get = require('./../get');
const xueqiu = require('./../parser/xueqiu');

const ORIGIN_TYPES = {
  XUEQIU: 'XUEQIU',
};

const ORIGINS = {
  [ORIGIN_TYPES.XUEQIU]: {
    key: ORIGIN_TYPES.XUEQIU,
    host: 'https://xueqiu.com',
    parser: xueqiu,
    get,
    getApiUrl: (host, serial) => `${host}/${serial[0]}/${serial}`,
  },
};

module.exports = {
  ORIGIN_TYPES,
  ORIGINS,
};
