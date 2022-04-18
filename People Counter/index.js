let count = 0
let countEl = document.getElementById("count")
let inc = document.getElementById("inc")
let save = document.getElementById("save")
let saveEnt = document.getElementById("saveEnt")

inc.addEventListener("click", function() {
    count++;
    countEl.textContent = count
})

save.addEventListener("click", function (){
    countStr = count + " - "
    // saveEnt.innerText = countStr;
    saveEnt.innerText += countStr;
    countEl.innerText = 0;
    count = 0;
})


