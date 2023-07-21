const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");
const drownDown = document.querySelector('.dropdown');
const drownDown2 = document.querySelector('.dropdown2');
const drownDown3 = document.querySelector('.dropdown3');
const drownDown4 = document.querySelector('.dropdown4');


btn1.onclick = function(){
    drownDown.classList.toggle('collapsed');
}

btn2.onclick = function(){
    drownDown2.classList.toggle('collapsed');
}

btn3.onclick = function(){
    drownDown3.classList.toggle('collapsed');
}

btn4.onclick = function(){
    drownDown4.classList.toggle('collapsed');
}

new Splide( '.splide' ).mount();

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
        heightRatio: 0.5,
    } ).mount();
} );

