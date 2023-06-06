document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const interval = 5000; // Intervalo de tiempo entre las transiciones (en milisegundos)
    let currentItemIndex = 0;
  
    function showNextItem() {
      carouselItems[currentItemIndex].classList.remove("active");
      currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
      carouselItems[currentItemIndex].classList.add("active");
    }
  
    function showPreviousItem() {
      carouselItems[currentItemIndex].classList.remove("active");
      currentItemIndex = (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
      carouselItems[currentItemIndex].classList.add("active");
    }
  
    setInterval(showNextItem, interval);
  
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
  
    prevButton.addEventListener("click", showPreviousItem);
    nextButton.addEventListener("click", showNextItem);
  });