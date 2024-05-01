let pickRandomChoice = () => {
    const choiceInput = document.querySelector("#choices");
    const result = document.querySelector("#result");

    const choices = choiceInput.value.split(",").map((choice) => choice.trim())

    if (choices.length === 0 || (choices.length === 1 && choices[0] === "")) {
        result.textContent = "Please Enter Choices";
    }
    const randomIndex = Math.floor(Math.random() * choices.length);

    const randomChoice = choices[randomIndex];
    result.textContent = `Random Choice : ${randomChoice}`;

}

const pickBtn = document.querySelector("#pickBtn");
pickBtn.addEventListener("click", pickRandomChoice)