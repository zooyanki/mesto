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

    setUserInfo(info) {
        this._nameSelector.textContent = info.name;
        this._aboutSelector.textContent = info.about;
        this._avatarSelector.src = info.avatar;
    }
}
