!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return X})),n.d(t,"renderImage",(function(){return Y})),n.d(t,"renderText",(function(){return Q})),n.d(t,"profileName",(function(){return K})),n.d(t,"profileStatus",(function(){return $}));n(0);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.headers=t.headers,this.baseUrl=t.baseUrl}var t,n,r;return t=e,(n=[{key:"_fetch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(this.baseUrl+e,o({headers:this.headers},t)).then((function(e){return e.ok?e.json():Promise.reject("Хьюстон, у нас проблемы: ".concat(e.status))})).catch((function(e){return console.log("Упс... что-то пошло не так")}))}},{key:"getInitialCards",value:function(){return this._fetch("/cards")}},{key:"getUserInfo",value:function(){return this._fetch("/users/me")}},{key:"setUserInfo",value:function(e,t){return this._fetch("/users/me",{method:"PATCH",body:JSON.stringify({name:e,about:t})})}},{key:"setUserAvatar",value:function(e){return this._fetch("/users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:e})})}},{key:"setInitialCard",value:function(e,t){return this._fetch("/cards",{method:"POST",body:JSON.stringify({name:e,link:t})})}},{key:"delInitialCards",value:function(e){return this._fetch("/cards/".concat(e),{method:"DELETE",body:JSON.stringify({_id:e})})}},{key:"addLikeCard",value:function(e){return this._fetch("/cards/likes/".concat(e),{method:"PUT",body:JSON.stringify({_id:e})})}},{key:"remLikeCard",value:function(e){return this._fetch("/cards/likes/".concat(e),{method:"DELETE",body:JSON.stringify({_id:e})})}}])&&u(t.prototype,n),r&&u(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._esc=this._handleEscClose.bind(this)}var t,n,r;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("modal_opened"),document.body.addEventListener("keydown",this._esc)}},{key:"close",value:function(){this.popup.classList.remove("modal_opened"),document.body.removeEventListener("keydown",this._esc)}},{key:"_handleEscClose",value:function(e){27===e.keyCode&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.popup.querySelector(".modal__button-close").addEventListener("click",(function(){return e.close()})),this.popup.querySelector(".modal__overlay").addEventListener("click",(function(){return e.close()}))}}])&&c(t.prototype,n),r&&c(t,r),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,n,r,o=y(i);function i(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,n))._popupForm=t.popup.querySelector("form"),t}return t=i,(n=[{key:"open",value:function(e){this._handleFormSubmit=e,p(h(i.prototype),"open",this).call(this)}},{key:"close",value:function(){p(h(i.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;p(h(i.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(),e.close()}))}}])&&f(t.prototype,n),r&&f(t,r),i}(l))({popupSelector:".modal_confirmpopup"});v.setEventListeners();var b=function(){function e(t,n,r,o,i,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._remotableCard=r,this._likes=o,this._template=u,this._owner=i,this.handleCardClick=a}var t,n,r;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(e){var t=this;this._element=this._getTemplate();var n=this._element.querySelector(".element__image"),r=this._element.querySelector(".element__text"),o=this._element.querySelector(".element__group-number");return n.src=this._link,n.alt=this._name,r.textContent=this._name,o.textContent=this._likes.length,this._setEventListeners(),e===this._owner._id&&this._element.querySelector(".element__trash").classList.remove("element__trash_invisible"),this._likes.forEach((function(n){e===n._id&&t._element.querySelector(".element__group").classList.add("element__group_black")})),this._element}},{key:"_handleLikeIcon",value:function(){var e=this._element.querySelector(".element__group-number");this._element.querySelector(".element__group").classList.toggle("element__group_black"),this.likeCount(e)}},{key:"handleTrashIcon",value:function(){var e=this;v.open((function(){e._element.remove(),e._remotableCard.remove()}))}},{key:"likeCount",value:function(e){var t=this;this._element.querySelector(".element__group_black")?this._remotableCard.like().then((function(n){t._likes=n.likes,e.textContent=t._likes.length})):this._remotableCard.dislike().then((function(n){t._likes=n.likes,e.textContent=t._likes.length}))}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__image").addEventListener("click",(function(){e.handleCardClick(e._link,e._name)})),this._element.querySelector(".element__group").addEventListener("click",(function(){e._handleLikeIcon()})),this._element.querySelector(".element__trash").addEventListener("click",(function(){e.handleTrashIcon()}))}}])&&_(t.prototype,n),r&&_(t,r),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._rendererItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"addItem",value:function(e){this._rendererItems.unshift(e),this.render()}},{key:"render",value:function(){var e=this;this._container.innerHTML="",this._rendererItems.forEach((function(t){var n=e._renderer(t);e._container.append(n)}))}},{key:"deleteItem",value:function(e){this._rendererItems=this._rendererItems.filter((function(t){return t!==e}))}}])&&g(t.prototype,n),r&&g(t,r),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._objectValid=t,this._formElement=n}var t,n,r;return t=e,(n=[{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_showError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._objectValid.inputError),t.classList.add(this._objectValid.inputErrorActive),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._objectValid.inputError),t.classList.remove(this._objectValid.inputErrorActive),t.textContent=""}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?t.classList.add(this._objectValid.inactiveButton):t.classList.remove(this._objectValid.inactiveButton)}},{key:"_setEventListeners",value:function(e,t){var n=this;e.forEach((function(r){r.addEventListener("input",(function(){n._checkInputValidity(r),n._toggleButtonState(e,t)}))}))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"enableValidation",value:function(){var e=Array.from(this._formElement.querySelectorAll(this._objectValid.inputSelector)),t=this._formElement.querySelector(this._objectValid.submitButtonSelector);this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners(e,t),this._toggleButtonState(e,t)}}])&&S(t.prototype,n),r&&S(t,r),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return I(this,n)}}function I(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q={formSelector:".modal__form_validator",inputSelector:".modal__field",submitButtonSelector:".modal__submit-button",inactiveButton:"modal__submit-button_invalid",inputError:"modal__field_error",inputErrorActive:"modal__input-error_active"},x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(i,e);var t,n,r,o=C(i);function i(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,n))._handleFormSubmit=r,t._popupForm=t.popup.querySelector("form"),t._inputList=t.popup.querySelectorAll(".modal__field"),t._submitText=t._popupForm.querySelector(".modal__submit-button").textContent,t.validator=new w(q,t._popupForm),t}return t=i,(n=[{key:"close",value:function(){j(P(i.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"open",value:function(e){j(P(i.prototype),"open",this).call(this),e&&this._inputList.forEach((function(t){t.value=e[t.name]})),this.validator.enableValidation()}},{key:"_getInputValues",value:function(){var e=this;return this.formValues={},this._inputList.forEach((function(t){e.formValues[t.name]=t.value})),this.formValues}},{key:"setEventListeners",value:function(){var e=this;j(P(i.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault();var n=e._handleFormSubmit(e._getInputValues());e._popupForm.querySelector(".modal__submit-button").textContent="Сохранить...",n?n.then((function(){e._popupForm.querySelector(".modal__submit-button").textContent=e._submitText,e.close()})):(e._popupForm.querySelector(".modal__submit-button").textContent=e._submitText,e.close())}))}}])&&E(t.prototype,n),r&&E(t,r),i}(l);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=document.querySelector(t),this._aboutSelector=document.querySelector(n),this._avatarSelector=document.querySelector(r)}var t,n,r;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,about:this._aboutSelector.textContent,avatar:this._avatarSelector.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=void 0===t?this.getUserInfo().name:t,r=e.about,o=void 0===r?this.getUserInfo().about:r,i=e.avatar,u=void 0===i?this.getUserInfo().avatar:i;this._nameSelector.textContent=n,this._aboutSelector.textContent=o,this._avatarSelector.src=u}}])&&T(t.prototype,n),r&&T(t,r),e}();function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t,n){return(J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return M(this,n)}}function M(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(i,e);var t,n,r,o=D(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e))._image=t.popup.querySelector(".modal__render"),t._text=t.popup.querySelector(".modal__render-text"),t}return t=i,(n=[{key:"open",value:function(e,t){J(N(i.prototype),"open",this).call(this),this._image.src=e,this._image.alt=t,this._text.textContent=t}}])&&F(t.prototype,n),r&&F(t,r),i}(l);function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._iframe=document.querySelector(".iframe")}var t,n,r;return t=e,(n=[{key:"_loadIframe",value:function(){var e={token:"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IklTQlJBQ0hVIiwidXJtZDpPcmdhbml6YXRpb25JZCI6IjEzMTIzMTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJpc2JyYWNodUBtdHMucnUiLCJ1cm1kOkZJTyI6IldpZGdldFRlc3QiLCJleHAiOjI1MzQwMjI5MDAwMCwiaXNzIjoiRGVhbGVyUG9ydGFsV2lkZ2V0In0.q9RxGLO-TchG6t2k1U7Lg0YMlhEmI28JPp92wxpJd7izH03zvWTc-YuC06XmEUCONxTnpiE3ekz61ky6CbIgEw",actions:[{type:"close_widget",value:!1}],address:"Энгельс"};this._iframe.contentWindow.postMessage("".concat(JSON.stringify(e)),"https://urmdf-canary.ssl.mts.ru/widget/"),console.log(JSON.stringify(e))}},{key:"iframeOpen",value:function(){var e=this;this._iframe.classList.add("iframe_open"),this._iframe.src="https://urmdf-canary.ssl.mts.ru/widget/",setTimeout((function(){e._loadIframe()}),1e3)}},{key:"iframeClose",value:function(){this._iframe.classList.remove("iframe_open")}}])&&W(t.prototype,n),r&&W(t,r),e}(),Z=document.querySelector(".profile__edit-button"),B=document.querySelector(".profile__add-button"),G=document.querySelector(".profile__overlay"),H=document.querySelector(".profile__iframe"),X=document.querySelector(".modal_render"),Y=document.querySelector(".modal__render"),Q=document.querySelector(".modal__render-text"),K=document.querySelector(".profile__name"),$=document.querySelector(".profile__status"),ee=new a({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"588c72f6-47fd-494a-9f61-2083e374b77d","Content-Type":"application/json"}});ee.getUserInfo().then((function(e){var t=new z,n=new R(".profile__name",".profile__status",".profile__avatar");n.setUserInfo(e);var r=new x({popupSelector:".modal_editor",handleFormSubmit:function(e){return n.setUserInfo(e),ee.setUserInfo(e.name,e.about)}});r.setEventListeners(),Z.addEventListener("click",(function(){return r.open(n.getUserInfo())}));var o=new x({popupSelector:".modal_updateavatar",handleFormSubmit:function(e){return n.setUserInfo(e),ee.setUserAvatar(e.avatar)}});o.setEventListeners(),G.addEventListener("click",(function(){return o.open()}));var i=new A(".modal_render");ee.getInitialCards().then((function(n){var r=new k({items:n,renderer:function(t){var n={remove:function(){return r.deleteItem(t),ee.delInitialCards(t._id)},like:function(){return ee.addLikeCard(t._id)},dislike:function(){return ee.remLikeCard(t._id)}};return new b(t.name,t.link,n,t.likes,t.owner,".template",(function(e,t){i.open(e,t),i.setEventListeners()})).generateCard(e._id)}},".elements");r.render();var o=new x({popupSelector:".modal_newform",handleFormSubmit:function(e){return ee.setInitialCard(e.name,e.link).then((function(t){e.likes=[],e.owner={},r.addItem(t)}))}});o.setEventListeners(),B.addEventListener("click",(function(){return o.open()})),H.addEventListener("click",(function(){t.iframeOpen()}))}));window.addEventListener("message",(function(e){!1===e.data&&t.iframeClose()}),!1)}))}]);