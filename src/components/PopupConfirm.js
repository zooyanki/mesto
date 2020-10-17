import Popup from './popup.js';

export default class PopupConfirm extends Popup {
    constructor({popupSelector}) {
        super(popupSelector);
        this._popupForm = this.popup.querySelector('form');
    }

    open(handleFormSubmit) {
        this._handleFormSubmit = handleFormSubmit;
        super.open();
    }

    close() {
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
            this.close();               
        });   

    }
    
}