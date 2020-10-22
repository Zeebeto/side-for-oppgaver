// funksjoner for spørsmål
function wrong() {
    document.getElementById("anwser").innerHTML ="WRONG STOOPID"
}

function correct(){
    document.getElementById("anwser").innerHTML ="CORRECT, YOU VERI SMART   "
}

// funksjoner for ferdighet 2a
function testOnLoad() {
    document.getElementById('info').innerHTML += '<li>onload</li>';
}

function testOnChange() {
    document.getElementById('info').innerHTML += '<li>onchange</li>';
}

function testOnInput() {
   document.getElementById('info').innerHTML += '<li>oninput</li>';
   
}

function testOnMouseOver() {
    document.getElementById('info').innerHTML += '<li>onmouseover</li>';
}

function testOnMouseOut() {
    document.getElementById('info').innerHTML += '<li>onmouseout</li>';
}

function Reset() {
   document.getElementById('info').innerHTML = '';
   document.getElementById('TxtInput').value = '';
}

function TestOnKeyDown() {
document.getElementById('info').innerHTML += '<li>onkeydown</li>';
}

function LogToConsole() {
    var click = ':^)';
    console.log(click);
}

//funksjoner for table
function mouseOver(x) {
    x.innerHTML ="x";
}

function mouseOut(z) {
    z.innerHTML = `o`
}