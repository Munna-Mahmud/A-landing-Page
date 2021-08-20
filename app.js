const topPlayersTitle = document.getElementById('top-players-title');
topPlayersTitle.style.color = 'orange';

const blogsTitle = document.getElementById('blogs-title');
blogsTitle.style.color = 'orange';

//bgcolor change

const bgColor = document.getElementById('bg-color');
bgColor.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';




//4
function updateNumber(isIncreasing,) {
    const btnInput = document.getElementById('input-number');
    const inputNumber = btnInput.value;
    var btnn = document.getElementsByClassName('.btn');


    if (isIncreasing == true) {
        btnInput.value = parseInt(inputNumber) + 1;
        if (inputNumber.value == 5) {
            btnn.value.disabled = true;
        }


    } else if (inputNumber > 0) {
        btnInput.value = parseInt(inputNumber) - 1;

    }

}

document.getElementById('press-btn-plus').addEventListener('click', function () {
    updateNumber(true)


});

document.getElementById('press-btn-minus').addEventListener('click', function () {
    updateNumber(false);

})

//3
document.getElementById('li-btn').addEventListener('click', function (){
    // console.log('clicked');
    const newLi = document.createElement('li')
    newLi.innerText = 'New item here';
    document.getElementById('add-ul').appendChild(newLi);
    });













//8

    // const products = [
    //     'A Smarter Way to Learn JavaScript',
    //     'Eloquent JavaScript',
    //     'yellow laptop with black camera',
    //     'javaScript',
    //     'LG supernova javascript Dell',
    //     'HTC low price Javascript',
    //     'A Modern Introduction to Programming.'
    // ];

    // const searching = 'javascript';

    // // indexOf
    // const output = [];
    // for (const product of products) {
    //     if (product.toLowerCase().includes(searching.toLowerCase())) {
    //         output.push(product);
    //     }
    // }

    // console.log(output);

//     const numbers = [6, 4, 7, 16, 3, 99, 2, 8, 5];
// const sortedNumbers = numbers.sort( function(a, b){
//     return a- b;
// });
// console.log(sortedNumbers);
// // number sorting fun
// const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
// const sortedBigNumbers = bigNumbers.sort(function (a, b) {
//     return a - b;
// });
// console.log(sortedBigNumbers);