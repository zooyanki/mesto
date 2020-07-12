let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.editor__button-close');
let editor = document.querySelector('.editor');
let submitButton = document.querySelector('.editor__submit-button');
let profileName = document.querySelector('.profile__name');
let statusInput = document.querySelector('.editor__field_status');
let profileStatus = document.querySelector('.profile__status');
let nameInput = document.querySelector('.editor__field_name');
let overlay = document.querySelector('.overlay');

// Открытие редактора профиля
editButton.addEventListener('click', () => {
    editor.style.display = "block";
    overlay.style.display = "block";
    nameInput.value = profileName.textContent;
    statusInput.value = profileStatus.textContent;
})


// Закрытие редактора профиля
function editorCloseButton() {
    editor.style.display = "none";
    overlay.style.display = "none";
}
closeButton.addEventListener('click', editorCloseButton);

// Находим форму в DOM
let formEditor = document.querySelector('.editor__form');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    editorCloseButton();
} 
    
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditor.addEventListener('submit', formSubmitHandler);