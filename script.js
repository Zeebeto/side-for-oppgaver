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

//funksjoner for kodelås
var kode = '';
function rightcode() {
    kode = document.getElementById('kodelåsdisplay').innerHTML = "";
}
function btnpnd() {
    if (kode == '0308') {
        document.getElementById("lockstatus").innerHTML = "open";
    } else {
        document.getElementById('lockstatus').innerHTML = "access denied";
    }
}
function btn1() {
    document.getElementById('kodelåsdisplay').innerHTML += '1';
}

function btn2() {
    document.getElementById('kodelåsdisplay').innerHTML += '2';
}

function btn3() {
    document.getElementById('kodelåsdisplay').innerHTML += '3';
}

function btn4() {
    document.getElementById('kodelåsdisplay').innerHTML += '4';
}

function btn5() {
    document.getElementById('kodelåsdisplay').innerHTML += '5';
}

function btn6() {
    document.getElementById('kodelåsdisplay').innerHTML += '6';
}

function btn7() {
    document.getElementById('kodelåsdisplay').innerHTML += '7';
}

function btn8() {
    document.getElementById('kodelåsdisplay').innerHTML += '8';
}

function btn9() {
    document.getElementById('kodelåsdisplay').innerHTML += '9';
}

function btn0() {
    document.getElementById('kodelåsdisplay').innerHTML += '0';
}

function btnclear() {
    document.getElementById('kodelåsdisplay').innerHTML = '';
    document.getElementById('lockstatus').innerHTML = '';
}

