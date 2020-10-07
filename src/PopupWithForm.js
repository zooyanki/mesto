import Popup from './popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    close() {
        super.close();
        
        this._inputList = this.popup.querySelectorAll('.modal__field'); 
        this.formValues = {};
        this._inputList.forEach(input => {
            input.value = '';
            this.formValues[input.name] = input.value;
          });
    }

    open(obj) {
        super.open();

        if (obj) {
            this._inputList = this.popup.querySelectorAll('.modal__field'); 
            this._inputList.forEach(input => {
                input.value = obj[input.name];
            });
        }
    }

    _getInputValues() {
        this._inputList = this.popup.querySelectorAll('.modal__field');
        this.formValues = {};
        this._inputList.forEach(input => {
            this.formValues[input.name] = input.value;
          });

        return this.formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        
        this.popup.querySelector('form').addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues())
            this.close();
        });
    }
}

