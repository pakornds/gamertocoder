var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(background) {
  this.background = background;
  this.id = "slide" + slideIndex;
  slideIndex++;
  slideArray.push(this);
}

for (let i = 0; i < 10; i++) {
  if (i != 8) {
    new Slide(Wallpaper[i]);
  }
}

function buildSlider() {
  var myHTML;
  for (var i = 0; i < slideArray.length; i++) {
    myHTML +=
      "<div id='" +
      slideArray[i].id +
      "' class='singleSlide' style='background-image:url(" +
      slideArray[i].background +
      ");'>" +
      "</div>";
  }
  document.getElementById("mySlider").innerHTML = myHTML;
  document.getElementById("slide" + currentSlideIndex).style.left = 0;
}
buildSlider();

function prevSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === 0) {
    nextSlideIndex = slideArray.length - 1;
  } else {
    nextSlideIndex = currentSlideIndex - 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;
  document
    .getElementById("slide" + nextSlideIndex)
    .setAttribute("class", "singleSlide slideInLeft");
  document
    .getElementById("slide" + currentSlideIndex)
    .setAttribute("class", "singleSlide slideOutRight");
  currentSlideIndex = nextSlideIndex;
}

function nextSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === slideArray.length - 1) {
    nextSlideIndex = 0;
  } else {
    nextSlideIndex = currentSlideIndex + 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  document
    .getElementById("slide" + nextSlideIndex)
    .setAttribute("class", "singleSlide slideInRight");
  document
    .getElementById("slide" + currentSlideIndex)
    .setAttribute("class", "singleSlide slideOutLeft");

  currentSlideIndex = nextSlideIndex;
}

Slider = setInterval(nextSlide, 6500);
