var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("ImageCarousel");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[Math.floor(Math.random() * x.length)].style.display = "block";
    setTimeout(carousel, 6000);
}
