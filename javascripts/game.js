var keysPressed = [];

window.onload = function(){
    startUp();
}

$(document).keydown(function(e){
    var haskey = keysPressed[e.keyCode];
    if(!haskey){
        keysPressed[e.keyCode] = true;
    }
});

$(document).keyup(function(e){
    keysPressed[e.keyCode] = false;
});

function startUp(){
    var canvas = document.getElementById('game_canvas');
    var context = canvas.getContext('2d');
    var ball = Bola();
    window.setInterval(function(){ gameLoop(canvas, context, ball);}, 15);
}

function gameLoop(canvas, context, ball){
    clearCanvas(canvas);
    drawObj(context, ball);
    ball.move(keysPressed);
}

Bola = function(){
    var x = 0;
    var y = 0;
    var sprite = new Image();
    sprite.src = "images/ball.png";
    return{
        x:x,
        y:y,
        sprite:sprite,
        move:function(keysPressed){
            var next_y = this.y + (keysPressed[38] ? -1 : 0) + //up
                      (keysPressed[40] ?  1 : 0);  //down
            var next_x = this.x + (keysPressed[37] ? -1 : 0) + //left
                      (keysPressed[39] ?  1 : 0); //rigth
            console.log(next_y);
            console.log(next_x);
            if (next_y >= 0 && next_y < 385) this.y = next_y;
            if (next_x >= 0 && next_x < 585) this.x = next_x;
        }
    }
}

function drawObj(context, obj)
{
    context.drawImage(obj.sprite, obj.x, obj.y);
}

function clearCanvas(canvas){
    canvas.width = canvas.width;
}
