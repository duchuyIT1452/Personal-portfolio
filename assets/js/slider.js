// chạy slide tự động

const next = document.getElementsByClassName('arrow_right')[0];

var slideIndex = 0;

const showSliders = () => {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].className = "mySlides"
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }    
  slides[slideIndex-1].style.display = "block"; 
  slides[slideIndex-1].className = "mySlides active";  
  setTimeout(showSliders, 5000);
}

showSliders();

// click để chuyển slide  

var index = 1;

const plusSlides = (a) => {
  showSlides(index += a);
}

const showSlides = (a) => {
  var slides = document.getElementsByClassName("mySlides");
  if (a > slides.length) {
    index = 1
  }    
  if (a < 1) {
    index = slides.length
  }
  for (var i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slides[index-1].style.display = "block";  
  slides[index-1].className = "mySlides active"; 
}
//------------------------------------------