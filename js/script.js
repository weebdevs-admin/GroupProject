var bodyElementi = document.querySelector("body");
var checkbox = document.querySelector('.checkbox');
var ballcircle = document.querySelector('.ball')
var bollcircle = document.querySelector('.ball')

checkbox.addEventListener("click", function(){
  bodyElementi.classList.toggle('dark');
});

checkbox.addEventListener("click", function(){
  ballcircle.classList.toggle('yel');
});

checkbox.addEventListener("click", function(){
  bollcircle.classList.toggle('nel');
});