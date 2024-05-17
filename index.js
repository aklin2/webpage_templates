// Add buttons to navigation bar
let navBar = document.querySelector("nav");

// Add buttons by appending to nav bar
// Add button to nagivate to home page
const homeButton = document.createElement("button");
homeButton.innerHTML = "home";
homeButton.onclick = () => location.assign("./");
navBar.appendChild(homeButton);

// Add button to nagivate to about page
const aboutButton = document.createElement("button");
aboutButton.innerHTML = "about";
aboutButton.onclick = () => location.assign("./about.html");
navBar.appendChild(aboutButton);

// Add button for seeing all the borders in all the elements
const bordersButton = document.createElement("button");
const html = document.querySelector("html");
let borderButtonState = true;
bordersButton.innerHTML = "borders toggle";
bordersButton.addEventListener("click", () => {
  if (borderButtonState) {
    for (e of document.querySelectorAll("*")) {
      e.classList.add("addBorders");
    }
    borderButtonState = false;
  } else {
    for (e of document.querySelectorAll("*")) {
      e.classList.remove("addBorders");
    }
    borderButtonState = true;
  }
});
navBar.appendChild(bordersButton);

// External links
// Add a line that says these are external links
const externalLinksDescription = document.createElement("p");
externalLinksDescription.innerHTML = "External links";
navBar.appendChild(externalLinksDescription);
const button = document.createElement("button");
// Add external link to holy grail web design wiki page
button.innerHTML = "holy grail";
button.addEventListener("click", () => {
  window.location = "https://en.wikipedia.org/wiki/Holy_grail_(web_design)";
});
navBar.appendChild(button);

// Change the footer to copyright year
const datetime = new Date();
const footer = document.querySelector("footer");
footer.innerHTML = `© ${datetime.getFullYear()} Your Name/Company`;
