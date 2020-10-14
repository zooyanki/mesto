import Popup from './popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this.popup.querySelector('form');
        this._inputList = this.popup.querySelectorAll('.modal__field');
    }

    close() {
        super.close();        
        this._popupForm.reset();
    }

    open(obj) {
        super.open();

        if (obj) {   
            this._inputList.forEach(input => { 
                input.value = obj[input.name]; 
            }); 
        }
    }

    _getInputValues() {
        this.formValues = {};
        this._inputList.forEach(input => {
            this.formValues[input.name] = input.value;
          });

        return this.formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues())
            this.close();
        });
    }
}

