var div = 360 / 12;
var radius = 300;
var gear = document.getElementById('gear');
var offsetToParentCenter = parseInt(gear.offsetWidth / 2);
var offsetToChildCenter = 40;
var totalOffset = offsetToParentCenter - offsetToChildCenter;

for (var i = 1; i <= 12; ++i) {
    var childdiv = document.createElement('div');
    childdiv.className = 'div' + i;
    childdiv.classList.add("small-circle");
    var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
    var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
    childdiv.style.top = (y + totalOffset).toString() + "px";
    childdiv.style.left = (x + totalOffset).toString() + "px";
    gear.appendChild(childdiv);
}