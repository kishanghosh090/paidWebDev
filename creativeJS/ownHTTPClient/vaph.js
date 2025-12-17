class Vaph {
  config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  constructor(config) {
    this.config = config;
  }
  async get(url) {
    return fetch(`${this.config}/${url}`);
  }
}

function create(config) {
  return new Vaph(config);
}

export default { create };
