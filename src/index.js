import './pages/index.css';

import Card from './card.js';
import FormValidator from './validate.js';
import Section from './section.js';
import PopupWithForm from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';
import {initialCards} from './constants.js';

//------------------------------------------------Переменные-----------------------------------------------------------//
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

//Переменные "Модального окна - увеличенный рендер"
export const render = document.querySelector('.modal_render');
export const renderImage = document.querySelector('.modal__render');
export const renderText = document.querySelector('.modal__render-text');

export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile__status');

const cardSection = new Section({items: initialCards, 
    renderer: (item) => {
        const card = new Card(item.name, item.link);
        const cardElement = card.generateCard();
    
        return cardElement;
    
    }}, '.elements');

cardSection.render();

const newForm = new PopupWithForm({popupSelector: '.modal_newform', handleFormSubmit: (item) => cardSection.addItem(item) });
newForm.setEventListeners();
addButton.addEventListener('click', () => newForm.open())


const profileEditor = new UserInfo('.profile__name', '.profile__status');

const editor = new PopupWithForm({popupSelector: '.modal_editor', handleFormSubmit: (info) => {
    profileEditor.setUserInfo(info)}});
editor.setEventListeners();
editButton.addEventListener('click', () => editor.open(profileEditor.getUserInfo()))



//-------------------------------------------------------------Валидация-мать порядка---------------------------------------//
  
//Валидация форм - селекторы и классы.
const objectValid = {
    formSelector: ".modal__form_validator",
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







