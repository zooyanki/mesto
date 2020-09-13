import Card from '../script/card.js';
import FormValidator from '../script/validate.js'


const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const addButton = document.querySelector('.profile__add-button');

//Переменные "Модального окна - Профиль"
const editor = document.querySelector('.modal_editor');
const statusInput = document.querySelector('.modal__field_editor-status');
const nameInput = document.querySelector('.modal__field_editor-name');
const formEditor = document.querySelector('.modal__form_editor');
//Переменные "Модального окна - добавление рендера"
const formNewform = document.querySelector('.modal__form_newform');
const newForm = document.querySelector('.modal_newform');
const inputNewformName = formNewform.querySelector('.modal__field_newform-name');
const inputNewformLink = formNewform.querySelector('.modal__field_newform-link');
const template = document.querySelector('.template').content;
//Переменные "Модального окна - увеличенный рендер"
export const render = document.querySelector('.modal_render');
export const renderImage = document.querySelector('.modal__render');
export const renderText = document.querySelector('.modal__render-text');
//Переменные "Карточки с рендером"
const elements = document.querySelector('.elements');

//Функция открытия окна
export function modalOpen(popup){
    popup.classList.add('modal_opened');
}

// Открытие редактора профиля
function editorOpenButton() {
    modalOpen(editor);
    nameInput.value = profileName.textContent;
    statusInput.value = profileStatus.textContent;
}

//Открытие окна добавления рендера
function newFormOpenButton() {
    inputNewformName.value = '';
    inputNewformLink.value = '';
    modalOpen(newForm);

    const inputList = Array.from(formNewform.querySelectorAll('.modal__field'));
    const buttonElement = formNewform.querySelector('.modal__submit-button');
    // toggleButtonState(inputList, buttonElement, objectValid);
}

// Закрытие модальных окон: кнопка "крестик"
function modalClose(popup){
    popup.classList.remove('modal_opened');
}
const closeBtnNewForm = newForm.querySelector(".modal__button-close");
const closeBtnEditor = editor.querySelector(".modal__button-close");
const closeBtnRender = render.querySelector(".modal__button-close");

closeBtnNewForm.addEventListener('click', () => modalClose(newForm));
closeBtnEditor.addEventListener('click', () => modalClose(editor));
closeBtnRender.addEventListener('click', () => modalClose(render));

// Закрытие модальных окон: кнопка клавиатуры "ESC"
document.addEventListener('keydown', (esc) => {
    const keyEsc = 27;
    if (esc.keyCode === keyEsc) {
        const openedPopup = document.querySelector('.modal_opened');
        modalClose(openedPopup);
    }
});

//Закрытие модальных окон: нажатие на "Overlay"
const closeOverlayNewForm = newForm.querySelector(".modal__overlay");
const closeOverlayEditor = editor.querySelector(".modal__overlay");
const closeOverlayRender = render.querySelector(".modal__overlay");

closeOverlayNewForm.addEventListener('click', () => modalClose(newForm));
closeOverlayEditor.addEventListener('click', () => modalClose(editor));
closeOverlayRender.addEventListener('click', () => modalClose(render));

// Обработчик «отправки» формы
function formProfileSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    modalClose(editor);
}

//Начальный массив карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link);
    const cardElement = card.generateCard();

    document.querySelector('.elements').append(cardElement);

});

//Обработчик - добавление картинок
newForm.addEventListener('submit', (ren) => {
    ren.preventDefault();
    const newCard = new Card(inputNewformName.value, inputNewformLink.value);
    elements.prepend(newCard.generateCard());
    modalClose(newForm);
});

editButton.addEventListener('click', editorOpenButton);
addButton.addEventListener('click', newFormOpenButton);
formEditor.addEventListener('submit', formProfileSubmitHandler);

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







