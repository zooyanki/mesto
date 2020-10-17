import Popup from './popup.js';
import FormValidator from './validate.js';

const objectValid = {
    formSelector: ".modal__form_validator",
    inputSelector: ".modal__field",
    submitButtonSelector: ".modal__submit-button",
    inactiveButton: "modal__submit-button_invalid",
    inputError: "modal__field_error",
    inputErrorActive: "modal__input-error_active"
}


export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this.popup.querySelector('form');
        this._inputList = this.popup.querySelectorAll('.modal__field');
        this._submitText = this._popupForm.querySelector('.modal__submit-button').textContent;
        this.validator = new FormValidator(objectValid, this._popupForm);    
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

        this.validator.enableValidation();
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
            const res = this._handleFormSubmit(this._getInputValues());
            this._popupForm.querySelector('.modal__submit-button').textContent = 'Сохранить...';
            if (res) {res.then(() => {
                this._popupForm.querySelector('.modal__submit-button').textContent = this._submitText;
                this.close();
            });} else {
                this._popupForm.querySelector('.modal__submit-button').textContent = this._submitText;
                this.close();
            }     
        
        });
    }
}

