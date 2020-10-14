/////////------------------Карточки---------------------------////////////////
import PopupWithForm from './PopupWithForm.js';
import { api } from './api.js';

export default class Card { 
    constructor(name, link, template, handleCardClick) { 
        this._name = name; 
        this._link = link; 
        this._template = template;
        this.handleCardClick = handleCardClick; 
    }
     
    _getTemplate() { 
    const cardElement = document.querySelector(this._template).content.querySelector('.element').cloneNode(true); 
 
    return cardElement; 
    } 
 
//Создание карточек 
    generateCard() {       
        this._element = this._getTemplate(); 
 
        const elementImage = this._element.querySelector('.element__image'); 
        const elementText = this._element.querySelector('.element__text'); 
 
        elementImage.src = this._link; 
        elementImage.alt = this._name; 
        elementText.textContent = this._name; 
 
        this._setEventListeners(); 
        return this._element; 
    } 
        
    _handleLikeIcon() {
        this._element.querySelector('.element__group').classList.toggle('element__group_black');
    }

    handleTrashIcon() {
        const trashPopup = new PopupWithForm({popupSelector: '.modal_confirmpopup', handleFormSubmit: () => {
            console.log(this._element._id);  
            this._element.remove();
            
        }});
        trashPopup.setEventListeners();
        trashPopup.open();
    }
 
    _setEventListeners() { 
        this._element.querySelector('.element__image').addEventListener('click', () => { 
        this.handleCardClick(this._link, this._name); 
        }); 
        //Лайк: Да или Нет 
        this._element.querySelector('.element__group').addEventListener('click', () => { 
            this._handleLikeIcon(); 
            }); 
        //Удаление карточки 
        this._element.querySelector('.element__trash').addEventListener('click', () => {

            this.handleTrashIcon(); 
        }); 
        } 
 
} 

