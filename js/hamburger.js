function hamActivate() {
  let h = document.getElementById("navBarV");
  let x = document.getElementById("hambt");
  if (h.style.display === "block") {
    h.style.display = "none";
    x.className = "fa fa-bars";
  } else {
    h.style.display = "block";
    x.className = "fa-solid fa-xmark";
  }
}
