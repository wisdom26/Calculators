let buttons = document.queryselector(".buttons");
let btn = document.queryselectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.queryselector(".toggleBtn");
let body = document.queryselector("body");
 
 for(let i=0;1<btn.length;i++){
 btn[i].aadEventListener("click",function() {
 if (this.innerHTML == "=") {
 value.innerHTML = eval(value.innerHTML);
 }
 else{ 
 if(this.innerHTML == "clear") {
 value.innerHTML ="";
 }
 else{
 value.innerHTML += this.innerHTML;
 }
 }
 });
 }
 toggleBtn.onclick = function () {
  body.classList.toggle("dark");
  };