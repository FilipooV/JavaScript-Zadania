const minusButton = document.querySelector('[data-action="decrement"]');
const plusButton = document.querySelector('[data-action="increment"]');
const counterValueElement = document.getElementById("value");

let counterValue = 0;

function updateCounterDisplay() {
    counterValueElement.textContent = counterValue;
}

minusButton.addEventListener("click", () => {
    counterValue -= 1;
    updateCounterDisplay();
});

plusButton.addEventListener("click", () => {
    counterValue += 1;
    updateCounterDisplay();
});

updateCounterDisplay();
