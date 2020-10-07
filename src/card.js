import PopupWithImage from './PopupWithImage.js'
 
/////////------------------Карточки---------------------------//////////////// 
export default class Card { 
    constructor(name, link, template) { 
        this._name = name; 
        this._link = link; 
        this._template = template; 
    }
     
    _getTemplate() { 
    const cardElement = document.querySelector('.template').content.querySelector('.element').cloneNode(true); 
 
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
//Открытие модульного окна увеличенной карточки 
    handleCardClick(src, alt) { 
        const popupImage = new PopupWithImage('.modal_render');
        popupImage.open(src, alt);
        popupImage.setEventListeners();
    } 
//Слушатели событий 
        //Открытие попапа 
    _setEventListeners() { 
        this._element.querySelector('.element__image').addEventListener('click', () => { 
        this.handleCardClick(this._link, this._name); 
        }); 
        //Лайк: Да или Нет 
        this._element.querySelector('.element__group').addEventListener('click', (evt) => { 
            evt.target.classList.toggle('element__group_black'); 
            }); 
        //Удаление карточки 
        this._element.querySelector('.element__trash').addEventListener('click', () => { 
            this._element.remove(); 
            }); 
        } 
 
} 

