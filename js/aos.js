const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.getElementsByClassName("hidden");
const Hiddenelements = [];
for (let i = 0; i < hiddenElements.length; i++) {
  Hiddenelements.push(hiddenElements[i]);
}
Hiddenelements.forEach((el) => observer.observe(el));
