import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this.popup.querySelector('.modal__render');
        this._text = this.popup.querySelector('.modal__render-text');
    }

    open(src, alt) {
        super.open();
        this._image.src = src;
        this._image.alt = alt;
        this._text.textContent = alt;
    }
}