export default class Api {
    constructor(options) {
      this.headers = options.headers;
      this.baseUrl = options.baseUrl;
    }
  
    getInitialCards() {
      return fetch(this.baseUrl+`/cards`,{headers: this.headers})

      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) =>
        console.log("Упс... что-то пошло не так"));
    }

    getUserInfo() {
      return fetch(this.baseUrl+`/users/me`,{headers: this.headers})
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) =>
        console.log("Упс... что-то пошло не так"));
    }

    setUserInfo(name, about) {
      return fetch(this.baseUrl+`/users/me`, {
        headers: this.headers,
        method: `PATCH`,
        body: JSON.stringify({
          name: name,
          about: about,
        })
      })
      .catch((err) =>
        console.log("Упс... что-то пошло не так"));
    }

    setUserAvatar(avatar) {
      return fetch(this.baseUrl+`/users/me/avatar`, {
        headers: this.headers,
        method: `PATCH`,
        body: JSON.stringify({
          avatar: avatar
        })
      })
      .catch((err) =>
        console.log("Упс... что-то пошло не так"));
    }

    setInitialCard(name, link) {
      return fetch(this.baseUrl+`/cards`, {
        headers: this.headers,
        method: `POST`,
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) =>
        console.log("Упс... что-то пошло не так"));
    }

    delInitialCards(del) {
      return fetch(this.baseUrl+`/cards/${del}`, {
        headers: this.headers,
        method: `DELETE`,
        body: JSON.stringify({
          _id: del 
        })
      })
      .catch((err) =>
        console.log("Упс... что-то пошло не так"));
    };

    addLikeCard(addlike) {
      return fetch(this.baseUrl+`/cards/likes/${addlike}`, {
        headers: this.headers,
        method: `PUT`,
        body: JSON.stringify({
          _id: addlike 
        })
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) =>
        console.log("Упс... что-то пошло не так"));
    };

    remLikeCard(remlike) {
      return fetch(this.baseUrl+`/cards/likes/${remlike}`, {
        headers: this.headers,
        method: `DELETE`,
        body: JSON.stringify({
          _id: remlike 
        })
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((err) =>
        console.log("Упс... что-то пошло не так"));
    };
}
  
