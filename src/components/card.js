/////////------------------Карточки---------------------------////////////////
import PopupWithForm from './PopupWithForm.js';
import { api } from './api.js';

export default class Card { 
    constructor(name, link, id, likes, owner, template, handleCardClick) { 
        this._name = name; 
        this._link = link;
        this._id = id;
        this._likes = likes; 
        this._template = template;
        this._owner = owner;
        this.handleCardClick = handleCardClick;        
    }
     
    _getTemplate() { 
        const cardElement = document.querySelector(this._template).content.querySelector('.element').cloneNode(true); 
 
        return cardElement; 
    } 
 
//Создание карточек 
    generateCard(userId) {       
        this._element = this._getTemplate(); 
 
        const elementImage = this._element.querySelector('.element__image'); 
        const elementText = this._element.querySelector('.element__text');
        const likeNumber = this._element.querySelector('.element__group-number');
 
        elementImage.src = this._link; 
        elementImage.alt = this._name; 
        elementText.textContent = this._name;        
        likeNumber.textContent = this._likes.length;

        this._setEventListeners();
        
        //Появление "Мусорки"
        if (userId === this._owner._id) {
             this._element.querySelector('.element__trash').classList.remove('element__trash_invisible');
        }
        //Заморозка сердца
        this._likes.forEach(element => {
            if (userId === element._id) {
                this._element.querySelector('.element__group').classList.add('element__group_black');
            }
        })

        return this._element;         
    }
        
    _handleLikeIcon() {    
        const likeNumber = this._element.querySelector('.element__group-number');     
        this._element.querySelector('.element__group').classList.toggle('element__group_black');
        this.likeCount(likeNumber);
    }

    handleTrashIcon() {
        const trashPopup = new PopupWithForm({popupSelector: '.modal_confirmpopup', handleFormSubmit: () => {
            api.delInitialCards(this._id);
            this._element.remove();
            
        }});
        trashPopup.setEventListeners();
        trashPopup.open();
    }

    likeCount(like) {        
        if (this._element.querySelector('.element__group_black')) {
            like.textContent = this._likes.length + 1;
            api.addLikeCard(this._id).then((x) => {
                this._likes = x.likes;
            });
        } else{ 
            like.textContent = this._likes.length - 1;
            api.remLikeCard(this._id).then((x) => {
                this._likes = x.likes;    
            });
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

