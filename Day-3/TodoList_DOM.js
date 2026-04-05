let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function(){

    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = " Delete";
    delBtn.classList.add(".delete");

    item.appendChild(delBtn);

    input.value = " ";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listt = event.target.parentElement;
        listt.remove();
    }
});
