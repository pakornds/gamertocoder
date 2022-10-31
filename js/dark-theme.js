function darkMode() {
  let card = document.getElementsByClassName("card");
  let body = document.body;
  let header = document.getElementById("header");
  let footer = document.getElementById("footer");
  let menu = document.getElementsByClassName("menu");
  let icon = document.getElementById("icon");
  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < menu.length; i++) {
    menu[i].classList.toggle("dark-mode-menu");
  }

  body.classList.toggle("dark-mode-2");
  header.classList.toggle("dark-mode-3");
  footer.classList.toggle("dark-mode-4");

  icon.classList.toggle("dark-mode-menu");
  let darkMode = document.getElementById("darkMode");
  darkMode.classList.toggle("bright-btn");
}
