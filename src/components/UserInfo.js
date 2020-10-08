export class UserInfo {
    constructor(nameSelector, aboutSelector) {
        this._nameSelector = document.querySelector(nameSelector);
        this._aboutSelector = document.querySelector(aboutSelector);
    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent,
            about: this._aboutSelector.textContent
        }
    }

    setUserInfo(info) {
        this._nameSelector.textContent = info.name;
        this._aboutSelector.textContent = info.about;
    }
}
