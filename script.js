var div = 360 / 12;
var radius = 300;
var gear = document.getElementById('gear');
var offsetToParentCenter = parseInt(gear.offsetWidth / 2);
var offsetToChildCenter = 40;
var totalOffset = offsetToParentCenter - offsetToChildCenter;

for (var i = 1; i <= 12; ++i) {
    var childdiv = document.createElement('div');
    var main = childdiv.className = 'div' + i;
    childdiv.classList.add("circle");
    var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
    var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
    childdiv.style.top = (y + totalOffset).toString() + "px";
    childdiv.style.left = (x + totalOffset).toString() + "px";
    childdiv.innerHTML = `<img src="img/icons/pic${i}.png">`;
    if (main.className = "div9") {
        childdiv.innerHTML += "jankooooooooooooooooooooooooooo";
        main.innerHTML += "OK";
    }
    // childdiv.innerHTML += "jankooooooooooooooooooooooooooo";


    var p = document.getElementsByClassName("div1");
    var text = p.innerText += " And this is addonsasdasdasdasdsa.";
    gear.appendChild(childdiv);
}

// var p = document.getElementsByClassName("div1");
// p.innerText += " And this is addonsasdasdasdasdsa.";
// p.innerHTML += " And this is addonsasdasdasdasdsa.";

// var theDiv = document.getElementsByClassName("circle");
// var content = document.createTextNode("<YOUR_CONTENT>");
// theDiv.appendChild(content);