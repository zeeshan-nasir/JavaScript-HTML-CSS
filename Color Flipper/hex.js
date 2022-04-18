const hexcolors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let randomColor = "#"; 
    for (let i = 0; i < 6; i++) {
        randomColor += hexcolors[randomNumber()];
    }
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

function randomNumber() {
    return Math.floor(Math.random() * hexcolors.length);
}