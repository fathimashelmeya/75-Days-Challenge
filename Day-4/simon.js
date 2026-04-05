// add hight score // const in screen


let gameSeq = [];
let userSeq = [];

let started= false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["red", "yellow", "green", "blue"];

// let btn = document.querySelector("button");

// step 1 : keypress -> game start's
document.addEventListener("keypress", function(){
    if(started == false){ // to start game only one time
        console.log(" key is preseed");
        started = true;

        levelUp();
    }
});

// step 2 : Flash appear
function btnFlash(btn){
    btn.classList.add("flash"); // style mai flah hai usko use karne
    setTimeout(function(){ // vo flah disappear 1s ka bad hoga
        btn.classList.remove("flash");
    },250);
}

function userBtnFlash(btn){
    btn.classList.add("userFlash"); // style mai flah hai usko use karne
    setTimeout(function(){ // vo flah disappear 1s ka bad hoga
        btn.classList.remove("userFlash");
    },250);
}

// step 2 : update the level + generate ramdon seq
function levelUp(){
    userSeq = []; // userseq 0 se start hoge // frist se click karre seq's
    level++; // updating the level
    h2.innerText = `level ${level}`; // chaning the h2 text

    //TO Generate randomlyyy
    let randIdx = Math.floor(Math.random() * 3); // generate ramdon from 0 to 3 
    let randColor = btns[randIdx]; // ramdon no se color choose // No(index) = color(on that index) 
    let randBtn =  document.querySelector(`.${randColor}`); // choose that color // select generted color 

    gameSeq.push(randColor); // arr[] add karne 
    console.log(gameSeq);

    btnFlash(randBtn); // calinf Flash fun()
}

// step 4 : check ans click by user 
function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){ // same 
        // 2 case // 1 case : middle then ..we wait till next btn pressed thennn check // nothing to do
        // 2 case : user[last index] = game [last index] ...then update the levelup  //
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{ // user =! game 
//  step 6: diaply score
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> press any key to start.`; 
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}

// step 3 :  btn click(user) + flash(user clicked btn)
function btnPress(){ // btn click hona ka bad kyaa...
    console.log(this);
    let btn = this; // btn = jo btn press hova store hai 
    userBtnFlash(btn); // calling btnFlash with btn(which is clickedd)

    let userColor = btn.getAttribute("id"); // by id taking all the color
    userSeq.push(userColor); // puching in user arr[]

    checkAns(userSeq.length-1);// calling  // last value 
}

let allBtns = document.querySelectorAll(".btn"); // class = btn sare select 
for(btn of allBtns){ // loop 
    btn.addEventListener("click", btnPress); // jo btn click hova ...uskbad vo btnPress fun mai jayega 
}

// step 5:
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
