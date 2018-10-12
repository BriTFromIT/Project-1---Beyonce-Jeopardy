// console.log('Hey!')

// alert("Hey!")
// Testing Javascript functionality in connection with HTML and CSS

// $('.modalfade').on('shown.bs.modal', function () {
//     $('#modalfad').trigger('focus')
//   })\

// let playerOne = document.querySeletor("#player1");
// let playerTwo = document.querySelector("#player2");
let bey1 = document.querySelector("#bey1");
let bey2 = document.querySelector("#bey2");
let bey3 = document.querySelector("#bey3");
let sfOne = document.querySelector("#sF1");
let sfTwo = document.querySelector("#sF2");
let sfThree = document.querySelector("#sF3");
let yonceOne = document.querySelector("#yonce1");
let yonceTwo = document.querySelector("#yonce2");
let yonceThree = document.querySelector("#yonce3");
let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");
let sonicCoins = 0;
let h7p1 = document.querySelector("#h7p1");
let h7p2 = document.querySelector("#h7p2");



h7p1.addEventListener('click', function () {
    sonicCoins += 100
    console.log(sonicCoins)
    score1.innerHTML = sonicCoins
})
h7p2.addEventListener('click', function () {
    sonicCoins += 100
    console.log(sonicCoins)
    score2.innerHTML = sonicCoins 
});
h7p13.addEventListener('click', function () {
    sonicCoins += 200
    console.log(sonicCoins)
    score1.innerHTML = sonicCoins
})
h7p23.addEventListener('click', function () {
    sonicCoins += 200
    console.log(sonicCoins)
    score2.innerHTML = sonicCoins 
})

    // else {
    //     h7p2.addEventListener("click", function(event) {
    //     sonicCoins += 100
    //     score2.innerHTML = sonicCoins

    // });

//  player1.addEventListener('click', (event) => {
//     console.log(sonicCoins.value)


//     if (player1.value == ".player1") {
//         console.log('sonicCoins')
//     } else {
//         console.log("no")
//     }

//  })

