
var intervalo = 3000;

function slide1(){
    document.getElementById('banner').src='img/1.png';
    setTimeout('slide2()', intervalo);
}

function slide2(){
    document.getElementById('banner').src='img/2.png';
    setTimeout('slide3()', intervalo);
}
function slide3(){
    document.getElementById('banner').src='img/3.png';
    setTimeout('slide1()', intervalo);
}