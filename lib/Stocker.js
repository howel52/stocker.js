const { get } = require('./get');
const xueqiu = require('./parser/xueqiu');

class Stocker {
  static getOrigin() {
    return {
      XUEQIU: {
        key: 'XUEQIU',
        host: 'https://xueqiu.com',
        parser: xueqiu,
        get,
        getApiUrl: (host, serial) => `${host}/${serial[0]}/${serial}`,
      },
    };
  }

  constructor(opt = {}) {
    const { origin = Stocker.getOrigin().XUEQIU } = opt;
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
