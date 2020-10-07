export class UserInfo {
    constructor(nameSelector, aboutSelector) {
        this._nameSelector = nameSelector;
        this._aboutSelector = aboutSelector;
    }

    getUserInfo() {
        return {
            name: document.querySelector(this._nameSelector).textContent,
            about: document.querySelector(this._aboutSelector).textContent
        }
    }

    setUserInfo(info) {
        document.querySelector(this._nameSelector).textContent = info.name;
        document.querySelector(this._aboutSelector).textContent = info.about;
    }
}
