"use strict";
const hamIcon = document.querySelector(".ham-nav");
const navMenu = document.querySelector(`.nav-menu`);
const midHam = document.querySelector(`.ham-nav__el--middle`);
const topHam = document.querySelector(`.ham-nav__el--top`);
const bottomHam = document.querySelector(`.ham-nav__el--bottom`);
const hamMenu = document.querySelector(`.ham-menu`);
const hamList = document.querySelector(`.ham-menu__list`);

const openHam = hamIcon.addEventListener(`click`, function () {
  //hide main nav menu
  navMenu.classList.toggle(`hidden`);

  //change to x
  midHam.classList.toggle(`fade`);
  topHam.classList.toggle(`top-transform`);
  bottomHam.classList.toggle(`bottom-transform`);

  //collapse menu
  hamMenu.classList.toggle(`ham-open`);
  hamList.classList.toggle(`ham-open__list`);
});
