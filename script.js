function DropDown() {
  let present = document.getElementById("present");
  present.classList.toggle("active");
}
let input = document.querySelector("input")
function Sub() {
  alert(`you are ${input.value} , Welcome to Adams website`)
  
}
let Frame = document.querySelector(".frame")
function Menu() {
  Frame.classList.toggle("act")
  console.log(Frame);
  
}
let Talk = document.querySelector(".lettalk"); 
function GetMe() {
  Talk.classList.add("lettalk2")
}
function Close() {
  Talk.classList.remove("lettalk2")
  console.log("hello");
  
}
let Button = document.querySelector("#Menu")
console.log(Button);


