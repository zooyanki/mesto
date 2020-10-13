class Api {
    constructor(options) {
      this.headers = options.headers;
      this.baseUrl = options.baseUrl;
    }
  
    getInitialCards() {
      return fetch(this.baseUrl+`/cards`,{headers: this.headers}).then((x) => x.json());
    }

    getUserInfo() {
      return fetch(this.baseUrl+`/users/me`,{headers: this.headers}).then((x) => x.json());
    }

}
  
export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
    headers: {
      authorization: '588c72f6-47fd-494a-9f61-2083e374b77d',
      'Content-Type': 'application/json'
    }
}); 