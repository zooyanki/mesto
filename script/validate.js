const objectValid = {
    formSelector: ".modal__form",
    inputSelector: ".modal__field",
    submitButtonSelector: ".modal__submit-button",
    inactiveButton: "modal__submit-button_invalid",
    inputError: "modal__field_error",
    inputErrorActive: "modal__input-error_active"
}

const showError = (formElement, inputElement, errorMessage, inputError, inputErrorActive) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputError);
    errorElement.classList.add(inputErrorActive);
    errorElement.textContent = errorMessage;
}

const hideError = (formElement, inputElement, inputError, inputErrorActive) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputError);
    errorElement.classList.remove(inputErrorActive);
    errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement, conf) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage, conf.inputError, conf.inputErrorActive);
      } else {
        hideError(formElement, inputElement, conf.inputError, conf.inputErrorActive);
      }
    }

//Выбор "инпута" для присвоения ошибок
const setEventListeners = (formElement, conf) => {
    const inputList = Array.from(formElement.querySelectorAll(conf.inputSelector));
    const buttonElement = formElement.querySelector(conf.submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, conf);
            toggleButtonState(inputList, buttonElement, conf);
        });
    });
};

//Функция отключения кнопки "сохранить"
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement, conf) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(conf.inactiveButton);
    } else {
        buttonElement.classList.remove(conf.inactiveButton);
    }
};


//Выбор "формы"

const enableValidation = (conf) => {
    const formList = Array.from(document.querySelectorAll(conf.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    setEventListeners(formElement, conf);
    });
};

enableValidation(objectValid);
