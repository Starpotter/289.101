/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red while the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck = document.getElementById('puck');
var puck_x = 210;
var puck_y = 210;
var speed = 50;
puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

function logCoordinates() {
    console.log('x=' + puck_x + ' y=' + puck_y);
}

function checkCollision() {
    // collision detection code goes here
    if (puck_x >= 250 && puck_x <= 340 && puck_y >= 150 && puck_y <= 240) {
        console.log('collision!');
        document.getElementById('gap').style.backgroundColor = 'red';
    } else{
        document.getElementById('gap').style.backgroundColor = 'white';
    }
}
function teleportEdge(){
    if (puck_x <= 0){
        puck.style.left = puck_x + 590;
        console.log('collision!');
    }else if (puck_x <= 590){
        puck.style.left = puck_x - 590;
    }else if (puck_y >= 0){
        puck.style.top = puck_y + 390;
    }else if (puck_y <= 390){
         puck.style.top = puck_y - 390;
}
}


document.getElementById('left').addEventListener('click', () => {
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    teleportEdge()
});

document.getElementById('right').addEventListener('click', () => {
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    teleportEdge()
});

document.getElementById('up').addEventListener('click', () => {
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    teleportEdge()
});

document.getElementById('down').addEventListener('click', () => {
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    teleportEdge()
});