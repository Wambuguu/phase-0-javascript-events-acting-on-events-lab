// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const left = parseInt(dodger.style.left) || 0;
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const left = parseInt(dodger.style.left) || 0;
    const rightGameBoundary = window.innerWidth - dodger.offsetWidth;
    if (left < rightGameBoundary) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

