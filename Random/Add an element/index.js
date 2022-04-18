const btn = document.getElementById("btn");

btn.addEventListener('click', function() {
    createPara();
})


function createPara() {
    const para = document.createElement('p');
    para.textContent = "I have been created because of the click";
    document.body.appendChild(para);
}
