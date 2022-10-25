
const eleSquares = document.querySelector('.squares');


for (i = 1; i <= 100; i++) {
    let iString = i;

    if (i % 15 == 0) {
        iString = 'FizzBuzz';
        eleSquares.innerHTML += `<div class= "sq fizzbuzz">${iString}</div>`;
    } else if (i % 5 == 0){
        iString = 'Fizz';
        eleSquares.innerHTML += `<div class= "sq fizz">${iString}</div>`;
    } else if (i % 3 == 0){
        iString = 'Buzz';
        eleSquares.innerHTML += `<div class= "sq buzz">${iString}</div>`;
    } else {
        eleSquares.innerHTML += `<div class="sq">${iString}</div>`;
    }
    console.log(iString);   
}