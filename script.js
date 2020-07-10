let container = document.querySelector('.page');
let EditButton = document.querySelector('.profile__edit-button');
let CloseButton = document.querySelector('.editor__button-close');
let SubmitButton = document.querySelector('.editor__submit-button');
let ProfileStatus = container.querySelector('.profile__status-contain');
let ProfileName = container.querySelector('.profile__name-contain');
let EditorForm = document.querySelector('.editor');
let EditorChangeStatus = container.querySelector('.editor__field-status');
let EditorChangeName = container.querySelector('.editor__field-name');
let Overlay = document.querySelector('.overlay');


EditButton.onclick = function() {
    EditorForm.style.display = "block";
    Overlay.style.display = "block";
}

CloseButton.onclick = function() {
    EditorForm.style.display = "none";
    Overlay.style.display = "none";
}

function EditStatus() {
    ProfileStatus.innerHTML = `
    <h2 class="profile__status">` + `${EditorChangeStatus.value}` + `</h2>`;
}

EditStatus();

SubmitButton.addEventListener('click', EditStatus);
SubmitButton.onclick = function() {
    EditorForm.style.display = "none";
    Overlay.style.display = "none";
}

function EditName() {
    ProfileName.innerHTML = `
    <h1 class="profile__name">` + `${EditorChangeName.value}` + `</h1>`;
}

EditName();

SubmitButton.addEventListener('click', EditName);
SubmitButton.onclick = function() {
    EditorForm.style.display = "none";
    Overlay.style.display = "none";
}