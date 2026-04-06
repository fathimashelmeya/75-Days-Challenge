let btn = document.querySelector("#gen");
let passDisplay = document.querySelector("#pass");

btn.addEventListener("click", function(){
    let password = genPass(8);
    passDisplay.innerText = password;
});

function genPass(length){
    let chars = "abcdefghijklmnopqrstuvwxyz123456789!@#$%";
    let password = "";

    for(let i=0; i<length; i++){
        let randomIndex = Math.floor(Math.random()* chars.length);
        password += chars[randomIndex];
    }
    return password;
}
