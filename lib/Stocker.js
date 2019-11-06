const { ORIGINS, ORIGIN_TYPES } = require('./origin/');

const { TENCENT: defaultOriginType } = ORIGIN_TYPES;
class Stocker {
  constructor(opt = {}) {
    const { origin = ORIGINS[defaultOriginType] } = opt;
    this.origin = origin;
  }

  async getPrice(serial) {
    const {
      getApi,
      request,
      parser,
      key,
    } = this.origin;
    const api = getApi(serial);
    const html = await request(api);
    return {
      ...parser(html),
      origin: key,
    };
  }
}

module.exports = Stocker;
