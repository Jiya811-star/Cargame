var ball2, database, position, showError;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
   
    ball2 = createSprite(200,200,10,10);
    ball2.shapeColor = "red";

    var ball2Position = database.ref('ball/position');
    ball2Position.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if (position !== undefined){
    if(keyDown(LEFT_ARROW)){
       writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}
/*function changePosition(x,y){
    ball2.x = ball.x + x;
    ball.y = ball.y + y;
}*/

function readPosition(data){
    position = data.val();
    ball2.x = position.x;
    ball2.y = position.y;
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x +x,
        'y': position.y +y
    })
}