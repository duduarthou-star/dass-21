let button = document.querySelector("button");
let paraText = document.querySelector("p");
let boldText = document.querySelector("b");

//listen for when user clicks on the button
button.addEventListener("click", ()=>{
  //adds styles to the elements
  button.classList.toggle("button-toggle");
  paraText.classList.toggle("p-toggle");
  boldText.classList.toggle("bold-toggle");
})