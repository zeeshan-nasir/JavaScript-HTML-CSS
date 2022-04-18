// let name = `Zee`;
// let html = `Hello ${name}! How are you?`
// html = html.slice(6,10)
// console.log(html)

// let a = 0;
// while (a < 100) {
//   console.log(a);
//   a++;
// }

// let links = document.links;
// let searchStr = "Javascript";
// Array.from(links).forEach(function (elements) {
//   let href = elements.href;
//   if (href.includes(searchStr)) {
//     console.log(href);
//   }
// });

// const divEl = document.createElement('div');
// divEl.innerHTML = `My name is what!`;
// document.body.appendChild(divEl);
// divEl.style.fontSize = "xxx-large";

// const parEl = document.createElement('p');

// divEl.appendChild(parEl)
// parEl.innerHTML = "Hello!"

// console.log(parEl)

// const btnEl = document.getElementById('btn');
// btnEl.addEventListener('click', () => {
//     const divEl2 = document.createElement('div');
//     divEl2.innerHTML = `Poof, I am created!`
//     btnEl.appendChild(divEl2);
// } )

// const paraEl = document.getElementById('txt');
// const txtEl = document.createTextNode("Text to be added");

// paraEl.innerText = `WoWzaaa!`
// paraEl.appendChild(txtEl)
// console.log(txtEl)

// const arr = ['Hello' , 'Whats Up!', 'Majama','Okay!'];

// let line = ""
// for (let i = 0; i < arr.length; i++) {
//     line += `<li>${arr[i]}</li>`;
// }
// document.write(line)

// arr.forEach((list) => document.write(`${list}, `));

//Callbacks//

// let list = ['Zee', 'Shubhan','Umar'];

// let namePrint = () => {
//     setTimeout(() => {
//         list.forEach((name) => document.write(`<li>${name}</li> <br>`));
//     }, 1000);
// }

// let nameAdd = (newName, callback) => {
//     setTimeout(() => {
//         list.push(newName);
//         callback()
//     }, 3000);
// }

// let newName = 'Kazim'
// nameAdd("Kazim", namePrint)

//Promises//

// let list = ['Zee', 'Shubhan', 'Umar'];

// let nameAdd = (newName) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             list.push(newName);
//             const error = true;
//             if (!error) {
//                 console.log("No errors boy!");
//                 resolve();
//             } else {
//                 console.log("Errors matafaka!");
//                 reject();
//             }
//         }, 3000);
//     })
// }

// let namePrint = () => {
//     setTimeout(() => {
//         list.forEach((item) => document.write(`<li>${item}</li> <br>`));
//     }, 1000);
// }

// nameAdd("Kazim").then(namePrint).catch(() => console.log("Ooopsiiee, too many errors!"))

// const arr = [13, 11, 3, 30];
// let sum = 0;
// arr.forEach((item) => {
// document.write(`${item} `)
//     sum += item;
// });
// document.write(sum);

//Await and async

// const getData = async () => {
//     const response = await fetch('https://api.github.com/users');
//     const users = await response.json();
//     return users;
// }

// let a = getData();
// a.then((data) => console.log(data))

// let list = ["Zee", "Shubhan", "Umar"];

// const finalNames = async () => {
//     await nameAdd("Kazim");
//     namePrint();
// };

// const namePrint = () => {
//     setTimeout(() => {
//         list.forEach((item) => document.write(`<li>${item}</li><br>`));
//     }, 1000);
// };

// const nameAdd = (name) => {
//     setTimeout(() => {
//         list.push(name);
//     }, 3000);
// };

// finalNames();

// const bill = 499;
// const discountPrice = 500;
// if (bill >= discountPrice) {
//     console.log("Give discount");
// }else{
//     console.log("No discount");
// }

const char = "z";

switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel")
        break;

    default:
        console.log("Not a vowel")
        break;
}

if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    console.log("Vowel");
}
else {
    console.log("Not a vowel");
}

function prime(n){
    for(i=2; i<n; i++){
        if(n%i === 0){
            return false;
        }
        else{
            return true;
        }
    }
    if(true){
        console.log("Prime Number");
    }
    if(false){
        console.log("Not Prime Number");
    }
}

function identifyPrime(num) {
    var flag = 0;
    
    for(var i=2; i<num; i++){
        if(num%i === 0){
            // console.log("No");
            flag ++;
            break;
        }
        else{
            // console.log("Yes");
            flag = 0; 
        }
    }
    
    if(flag === 1){
        console.log("No");
    }
    
    if(flag === 0 || num === 2){
        console.log("Yes");
    }
}