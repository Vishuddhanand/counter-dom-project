var h1 = document.querySelector('h1');
var inc = document.querySelector('#inc');
var dec = document.querySelector('#dec');


let counter = 0;

inc.addEventListener('click' , function(){
    counter++;
    h1.innerHTML = counter;
})


dec.addEventListener('click' , function(){
    counter--;
    h1.innerHTML = counter;
})