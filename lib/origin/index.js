const request = require('./../request');
const {
  xueqiu,
  tencent,
} = require('./../parser/');

const ORIGIN_TYPES = {
  XUEQIU: 'XUEQIU',
  TENCENT: 'TENCENT',
};

const ORIGINS = {
  [ORIGIN_TYPES.XUEQIU]: {
    key: ORIGIN_TYPES.XUEQIU,
    parser: xueqiu,
    request,
    getApi: serial => `https://xueqiu.com/${serial[0]}/${serial}`,
  },
  [ORIGIN_TYPES.TENCENT]: {
    key: ORIGIN_TYPES.TENCENT,
    parser: tencent,
    request,
    getApi: serial => `https://gu.qq.com/${serial}`,
  },
};

module.exports = {
  ORIGIN_TYPES,
  ORIGINS,
};
