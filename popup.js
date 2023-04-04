// const API_KEY = "YOUR_API_KEY_HERE"; for the chatgpt API

function getSummary(url) {
  let request = new XMLHttpRequest();
  // starting a POST request
  request.open("POST", "https://api.openai.com/v1/engines/davinci-codex/completions", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization", "Bearer " + API_KEY);
  request.onreadystatechange = function() {
  // if summary responded in a valid state, displaying summary
    if (request.readyState == 4 && request.status == 200) {
      // extracting response from the request
      let response = JSON.parse(request.responseText);
      let summary = response.choices[0].text;
      // display it in the <div "output"> of the HTML in the popup
      document.getElementById("output").textContent = summary;
    }
  };
  // prompt to be fine-tuned based on user's input
  let prompt = "Summarize the following web page assuming the reading level of a 11 year old:\n\n" + url;
  // JSON data to be sent
  let data = {
    "prompt": prompt,
    "temperature": 0.5,
    "max_tokens": 256,
    "n": 1,
    "stop": "."
  };
  request.send(JSON.stringify(data));
}

document.addEventListener("DOMContentLoaded", function() {
    // getting information about out the currently active tab in the last focused window.
  chrome.tabs.query({ "active": true, "lastFocusedWindow": true }, function(tabs) {
    // url of the first tab
    let url = tabs[0].url;
    // getting a summary of that url
    getSummary(url);
  });
});
