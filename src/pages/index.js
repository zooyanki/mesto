import "./index.css";

import Api from "../components/api.js";
import Card from "../components/card.js";
import Section from "../components/section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Iframe from "../components/iframe.js";

//------------------------------------------------Переменные-----------------------------------------------------------//
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const avatarButton = document.querySelector(".profile__overlay");
const widgetButton = document.querySelector(".profile__iframe");

//Переменные "Модального окна - увеличенный рендер"
export const render = document.querySelector(".modal_render");
export const renderImage = document.querySelector(".modal__render");
export const renderText = document.querySelector(".modal__render-text");

export const profileName = document.querySelector(".profile__name");
export const profileStatus = document.querySelector(".profile__status");

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-16",
  headers: {
    authorization: "588c72f6-47fd-494a-9f61-2083e374b77d",
    "Content-Type": "application/json",
  },
});

//---------------------------------------------------Загрузка карточек на страницу-------------------------------------//
const infoPromise = api.getUserInfo();
infoPromise.then((userAPI) => {
  const iframe = new Iframe();

  const profileEditor = new UserInfo(
    ".profile__name",
    ".profile__status",
    ".profile__avatar"
  );
  profileEditor.setUserInfo(userAPI);

  const editor = new PopupWithForm({
    popupSelector: ".modal_editor",
    handleFormSubmit: (obj) => {
      profileEditor.setUserInfo(obj);
      return api.setUserInfo(obj.name, obj.about);
    },
  });

  editor.setEventListeners();
  editButton.addEventListener("click", () =>
    editor.open(profileEditor.getUserInfo())
  );

  const avatarEditor = new PopupWithForm({
    popupSelector: ".modal_updateavatar",
    handleFormSubmit: (obj) => {
      profileEditor.setUserInfo(obj);
      return api.setUserAvatar(obj.avatar);
    },
  });
  avatarEditor.setEventListeners();
  avatarButton.addEventListener("click", () => avatarEditor.open());
  //---------------------------------------------------------------
  const popupImage = new PopupWithImage(".modal_render");
  const cardsPromise = api.getInitialCards();
  cardsPromise.then((obj) => {
    const cardSection = new Section(
      {
        items: obj,
        renderer: (item) => {
          const remotableCard = {
            remove: () => {
              cardSection.deleteItem(item);
              return api.delInitialCards(item._id);
            },
            like: () => api.addLikeCard(item._id),
            dislike: () => api.remLikeCard(item._id),
          };

          const card = new Card(
            item.name,
            item.link,
            remotableCard,
            item.likes,
            item.owner,
            ".template",
            (src, alt) => {
              popupImage.open(src, alt);
              popupImage.setEventListeners();
            }
          );
          const cardElement = card.generateCard(userAPI._id);

          return cardElement;
        },
      },
      ".elements"
    );

    cardSection.render();

    const newForm = new PopupWithForm({
      popupSelector: ".modal_newform",
      handleFormSubmit: (item) => {
        return api.setInitialCard(item.name, item.link).then((obj) => {
          item.likes = [];
          item.owner = {};
          cardSection.addItem(obj);
        });
      },
    });

    newForm.setEventListeners();
    addButton.addEventListener("click", () => newForm.open());
    widgetButton.addEventListener("click", () => {
      iframe.iframeOpen();
    });
  });

  const readMessage = (event) => {
    if (event.data === false) {
      iframe.iframeClose();
    }
  };

  window.addEventListener("message", readMessage, false);
});
