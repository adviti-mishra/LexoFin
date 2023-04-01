// const API_KEY = "YOUR_API_KEY_HERE"; for the chatgpt API


document.addEventListener("DOMContentLoaded", function() {
    // getting information about out the currently active tab in the last focused window.
  chrome.tabs.query({ "active": true, "lastFocusedWindow": true }, function(tabs) {
    // url of the first tab
    let url = tabs[0].url;
    // getting a summary of that url
    //getSummary(url);
  });
});
