let myImage = document.querySelectorAll('img');

myImage.onclick = function(){
  let myrandom = myRand(0,4)
  if(myrandom == 0 ){
    myImage.setAttribute('.cs-image','images/cs1.png'); 
  }
  if(myrandom == 1){
    myImage.setAttribute('.cs-image','images/cs2.png');
  }
  if(myrandom == 2){
    myImage.setAttribute('.cs-image','images/cs3.png');
  }
  if(myrandom == 3){
    myImage.setAttribute('.cs-image','images/cs4.png');
  }
  if(myrandom == 4){
  myImage.setAttribute('.cs-image','images/cs5.png');
  }
}