// Pobierz elementy DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Event listener dla pola input
nameInput.addEventListener("input", () => {
    const inputValue = nameInput.value.trim(); // Usuń białe znaki z początku i końca tekstu

    // Aktualizuj zawartość spana na podstawie wartości z pola input
    nameOutput.textContent = inputValue || "Anonymous";
});
