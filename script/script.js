const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const addButton = document.querySelector('.profile__add-button');
//Переменные "Модального окна - общие"
const closeButtons = document.querySelectorAll('.modal__button-close'); //Кнопка закрытия окна
//Переменные "Модального окна - Профиль"
const editor = document.querySelector('.modal_editor');
const submitButton = document.querySelector('.modal__submit-button');
const statusInput = document.querySelector('.modal__editor-field_status');
const nameInput = document.querySelector('.modal__editor-field_name');
const formEditor = document.querySelector('.modal__form_editor');
//Переменные "Модального окна - добавление рендера"
const formNewform = document.querySelector('.modal__form_newform');
const newForm = document.querySelector('.modal_newform');
const inputNewformName = document.querySelector('.modal__field_newform-name');
const inputNewformLink = document.querySelector('.modal__field_newform-link');
const template = document.querySelector('.template').content;
//Переменные "Модального окна - увеличенный рендер"
const render = document.querySelector('.modal_render');
const renderImage = document.querySelector('.modal__render');
const renderText = document.querySelector('.modal__render-text');
//Переменные "Карточки с рендером"
const elements = document.querySelector('.elements');

//Функция открытия окна
function modalOpen(popup){
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
}


// Закрытие модальных окон
function modalClose(popup){
    popup.classList.remove('modal_opened');
}

const closeBtnNewForm = newForm.querySelector(".modal__button-close");
const closeBtnEditor = editor.querySelector(".modal__button-close");
const closeBtnRender = render.querySelector(".modal__button-close");

closeBtnNewForm.addEventListener('click', () => modalClose(newForm));
closeBtnEditor.addEventListener('click', () => modalClose(editor));
closeBtnRender.addEventListener('click', () => modalClose(render));


// Обработчик «отправки» формы
function formProfileSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    modalClose(editor);
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

let cards = initialCards;

function basicRender() { 
    elements.innerHTML = '';       

    cards.forEach((item, i) => {
        const card = createCard(item.name, item.link, i);
        elements.append(card);
    })
}
basicRender();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createCard(name, link, index) {
    const card = template.cloneNode(true);
    const elementImage = card.querySelector('.element__image');
    elementImage.src = link;
    card.querySelector('.element__text').textContent = name;
    
    //Лайк - "да" или "нет"
    card.querySelector('.element__group').addEventListener('click', function (evt){ 
        evt.target.classList.toggle('element__group_black');
    });   
    
    // Удаление картинок
    const trash = card.querySelector('.element__trash');

    trash.addEventListener('click', function() {
        cards = cards.filter((e, ind) => index != ind);
        basicRender();
    });

    //Открытие окна увеличенной картинки
    elementImage.addEventListener('click', function(){ 
        modalOpen(render);   
        renderImage.src = link;
        renderText.textContent = name;
    });

    return card;
}





// Обработчик - добавление картинок
function addRender (ren) {
    ren.preventDefault();
    const newCard = {
        name: inputNewformName.value,
        link: inputNewformLink.value
    }
    cards.unshift(newCard);
    basicRender();
    modalClose(newForm);
}

editButton.addEventListener('click', editorOpenButton);
addButton.addEventListener('click', newFormOpenButton);
formEditor.addEventListener('submit', formProfileSubmitHandler);
newForm.addEventListener('submit', addRender);


    

