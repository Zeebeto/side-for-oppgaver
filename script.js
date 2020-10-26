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
var code = "";
function btnpnd() {
    code = document.getElementById('kodelåsdisplay').innerHTML;
}

function rightcode() {
    if (code == '0308') {
        document.getElementById('lockstatus').innerHTML = "Acces Granted"
    } else {
        document.getElementById('lockstatus').innerHTML = "Access Denied"
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

//funksoner for oppg 5 onload

document.getElementById('onloadtext').innerHTML = '' + new Date().toTimeString();
document.getElementById('onloadpic').innerHTML = '<img style="height: auto; width: 300px;" src="https://assets.bigcartel.com/product_images/244926374/fullsizeoutput_663.jpeg?auto=format&fit=max&w=1500">' + new Date().toTimeString();

//oppgave 5
var resultatDiv = document.getElementById('resultat');
        var resultatHtmlDiv = document.getElementById('resultatHtml');
        var sizeSlider = document.getElementById('sizeSlider');
        var textInput = document.getElementById('textInput');
        var colorChooser = document.getElementById('colorChooser');

        showDiv();

        function showDiv() {
            resultatDiv.innerHTML = '<div style="'
                + 'background-color: ' + colorChooser.value + ';'
                + 'width: ' + sizeSlider.value + 'px;'
                + 'height: ' + sizeSlider.value + 'px;'
                + '">' +
                textInput.value + '</div>';
            resultatHtmlDiv.innerText = resultatDiv.innerHTML;
        }