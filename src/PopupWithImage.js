import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(src, alt) {
        super.open();
        this.popup.querySelector('.modal__render').src = src;
        this.popup.querySelector('.modal__render').alt = alt;
        this.popup.querySelector('.modal__render-text').textContent = alt;
    }
}