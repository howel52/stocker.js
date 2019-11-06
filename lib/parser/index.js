const cheerio = require('cheerio');

const xueqiu = (html) => {
  const $ = cheerio.load(html);
  return {
    name: $('.stock-name').text(),
    value: $('.stock-current').text(),
  };
};

const tencent = (html) => {
  const $ = cheerio.load(html);
  return {
    name: $('.gb_title .col-1-1').text(),
    value: $('.data').text(),
  };
};

module.exports = {
  xueqiu,
  tencent,
};
