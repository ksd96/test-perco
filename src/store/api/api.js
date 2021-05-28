class API {
  constructor(url) {
    this._url = url;
  }

  getCards() {
    return fetch(this._url)
            .then(response => response.json())
            .then((data) => {
              return data.cards;
    })
  };
};

const api = new API(`../../data/data.json`);

export {api};
