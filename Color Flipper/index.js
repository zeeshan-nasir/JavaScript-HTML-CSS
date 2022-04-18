const colors = ["Red", "Blue", "Green", "Purple", "Gray", "Teal", "Pink"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}