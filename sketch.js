var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

        surface1 = createSprite(100, 570, 180, 25);
        surface1.shapeColor = "blue";

        surface2 = createSprite(290, 570, 180, 25);
        surface2.shapeColor = "yellow";

        surface3 = createSprite(480, 570, 180, 25);
        surface3.shapeColor = "purple";

        surface4 = createSprite(670, 570, 180, 25);
        surface4.shapeColor = "green";

        box = createSprite(random(20, 750), 200, 30, 30);
        box.shapeColor = "white";
        box.setVelocity(4, 4);

}

function draw() {

    background("black");
    
          edges = createEdgeSprites();
          box.bounceOff(edges);

        if(surface1.isTouching(box) && box.bounceOff(surface1)){
            box.shapeColor = surface1.shapeColor;
            music.play();
        }

        if(surface2.isTouching(box)){
            box.shapeColor = surface2.shapeColor;
            box.setVelocity(0, 0);
            music.stop();
        }

        if(surface3.isTouching(box) && box.bounceOff(surface3)){
            box.shapeColor = surface3.shapeColor;
            music.stop();
        }

        if(surface4.isTouching(box) && box.bounceOff(surface4)){
            box.shapeColor = surface4.shapeColor;
            music.play();
        }

    drawSprites();
}
