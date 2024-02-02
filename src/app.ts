const counter = document.querySelector("#counter")
const reset = document.querySelector("#reset")
const span = document.querySelector("span");
let i = 0;

const count_up = () => {
    i++;
    span.innerText = i.toString();

}
const reset_func = _ =>{
    i = 0;
    span.innerText = i.toString();
};


counter.addEventListener("click", count_up);
reset.addEventListener("click", reset_func);
