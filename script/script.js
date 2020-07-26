let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let addButton = document.querySelector('.profile__add-button');
//Переменные "Модального окна - общие"
let closeButtons = document.querySelectorAll('.modal__button-close'); //Кнопка закрытия окна
//Переменные "Модального окна - Профиль"
let editor = document.querySelector('.modal_editor');
let submitButton = document.querySelector('.modal__submit-button');
let statusInput = document.querySelector('.modal__editor-field_status');
let nameInput = document.querySelector('.modal__editor-field_name');
let formEditor = document.querySelector('.modal__form_editor');
//Переменные "Модального окна - добавление рендера"
let formNewform = document.querySelector('.modal__form_newform');
let newForm = document.querySelector('.modal_newform');
let inputNewformName = document.querySelector('.modal__field_newform-name');
let inputNewformLink = document.querySelector('.modal__field_newform-link');
const template = document.querySelector('.template').content;
//Переменные "Модального окна - увеличенный рендер"
let render = document.querySelector('.modal_render');
let renderImage = document.querySelector('.modal__render');
let renderText = document.querySelector('.modal__render-text');
//Переменные "Карточки с рендером"
let elements = document.querySelector('.elements');


// Открытие редактора профиля
function editorOpenButton() {
    editor.classList.add('modal_open');
    nameInput.value = profileName.textContent;
    statusInput.value = profileStatus.textContent;
}

//Открытие окна добавления рендера
function newFormOpenButton() {
    newForm.classList.add('modal_open');
}

// Закрытие модального окна
function modalCloseButton() {
    newForm.classList.remove('modal_open');
    editor.classList.remove('modal_open');
    render.classList.remove('modal_open');
}

for (let i=0; i<closeButtons.length; i++) {
closeButtons[i].addEventListener('click', modalCloseButton);
}


// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    modalCloseButton();
}

//Автоматическое добавление карточек на главную страницу
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

function basicRender() { 
    elements.innerHTML = '';       
    for (let i = 0; i < initialCards.length; i++) {
        const card = template.cloneNode(true);
        card.querySelector('.element__image').src = initialCards[i].link;
        card.querySelector('.element__text').textContent = initialCards[i].name;
    //Лайк - "да" или "нет"
    card.querySelector('.element__group').addEventListener('click', function (evt){ 
        evt.target.classList.toggle('element__group_black');
    });

    // Удаление картинок
    let trash = card.querySelector('.element__trash');

    trash.addEventListener('click', function() { 
        initialCards.splice(i, 1);
        basicRender();
    });

    //Открытие окна увеличенной картинки
    const elementImage = card.querySelector('.element__image');
    const elementText = card.querySelector('.element__text');
    elementImage.addEventListener('click', function(){ 
        render.classList.add('modal_open');   
        renderImage.src = elementImage.src;
        renderText.textContent = elementText.textContent;
    });
    elements.append(card);
    }
}
document.addEventListener('DOMContentLoaded', basicRender);


// Обработчик - добавление картинок
function addRender (ren) {
    ren.preventDefault();
    const newCard = {
        name: inputNewformName.value,
        link: inputNewformLink.value
    }
    initialCards.unshift(newCard);
    basicRender();
    modalCloseButton();
}

editButton.addEventListener('click', editorOpenButton);
addButton.addEventListener('click', newFormOpenButton);
formEditor.addEventListener('submit', formSubmitHandler);
newForm.addEventListener('submit', addRender);


    
