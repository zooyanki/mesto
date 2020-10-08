export default class FormValidator {
    constructor(objectValid, formElement) {
        this._objectValid = objectValid;
        this._formElement = formElement;
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showError(inputElement);
          } else {
            this._hideError(inputElement);
          }

    }

    _showError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._objectValid.inputError);
        errorElement.classList.add(this._objectValid.inputErrorActive);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._objectValid.inputError);
        errorElement.classList.remove(this._objectValid.inputErrorActive);
        errorElement.textContent = '';
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._objectValid.inactiveButton);
        } else {
            buttonElement.classList.remove(this._objectValid.inactiveButton);
        }

    }
    
    _setEventListeners(inputList, buttonElement) {
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }
    
    enableValidation () {
        const inputList = Array.from(this._formElement.querySelectorAll(this._objectValid.inputSelector));
        const buttonElement = this._formElement.querySelector(this._objectValid.submitButtonSelector);

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners(inputList, buttonElement);
        this._toggleButtonState(inputList, buttonElement);
    }
}


