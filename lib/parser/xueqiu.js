const cheerio = require('cheerio');

module.exports = (html) => {
  const $ = cheerio.load(html);
  return {
    name: $('.stock-name').text(),
    value: $('.stock-current').text(),
  };
};
