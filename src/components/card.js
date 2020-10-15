/////////------------------Карточки---------------------------////////////////
import PopupWithForm from './PopupWithForm.js';
import { api } from './api.js';

export default class Card { 
    constructor(name, link, id, likes, template, handleCardClick) { 
        this._name = name; 
        this._link = link;
        this._id = id;
        this._likes = likes; 
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
        const elementTrash = this._element.querySelector('.element__trash_visible');
        
 
        elementImage.src = this._link; 
        elementImage.alt = this._name; 
        elementText.textContent = this._name;
         
        this._setEventListeners();
        this.likeCount();
        
        return this._element; 
    } 
        
    _handleLikeIcon() {        
        this._element.querySelector('.element__group').classList.toggle('element__group_black');
        this.likeCount();
    }

    handleTrashIcon() {
        const trashPopup = new PopupWithForm({popupSelector: '.modal_confirmpopup', handleFormSubmit: () => {
            api.delInitialCards(this._id);
            this._element.remove();
            
        }});
        trashPopup.setEventListeners();
        trashPopup.open();
    }

    likeCount() {
        const likeNumber = this._element.querySelector('.element__group-number');
        if (this._element.querySelector('.element__group_black')) {
            likeNumber.textContent = this._likes.length + 1;
            api.addLikeCard(this._id);
        } else if (this._element.querySelector('.element__group')) {
            likeNumber.textContent = this._likes.length - 1;
            api.remLikeCard(this._id);
        }
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

