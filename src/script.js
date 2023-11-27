"use strict";

const hamIcon = document.querySelector(".ham-nav");
const navMenu = document.querySelector(`.nav-menu`);
const midHam = document.querySelector(`.ham-nav__el--middle`);
const topHam = document.querySelector(`.ham-nav__el--top`);
const bottomHam = document.querySelector(`.ham-nav__el--bottom`);
const hamMenu = document.querySelector(`.ham-menu`);
const hamList = document.querySelector(`.ham-menu__list`);

//HAM MENU TOGGLE (icon and list)
const toggleHam = hamIcon.addEventListener(`click`, function () {
  //reverse ham animation
  if (hamMenu.classList.contains(`ham-open`)) {
    midHam.classList.remove(`fade`);

    topHam.classList.remove(`top-transform`);
    topHam.classList.add(`top-reverse`);

    bottomHam.classList.remove(`bottom-transform`);
    bottomHam.classList.add(`bottom-reverse`);

    //close menu
    hamList.classList.remove(`ham-open__list`);
    hamMenu.classList.remove(`ham-open`);
  } else {
    //hide main nav menu
    navMenu.classList.toggle(`hidden`);

    //change to x
    midHam.classList.add(`fade`);

    topHam.classList.remove(`top-reverse`);
    topHam.classList.add(`top-transform`);

    bottomHam.classList.remove(`bottom-reverse`);
    bottomHam.classList.add(`bottom-transform`);

    //collapse menu
    hamList.classList.add(`ham-open__list`);
    hamMenu.classList.add(`ham-open`);
  }
});

//close menu on click even out of the ham nav menu
document.addEventListener(`click`, function (event) {
  if (
    !hamMenu.contains(event.target) &&
    !hamIcon.contains(event.target) &&
    hamMenu.classList.contains(`ham-open`)
  ) {
    //cross back to ham
    midHam.classList.remove(`fade`);

    topHam.classList.remove(`top-transform`);
    topHam.classList.add(`top-reverse`);

    bottomHam.classList.remove(`bottom-transform`);
    bottomHam.classList.add(`bottom-reverse`);

    //close menu
    hamList.classList.remove(`ham-open__list`);
    hamMenu.classList.remove(`ham-open`);
  }
});

//---------------FOOTER-----------------
const visitCountText = document.querySelector(`.visit-count`);

//!TEMPORARY LOCAL STORAGE PAGE VISIT COUNT (must change it to server side (node.js)website visit count)

const visitCount = function () {
  if (localStorage.visitCount) {
    // If it exists, increment it
    localStorage.visitCount = parseInt(localStorage.visitCount) + 1;
  } else {
    // If it doesn't exist, set it to 1
    localStorage.visitCount = 1;
  }

  return localStorage.visitCount; // Return the visit count
};

visitCountText.textContent = `PAGE VISITED ${visitCount()} TIMES`;

//------------------------------CONTACTS-----------------

const contactsName = document.querySelector(`#name`);
const contactsEmail = document.querySelector(`#email`);
const contactsMessage = document.querySelector(`#message`);

// window.addEventListener(`load`, function () {
//   contactsName.value = ``;
//   contactsEmail.value = ``;
//   contactsMessage.value = ``;
// });

//----------------TABS------------

const tabsContainer = document.querySelector(".tabs-container");
const tabsList = document.querySelector(".tab-list");
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

//set attribute hidden
tabButtons.forEach((tab, index) => {
  if (index === 0) {
    console.log(`tab 0`);
  } else {
    tab.setAttribute(`tabindex`, `-1`);
    tabPanels[index].setAttribute("hidden", "");
  }
});

//swith tab function:
const switchTab = function (newTab) {
  const activePanelId = newTab.getAttribute(`href`); //#tallinn for example
  // console.log(activePanelId);
  const activePanel = document.querySelector(activePanelId);
  // console.log(activePanel);

  //switch hidden state true/false
  tabPanels.forEach((panel) => {
    panel.setAttribute(`hidden`, true);
  });
  activePanel.removeAttribute(`hidden`);
};

//click event actions:
tabsContainer.addEventListener(`click`, (e) => {
  const clickedTab = e.target.closest(`a`);

  if (!clickedTab) return;
  // console.log(clickedTab);
  //prevent from anchor link behaviour
  e.preventDefault();
  switchTab(clickedTab);
});

//(AGP) accessability guidence - keyboard assistance
tabsList.setAttribute(`role`, `tablist`);

tabsList.querySelectorAll(`li`).forEach((listitem) => {
  listitem.setAttribute(`role`, `presentation`);
});

tabPanels.forEach((panel) => {
  panel.setAttribute(`tabindex`, `0`);
});
