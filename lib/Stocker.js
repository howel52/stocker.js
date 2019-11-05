const { ORIGINS, ORIGIN_TYPES } = require('./origin/');

const { XUEQIU: defaultOriginType } = ORIGIN_TYPES;
class Stocker {
  constructor(opt = {}) {
    const { origin = ORIGINS[defaultOriginType] } = opt;
    this.origin = origin;
  }

  async getPrice(serial) {
    const targetUrl = this.origin.getApiUrl(this.origin.host, serial);
    const decode = this.origin.decode || (v => v);
    const getAtion = this.origin.get;
    const html = await getAtion(targetUrl).then(decode);
    return {
      ...this.origin.parser(html),
      origin: this.origin.key,
    };
  }
}

module.exports = Stocker;
