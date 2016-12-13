/**
 * Created by Earthii on 12/12/2016.
 */
var snake;
var scl = 20;
var food;

function setup(){
    createCanvas(600,600);
    snake = new Snake();
    frameRate(10)
    pickLocation();
}

function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)),floor(random(cols)));
    food.mult(scl)
}
// function mousePressed(){ //cheat
//     snake.total++;
// }
function draw(){
    background(51);
    snake.death();
    snake.update();
    snake.show();

    if(snake.eat(food)){
        pickLocation();
    }

    //showfood
    fill(255,0,100);
    rect(food.x,food.y,scl,scl)
}
function keyPressed(){
    if (keyCode === UP_ARROW){
        if(snake.yspeed == 1){
            //not allowed to go backwards
        }else{
            snake.dir(0,-1);
        }
    }else if( keyCode === DOWN_ARROW){
        if(snake.yspeed == -1){
            //not allowed to go backwards
        }else{
            snake.dir(0,1)
        }
    }else if( keyCode === RIGHT_ARROW){
        if(snake.xspeed == -1){
            //not allowed to go backwards
        }else{
            snake.dir(1,0)
        }
    }else if( keyCode === LEFT_ARROW){
        if(snake.xspeed == 1){
            //not allowed to go backwards
        }else{
            snake.dir(-1,0)
        }
    }

}
