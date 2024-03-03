chrome.runtime.onInstalled.addListener(() => {
  console.log("hi there");
});

chrome.bookmarks.onCreated.addListener(function () {
  console.log("just bookmarked");
});
