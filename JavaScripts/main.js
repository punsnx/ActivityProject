let slideIndex = 1;
function onloadHome() {
  showSlides(slideIndex);
}

function showSlides(n) {
  slides = document.getElementsByClassName("mySlides");
  document.getElementById("mySlides").style.display = "block";
}
