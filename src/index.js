import './index.css';

let slideIndex = 1;
const nextSlide = document.querySelector('.comment__next-button');
const previousSlide = document.querySelector('.comment__previous-button');
const submitButton = document.querySelector('.partners__submit');

const showSlides = (n) => {
  let slides = document.getElementsByClassName("comment__item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

nextSlide.addEventListener('click', () => {
	showSlides(slideIndex += 1);
});

previousSlide.addEventListener('click', () => {
  showSlides(slideIndex -= 1);
});

submitButton.addEventListener('click', () => {
  evt.preventDefault();
})

showSlides(slideIndex);