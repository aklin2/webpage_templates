// Add buttons to navigation bar
let navBar = document.querySelectorAll("nav")[0];

// Add buttons by appending to nav bar
let button = document.createElement("button");
button.type = "button";
button.innerHTML = "holy grail";
button.addEventListener("click", (e) => {
  window.location = "https://en.wikipedia.org/wiki/Holy_grail_(web_design)";
});
// button.style = ``;
navBar.appendChild(button);
