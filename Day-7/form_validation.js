let btn = document.querySelector("#submit");

btn.addEventListener("click", function(){
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let message = document.querySelector("#message");

    if(username === "" || password === ""){
        message.innerText = "please fill all fields!";
        message.style.color = "red";
    }else if (password.length < 6){
        message.innerText = " Password must be at least 6 characters!";
    }else{
        message.style.color = "green";
        message.innerText = "Login successfull";

    }
});
