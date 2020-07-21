let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.editor__button-close');
let editor = document.querySelector('.editor');
let submitButton = document.querySelector('.editor__submit-button');
let profileName = document.querySelector('.profile__name');
let statusInput = document.querySelector('.editor__field_status');
let profileStatus = document.querySelector('.profile__status');
let nameInput = document.querySelector('.editor__field_name');
let overlay = document.querySelector('.overlay');
let formEditor = document.querySelector('.editor__form');
let addButton = document.querySelector('.profile__add-button');
let elements = document.querySelector('.elements');

// Открытие редактора профиля0
function editorOpenButton() {
    editor.classList.add('editor_open');
    nameInput.value = profileName.textContent;
    statusInput.value = profileStatus.textContent;
}


// Закрытие редактора профиля
function editorCloseButton() {
    editor.classList.remove('editor_open');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    editorCloseButton();
} 
    
// обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editButton.addEventListener('click', editorOpenButton);
closeButton.addEventListener('click', editorCloseButton);
formEditor.addEventListener('submit', formSubmitHandler);

//Блок Элемент - добавление карточек
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

function addPicture() {   

    const template = document.querySelector('.template').content;
    
    
    for (let i = 0; i < initialCards.length; i++) {
    const userImage = template.cloneNode(true);
    userImage.querySelector('.element__image').src = initialCards[i].link;
    userImage.querySelector('.element__text').textContent = initialCards[i].name;

    elements.append(userImage);
    }
}

document.addEventListener('DOMContentLoaded', addPicture);