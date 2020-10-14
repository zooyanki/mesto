import './index.css';


import {api} from '../components/api.js';
import Card from '../components/card.js';
import FormValidator from '../components/validate.js';
import Section from '../components/section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Popup from '../components/popup';

//------------------------------------------------Переменные-----------------------------------------------------------//
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const avatarButton = document.querySelector('.profile__overlay');

//Переменные "Модального окна - увеличенный рендер"
export const render = document.querySelector('.modal_render');
export const renderImage = document.querySelector('.modal__render');
export const renderText = document.querySelector('.modal__render-text');

export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile__status');


//---------------------------------------------------Загрузка карточек на страницу-------------------------------------//
const popupImage = new PopupWithImage('.modal_render');
const cardsPromise = api.getInitialCards();
cardsPromise.then((x) => {
    const cardSection = new Section({items: x, 
        renderer: (item) => {
            const card = new Card(item.name, item.link, '.template', (src, alt) => {            
                popupImage.open(src, alt);
                popupImage.setEventListeners();
            });
            const cardElement = card.generateCard();
        
            return cardElement;        
        }}, '.elements');
    
    cardSection.render();
    
    const newForm = new PopupWithForm({popupSelector: '.modal_newform', handleFormSubmit: (item) => {
        api.setInitialCard(item.name, item.link);
        cardSection.addItem(item)}});
    newForm.setEventListeners();
    addButton.addEventListener('click', () => newForm.open());
})

//----------------------------------------------------Редактирование профиля---------------------------------------------//
const infoPromise = api.getUserInfo();
infoPromise.then((x) =>{
    const profileEditor = new UserInfo('.profile__name', '.profile__status','.profile__avatar');
    profileEditor.setUserInfo(x);

    const editor = new PopupWithForm({popupSelector: '.modal_editor', handleFormSubmit: (obj) => {
        profileEditor.setUserInfo(obj);
        api.setUserInfo(obj.name, obj.about);
    }});

    editor.setEventListeners();
    editButton.addEventListener('click', () => editor.open(profileEditor.getUserInfo()));
    
    const avatarEditor = new PopupWithForm({popupSelector: '.modal_updateavatar', handleFormSubmit: (obj) => {
        profileEditor.setUserInfo(obj);
        api.setUserAvatar(obj.avatar);
    }})
    avatarEditor.setEventListeners();
    avatarButton.addEventListener('click', () => avatarEditor.open());
})
//-------------------------------------------------------Удаление карточки--------------------------------------------------//



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







