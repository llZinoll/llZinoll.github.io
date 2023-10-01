const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst =  document.querySelectorAll('.slider__section')[0];
  slider.style.marginLeftSSS = '-200%';
  slider.style.trasnsition = 'all 0.5s';
  setTimeout(function(){
    slider.style.trasnsition = 'none';
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = '-100%';
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll('.slider__section');
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeftSSS = '';
  slider.style.trasnsition = 'all 0.5s';
  setTimeout(function(){
    slider.style.trasnsition = 'none';
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = '-100%';
  }, 500);
}


btnRight.addEventListener('click', function(){
  Next();
});

btnLeft.addEventListener('click', function(){
  Prev();
});