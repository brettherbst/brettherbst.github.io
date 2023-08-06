/*
TODO list
* Update images to be more relevant
* Update CSE Tutor page
* Update opening page text (I am a 3rd year/amazon intern)
*/


var slides = [
    '../../images/Friends.jpg',
    '../../images/Lacrosse1.jpg',
    '../../images/Picture2.jpg',
    '../../images/Lacrosse2.jpg',
    '../../images/NDSU Game.JPEG',
    '../../images/Picture1.jpg',
  ];
  var currentSlide = 0;
  var slideElement = document.querySelector('#main > section.one');

  function changeSlide() {
    slideElement.style.backgroundImage = 'url("' + slides[currentSlide] + '")';
    
    
    currentSlide = (currentSlide + 1) % slides.length;
  }
  
  setInterval(changeSlide, 7500);