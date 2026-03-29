// take max No form User
const max = prompt(" Enter the max number : ");

// random value by the max no
let rand = Math.floor(Math.random() * max) + 1;

//guess
let guess = prompt("Guess the Number: ");
while(true){
    if(guess == "quit"){
        alert(` YOU QUIT!  Random number was ${rand}`);
        break;
    }
    if(guess == rand){
        alert(`Congrate!! Your are right!! Random number was ${rand} `);
        break;
    }else if(guess < rand){
        guess = prompt("hint: Your guess was too small. Please try again! ");
    }else{
        guess = prompt("hint: Your guess was too large. Please try again! ");
    }
}
