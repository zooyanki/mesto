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
      })
    }

    setInitialCard(name, link) {
      return fetch(this.baseUrl+`/cards`, {
        headers: this.headers,
        method: `POST`,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then((x) => x.json());
    }

    delInitialCards(del) {
      return fetch(this.baseUrl+`/cards/${del}`, {
        headers: this.headers,
        method: `DELETE`,
        body: JSON.stringify({
          _id: del 
        })
      })
    };

    addLikeCard(addlike) {
      return fetch(this.baseUrl+`/cards/likes/${addlike}`, {
        headers: this.headers,
        method: `PUT`,
        body: JSON.stringify({
          _id: addlike 
        })
      }).then((x) => x.json());
    };

    remLikeCard(remlike) {
      return fetch(this.baseUrl+`/cards/likes/${remlike}`, {
        headers: this.headers,
        method: `DELETE`,
        body: JSON.stringify({
          _id: remlike 
        })
      }).then((x) => x.json());
    };
}
  
export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
    headers: {
      authorization: '588c72f6-47fd-494a-9f61-2083e374b77d',
      'Content-Type': 'application/json'
    }
}); 