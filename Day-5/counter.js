let count = 0;

let countDisplay = document.querySelector("#count");
let incBtn = document.querySelector("#ins");
let decBtn = document.querySelector("#des");
let resetBtn = document.querySelector("#reset");

// Increase
incBtn.addEventListener("click",function(){
    count++;
    updateDisplay();
    console.log(count);
});

//Decrease
decBtn.addEventListener("click",function(){
    count--;
    updateDisplay();
    console.log(count);
});

//reset
resetBtn.addEventListener("click", function(){
    count=0;
    updateDisplay();
    console.log(count);
});

//update UI
function updateDisplay(){
    countDisplay.innerText = count;

    //color change
    if(count > 0){
        countDisplay.style.color = "green";
    }else if(count < 0){
        countDisplay.style.color = "red";
    }else{
        countDisplay.style.color = " black";
    }
}
