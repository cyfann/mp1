var carouselScrollAmount = 0; // slides
const numPages = 4;
const scrollAmount = 450; //pixels
const carouselLeft = document.getElementById("carousel-left");
const carouselRight = document.getElementById("carousel-right");
const scroller = document.getElementById("carousel-scroller");
const indicators = document.getElementById("carousel-indicators");

let updateIndicators = function() {
    for (let indicator of indicators.children) {
        let posNum = parseInt(indicator.id.slice(-2));
        if (posNum == -carouselScrollAmount) {
            indicator.classList.add("active");
        } else {
            indicator.classList.remove("active");
        }
    }
}

carouselLeft.addEventListener("click", function() {
    if (carouselScrollAmount < 0) {
        carouselScrollAmount += 1;
        for (let scrollElement of scroller.children) {
            scrollElement.style.left = carouselScrollAmount * scrollAmount + "px";
        }
        carouselRight.classList.remove("disabled");
    }
    if (carouselScrollAmount == 0) {
        carouselLeft.classList.add("disabled");
    }
    updateIndicators();
})

carouselRight.addEventListener("click", function() {
    if (carouselScrollAmount > -(numPages - 1)) {
        carouselScrollAmount -= 1;
        for (let scrollElement of scroller.children) {
            scrollElement.style.left = carouselScrollAmount * scrollAmount + "px";
        }
        carouselLeft.classList.remove("disabled");
    } 
    if (carouselScrollAmount == -(numPages - 1)) {
        carouselRight.classList.add("disabled");
    }
    updateIndicators();
})