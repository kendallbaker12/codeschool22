console.log("Hello World.");

function myRandom(min,max){
    return Math.floor(Math.random() *max)+min;
}


var myrand = document.querySelector("#rand1");
var myrand2 = document.querySelector("#rand2");

var x = myrand.innerHTML = myRandom(0,100); 
var y = myrand2.innerHTML = myRandom(0,100);
var randomanswer = x + y;
console.log(randomanswer)
console.log(myrand)
console.log(myrand2)




var mybutton = document.querySelector("#answer-button");
mybutton.onclick = function(){
    var myInput = document.querySelector("#answer-input");
    var mydiv = document.querySelector("#correct-answer");

    if(myInput.value == randomanswer){
        mydiv.innerHTML = "correct!";
        mydiv.style.color = "green";
        x = myrand.innerHTML = myRandom(0,100);
        y = myrand2.innerHTML = myRandom(0,100);
        randomanswer = x+y;
    }else{
        mydiv.innerHTML = "incorrect!";
        
    }
    myInput.value = "";

};