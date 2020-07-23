////Chap 43-48:
////Task 1///
function link(){
    alert("Hellow World")
}

/////Task 2:
function pic(){
    alert("Thanks for purchasing a phone from us ")
}

/////Task 3:
function Delete1() {
    document.getElementById("tr1").remove();
}

function Delete2() {
    document.getElementById("tr2").remove();
}

function Delete3() {
    document.getElementById("tr3").remove();
}

function Delete3() {
    document.getElementById("tr3").remove();
}

function Delete4() {
    document.getElementById("tr4").remove();
}

function Delete5() {
    document.getElementById("tr5").remove();
}


////Task 4:
function changeImages(){
    var mobImages = document.getElementById('pic')
    mobImages.src = 'images/pic 2.jpg'
}

function beforeImages(){
    var mobImages = document.getElementById('pic')
    mobImages.src = 'images/pic 1.jpg'
}

////Task 5:
document.write("<br> <br> <br> <br> ")
var i = 0
function buttonclick(){
    document.getElementById('inc').value = ++i
}

var i = 0
function buttonclick1(){
    document.getElementById('inc').value = --i
}
