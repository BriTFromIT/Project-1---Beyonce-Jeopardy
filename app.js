// console.log('Hey!')

// alert("Hey!")
// Testing Javascript functionality in connection with HTML and CSS

// $('.modalfade').on('shown.bs.modal', function () {
//     $('#modalfad').trigger('focus')
//   })\

let playerOne = document.querySeletor("#player1");
let playerTwo = document.querySelector("#player2");
let bey1 = document.querySelector("#bey1");
let bey2 = document.querySelector("#bey2");
let bey3 = document.querySelector("#bey3");
let sfOne = document.querySelector("#sF1");
let sfTwo = document.querySelector("#sF2");
let sfThree = document.querySelector("#sF3");
let yonceOne = document.querySelector("#yonce1");
let yonceTwo = document.querySelector("#yonce2");
let yonceThree = document.querySelector("#yonce3");
let score = document.querySelector(".score");
let sonicCoins = 0;
let h7p1 = document.querySelector("h7p1")
let h7p2 = document.querySelector("h7p1")

playerOne.addEventListener("click", function() {
    sonicCoins += 100
    h7p1.innerHTML = sonicCoins
 });

//  player1.addEventListener('click', (event) => {
//     console.log(sonicCoins.value)
 
 
//     if (player1.value == ".player1") {
//         console.log('sonicCoins')
//     } else {
//         console.log("no")
//     }
 
//  })

