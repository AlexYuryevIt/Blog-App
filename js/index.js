//Хард код
const TITLE_CHAR_LIMIT = 50;
const STORY_CHAR_LIMIT = 200;

//Поля ввода
const inputList = document.querySelector(".js-input-list");
const inputTitleNode = document.querySelector(".js-input");
const inputStoryNode = document.querySelector(".js-story-area");

//Кнопки
const newPostBtnNode = document.querySelector(".js-new-post-btn");
const btnNode = document.querySelector(".js-btn");
const closeBtn = document.querySelector(".js-close-btn");

//Счетчики
const titleCounter = document.getElementById("titleCounter");
const storyCounter = document.getElementById("storyCounter");

//Блок для вывода постов
const feedNode = document.querySelector(".js-feed");

//Бэкграунд для полей ввода (добавляется класс .background_active)
const backgroundNode = document.querySelector(".js-background");

const storyFeed = [];
let date = new Date();

//--------------------------------------Функции-----------------------------------------
const init = () => {
  titleCounter.textContent = TITLE_CHAR_LIMIT;
  storyCounter.textContent = STORY_CHAR_LIMIT;
};

init();

const inputToggler = () => {
  backgroundNode.classList.toggle("overlay_active");
  inputList.classList.toggle("blog__input-list_active");
};

const getTitle = () => {
  return inputTitleNode.value;
};
const getStory = () => {
  return inputStoryNode.value;
};

const clearTitleInput = () => {
  inputTitleNode.value = "";
};
const clearStoryInput = () => {
  inputStoryNode.value = "";
};

const revertChanges = () => {
  clearTitleInput();
  clearStoryInput();
  inputToggler();
  resetCharCounter();
};

const renderStory = (storyFeed) => {
  feedNode.innerHTML = "";
  storyFeed.forEach((newStory) => {
    const feedItem = document.createElement("li");
    const feedTitle = document.createElement("h2");
    const feedDate = document.createElement("p");
    const feedStory = document.createElement("p");

    feedItem.className = "blog__item";
    feedDate.className = "blog__item-date";
    feedTitle.className = "blog__item-title";
    feedStory.className = "blog__item_story";

    feedItem.innerText = "";
    feedDate.innerText = date.toLocaleString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    feedTitle.innerText = newStory.title;
    feedStory.innerText = newStory.story;

    feedNode.appendChild(feedItem);
    feedItem.appendChild(feedDate);
    feedItem.appendChild(feedTitle);
    feedItem.appendChild(feedStory);
  });
};

const titleCharCounter = () => {
  const counter = TITLE_CHAR_LIMIT - inputTitleNode.value.length;
  titleCounter.textContent = counter;

  if (counter < 0) {
    titleCounter.style.color = "red";
  } else titleCounter.style.color = "white";
};

const storyCharCounter = () => {
  const counter = STORY_CHAR_LIMIT - inputStoryNode.value.length;
  storyCounter.textContent = counter;

  if (counter < 0) {
    storyCounter.style.color = "red";
  } else storyCounter.style.color = "white";
};

const resetCharCounter = () => {
  titleCounter.textContent = TITLE_CHAR_LIMIT;
  storyCounter.textContent = STORY_CHAR_LIMIT;
  titleCounter.style.color = "white";
  storyCounter.style.color = "white";
};

const addButtonHandler = (e) => {
  e.preventDefault();

  if (
    !inputTitleNode.value ||
    inputTitleNode.value.length === 0 ||
    inputTitleNode.value.length > TITLE_CHAR_LIMIT
  ) {
    inputTitleNode.classList.toggle("pulse-warning");
    return;
  } else if (
    !inputStoryNode.value ||
    inputStoryNode.value.length === 0 ||
    inputStoryNode.value.length > STORY_CHAR_LIMIT
  ) {
    inputStoryNode.classList.toggle("pulse-warning");
    return;
  } else {
    inputStoryNode.classList.toggle("pulse-warning");
  }

  const storyTitle = getTitle();
  const storyText = getStory();

  clearTitleInput();
  clearStoryInput();

  const newStory = { title: storyTitle, story: storyText };
  storyFeed.push(newStory);

  renderStory(storyFeed);
  inputToggler();
  resetCharCounter();
};

//--------------------------------------Обработчики--------------------------------------
newPostBtnNode.addEventListener("click", inputToggler);

btnNode.addEventListener("click", addButtonHandler);

inputTitleNode.addEventListener("input", titleCharCounter);

inputStoryNode.addEventListener("input", storyCharCounter);

closeBtn.addEventListener("click", revertChanges);
