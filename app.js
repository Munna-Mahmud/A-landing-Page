const topPlayersTitle = document.getElementById('top-players-title');
topPlayersTitle.style.color = 'orange';

const blogsTitle = document.getElementById('blogs-title');
blogsTitle.style.color = 'orange';

//bgcolor change

const bgColor = document.getElementById('bg-color');
bgColor.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';

//4 


//5
function updateNumber(isIncreasing) {
    const btnInput = document.getElementById('input-number');
    const inputNumber = btnInput.value;
    if(isIncreasing ==true){
        btnInput.value = parseInt(inputNumber) + 1;
    } else if( inputNumber > 0){
        btnInput.value = parseInt(inputNumber) - 1;
    }
}

document.getElementById('press-btn-plus').addEventListener('click', function () {
    updateNumber(true)
 
});

document.getElementById('press-btn-minus').addEventListener('click', function () {
   updateNumber(false);
   
})

