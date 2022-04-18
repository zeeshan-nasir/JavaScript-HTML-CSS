const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector("p");

btn.addEventListener("click", function () {
    let searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    for (let i = 0; i < contacts.length; i++) {
        let contactFetch = contacts[i];
        let splitContact = contactFetch.split(':');
        if (searchName === splitContact[0].toLowerCase()) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}`; // splitContact[0] + "\'s number is " + splitContact[1] + "."
        } else {
            para.textContent = `Contact not found.`;
        }
    }
})
