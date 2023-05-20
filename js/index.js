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

const storyFeed = [];

//--------------------------------------Функции-----------------------------------------
const inputToggler = () => {
  backgroundNode.classList.toggle("background_active");
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

const renderStory = (storyFeed) => {
  feedNode.innerHTML = "";
  storyFeed.forEach((newStory) => {
    const feedItem = document.createElement("li");
    const feedTitle = document.createElement("h2");
    const feedStory = document.createElement("p");
    feedItem.className = "blog__item";
    feedTitle.className = "blog__item-title";
    feedStory.className = "blog__item_story";
    feedItem.innerText = "";
    feedTitle.innerText = newStory.title;
    feedStory.innerText = newStory.story;

    feedNode.appendChild(feedItem);
    feedItem.appendChild(feedTitle);
    feedItem.appendChild(feedStory);
  });
};

const addButtonHandler = (e) => {
  e.preventDefault();

  if (!inputTitleNode.value) {
    inputTitleNode.classList.toggle("pulse-warning");
    return;
  } else if (!inputStoryNode.value) {
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
};

//--------------------------------------Обработчики--------------------------------------
newPostBtnNode.addEventListener("click", inputToggler);

btnNode.addEventListener("click", addButtonHandler);
