//Поля ввода
const inputList = document.querySelector(".js-input-list");
const inputTitleNode = document.querySelector(".js-input");
const inputStoryNode = document.querySelector(".js-story-area");

//Кнопки
const newPostBtnNode = document.querySelector(".js-new-post-btn");
const btnNode = document.querySelector(".js-btn");

//Блок для вывода постов
const feedNode = document.querySelector(".js-feed");

//Бэкграунд для полей ввода (добавляется класс .background_active)
const backgroundNode = document.querySelector(".js-background");

//--------------------------------------Функции-----------------------------------------
const inputOpener = () => {
  backgroundNode.classList.toggle("background_active");
  inputList.classList.toggle("blog__input-list_active");
};

const getTitle = () => inputTitleNode.value;
const getStory = () => inputStoryNode.value;

const clearTitleInput = () => {
  inputTitleNode.value = "";
};
const clearStoryInput = () => {
  inputStoryNode.value = "";
};

const addButtonHandler = (e) => {
  e.preventDefault();

  if (!inputTitleNode.value) {
    inputTitleNode.classList.toggle("pulse-warning");
    return;
  } else if (!inputStoryNode.value) {
    inputStoryNode.classList.toggle("pulse-warning");
    return;
  }

  getTitle();
  getStory();
  inputOpener();

  console.log(getTitle());
  console.log(getStory());
  clearTitleInput();
  clearStoryInput();
};

//--------------------------------------Обработчики--------------------------------------
newPostBtnNode.addEventListener("click", inputOpener);

btnNode.addEventListener("click", addButtonHandler);
