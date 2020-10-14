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

    setUserInfo(name, about) {
      return fetch(this.baseUrl+`/users/me`, {
        headers: this.headers,
        method: `PATCH`,
        body: JSON.stringify({
          name: name,
          about: about,
        })
      });
    }

    setUserAvatar(avatar) {
      return fetch(this.baseUrl+`/users/me/avatar`, {
        headers: this.headers,
        method: `PATCH`,
        body: JSON.stringify({
          avatar: avatar
        })
      });
    }

    setInitialCard(name, link) {
      return fetch(this.baseUrl+`/cards`, {
        headers: this.headers,
        method: `POST`,
        body: JSON.stringify({
          name: name,
          link: link
        })
      });
    }

    delInitialCards(z) {
      return fetch(this.baseUrl+`cards/cardId`, {
        headers: this.headers,
        method: `DELETE`,
        //   body: JSON.stringify({
        //    _id: z._id
        // })
      })
    };
}
  
export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
    headers: {
      authorization: '588c72f6-47fd-494a-9f61-2083e374b77d',
      'Content-Type': 'application/json'
    }
}); 