const btn = document.querySelector("button")
const h3 = document.querySelector("#ans")
const first = document.querySelector(".first_name")
const second = document.querySelector(".second_name")

btn.addEventListener("click" , function(){

   h3.innerHTML = first.value + " " + second.value;
})