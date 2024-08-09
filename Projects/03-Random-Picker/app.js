// function to pick a random choice
let pickRandomChoice = () => {
    const choiceInput = document.getElementById("choices");
    const resultElement = document.getElementById("result");

    // get the choices from input field and split them into an array
    const choices = choiceInput.value.split(",").map((choice) => choice.trim());

    console.log(choices);

    // check if there are choices to pick from
    if (choices.length === 0 || (choices.length === 1 && choices[0] === "")) {
        resultElement.textContent = "Please enter at least one choice";
        return;  // Boşsa geri dön, devam etme
    }

    // generate a random index
    const randomIndex = Math.floor(Math.random() * choices.length);

    // display the randomly selected choice
    const randomChoice = choices[randomIndex];
    resultElement.textContent = `Random Choice: ${randomChoice}`;
};

const pickButton = document.getElementById("pickButton");

// add an event listener to the button
pickButton.addEventListener("click", pickRandomChoice);
