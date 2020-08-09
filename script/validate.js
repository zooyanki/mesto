const formError = formNewform.querySelector('.modal__input-error');

const showError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('modal__field_error');
    errorElement.classList.add('modal__input-error_active');
}

const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('modal__field_error');
    errorElement.classList.remove('modal__input-error_active');
}

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage);
      } else {
        hideError(formElement, inputElement);
      }
    }

inputNewformName.addEventListener('input', function () {
    checkInputValidity();
});

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.modal__field'));
    const buttonElement = formElement.querySelector('.modal__submit-button');

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.modal__form'));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    setEventListeners(formElement);
    });
};

enableValidation();

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('modal__submit-button_invalid');
    } else {
        buttonElement.classList.remove('modal__submit-button_invalid');
    }
};