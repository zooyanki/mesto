export default class Popup {
    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector);
    }

    open() {
        this.popup.classList.add('modal_opened');
        document.body.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    close() {
        this.popup.classList.remove('modal_opened');
        document.body.removeEventListener('keydown', this._handleEscClose.bind(this));
    }

    _handleEscClose(event) {
        const keyEsc = 27;
        if (event.keyCode === keyEsc) {
            this.close();
            }        
    }

    setEventListeners() {
        const closeBtn = this.popup.querySelector(".modal__button-close");
        closeBtn.addEventListener('click', () => this.close());

        const closeOverlay = this.popup.querySelector('.modal__overlay');
        closeOverlay.addEventListener('click', () => this.close());     
    }  
}


