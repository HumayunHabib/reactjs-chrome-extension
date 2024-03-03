/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onInstalled.addListener(() => {
  console.log("hi there");
});

chrome.bookmarks.onCreated.addListener(function () {
  console.log("just bookmarked");
});

/******/ })()
;
//# sourceMappingURL=background.js.map