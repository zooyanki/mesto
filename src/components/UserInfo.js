export class UserInfo {
    constructor(nameSelector, aboutSelector, avatarSelector) {
        this._nameSelector = document.querySelector(nameSelector);
        this._aboutSelector = document.querySelector(aboutSelector);
        this._avatarSelector = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent,
            about: this._aboutSelector.textContent,
            avatar: this._avatarSelector.src
        }
    }

    setUserInfo({name=this.getUserInfo().name, about=this.getUserInfo().about, avatar=this.getUserInfo().avatar}) {
        this._nameSelector.textContent = name;
        this._aboutSelector.textContent = about;
        this._avatarSelector.src = avatar;
    }
}
