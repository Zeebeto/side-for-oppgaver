function GetImage() {
    var randomNr = Math.floor(Math.random() * 1001);
    document.getElementById("contentDiv").innerHTML = "<img style='height: auto; width: 100%;' src='https://picsum.photos/id/"+ randomNr +"/200/300'>";
}