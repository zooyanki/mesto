
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class FormValidator {
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
        inputElement.classList.add(inputElement.validationMessage);
        errorElement.classList.add(this._objectValid.inputErrorActive);
        errorElement.textContent = errorMessage;
    }

    _hideError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(inputElement.validationMessage);
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
    
    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._objectValid.inputSelector));
        const buttonElement = this._formElement.querySelector(this._objectValid.submitButtonSelector);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
       
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }
    
    enableValidation () {
        this._setEventListeners();
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const objectValid = {
    formSelector: ".modal__form",
    inputSelector: ".modal__field",
    submitButtonSelector: ".modal__submit-button",
    inactiveButton: "modal__submit-button_invalid",
    inputError: "modal__field_error",
    inputErrorActive: "modal__input-error_active"
}

const formList = Array.from(document.querySelectorAll(objectValid.formSelector));

formList.forEach((formElement) => {
    const validator = new FormValidator(objectValid, formElement);
    validator.enableValidation();
});


// const showError = (formElement, inputElement, errorMessage, inputError, inputErrorActive) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.add(inputError);
//     errorElement.classList.add(inputErrorActive);
//     errorElement.textContent = errorMessage;
// }

// const hideError = (formElement, inputElement, inputError, inputErrorActive) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.remove(inputError);
//     errorElement.classList.remove(inputErrorActive);
//     errorElement.textContent = '';
// }

// const checkInputValidity = (formElement, inputElement, conf) => {
//     if (!inputElement.validity.valid) {
//         showError(formElement, inputElement, inputElement.validationMessage, conf.inputError, conf.inputErrorActive);
//       } else {
//         hideError(formElement, inputElement, conf.inputError, conf.inputErrorActive);
//       }
//     }

// //Выбор "инпута" для присвоения ошибок
// const setEventListeners = (formElement, conf) => {
//     const inputList = Array.from(formElement.querySelectorAll(conf.inputSelector));
//     const buttonElement = formElement.querySelector(conf.submitButtonSelector);

//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             checkInputValidity(formElement, inputElement, conf);
//             toggleButtonState(inputList, buttonElement, conf);
//         });
//     });
// };

// //Функция отключения кнопки "сохранить"
// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     })
// };

// const toggleButtonState = (inputList, buttonElement, conf) => {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add(conf.inactiveButton);
//     } else {
//         buttonElement.classList.remove(conf.inactiveButton);
//     }
// };


//Выбор "формы"


