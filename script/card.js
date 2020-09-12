
import {render, renderImage, renderText, modalOpen} from '../script/script.js';

/////////------------------Карточки---------------------------////////////////
export default class Card {
    constructor(name, link) {
        this._name = name;
        this._link = link;
    }

    _getTemplate() {
    const cardElement = document.querySelector('.template').content.querySelector('.element').cloneNode(true);

    return cardElement;
    }

//Создание карточек
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__text').textContent = this._name;

        this._setEventListeners();
        return this._element;
    }
//Открытие модульного окна увеличенной карточки
    _popupOpened() {
        modalOpen(render);
        renderImage.src = this._link;
        renderImage.alt = this._name;
        renderText.textContent = this._name;
    }
//Слушатели событий
        //Открытие попапа
    _setEventListeners() {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._popupOpened();
        });
        //Лайк: Да или Нет
        this._element.querySelector('.element__group').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__group_black');
            });
        //Удаление карточки
        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._element.querySelector('.element__trash').closest('.element').remove();
            });
        }

}


