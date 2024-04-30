var astronaut, astrounautIdie
var ground2, groundImg
var ground, groundImg
var ground3, groundImg
var plataform1
var run
var GameState = 0;

//inimigos;
var inimigo, inimigoImg, inimigoImgLf,  deadEnemy;


function preload() {
  groundimg = loadImage("src/platform.png")
  astrounautIdie = loadAnimation("src/tile000.png", "src/tile001.png", "src/tile002.png", "src/tile003.png", "src/tile004.png")
  run = loadAnimation("src/spriteRun000.png", "src/spriteRun001.png", "src/spriteRun002.png", "src/spriteRun003.png", "src/spriteRun004.png")
  plataform1 = loadImage("src/platformSmallTall.png");
  //!adicionando Inimigo
  inimigoImg = loadAnimation("enemy/Attack_walk1.png", "enemy/Attack_walk2.png", "enemy/Attack_walk3.png", "enemy/Attack_walk4.png", "enemy/Attack_1.png", "enemy/Attack_2.png", "enemy/Attack_3.png", "enemy/Attack_4.png")
  inimigoImgLf = loadAnimation("enemy/Attack_walk1_Lf.png", "enemy/Attack_walk2_Lf.png", "enemy/Attack_walk3_Lf.png", "enemy/Attack_walk4_Lf.png", "enemy/Attack_1_Lf.png", "enemy/Attack_2_Lf.png", "enemy/Attack_3_Lf.png", "enemy/Attack_4_Lf.png");
  deadEnemy = loadAnimation("enemy/Dead.png", "enemy/Dead2.png", "enemy/Dead3.png");
}
function setup() {
  canvas = createCanvas(1600, 800);
  //TODO 1: centralizar canvas
  canvas.position(80, 100, 'fixed');
  // canvas.center();
  astronaut = createSprite(400, 200, 50, 50)
  astronaut.addAnimation("tile", astrounautIdie)
  astronaut.addAnimation("run", run)
  astronaut.scale = 0.5;

  
  inimigo = createSprite(1600, 610 , 50, 50);
  inimigo.addAnimation("enemy", inimigoImg);
  inimigo.scale = 1.8;
  
  
  ground = createSprite(635, 790, 1600, 40)
  ground.addImage(groundimg);


  ground2 = createSprite(1400, 790, 1600, 40)
  ground2.addImage(groundimg);

  ground3 = createSprite(3000, 790, 1600, 40)
  ground3.addImage(groundimg);

  ground4 = createSprite(4200, 790, 1600, 40)
  ground4.addImage(groundimg);

  ground4 = createSprite(5200, 400, 1600, 40)
  ground4.addImage(groundimg);

  ground4 = createSprite(5500, 790, 1600, 40)
  ground4.addImage(groundimg);


  plataform = createSprite(2222, 700, 1600, 40)
  plataform.addImage(plataform1);

  plataform2 = createSprite(3600, 850, 1600)
  plataform2.addImage(plataform1);

  plataform3 = createSprite(4400, 500, 1600)
  plataform3.addImage(plataform1);

  plataform4 = createSprite(80, 500, 1600)
  plataform4.addImage(plataform1);

}



function draw() {
  background("lightblue");
  camera.position.x = astronaut.x
  astronaut.velocityY = astronaut.velocityY + 5
  if (keyDown("right")) {
    GameState = 1;
  }
  if (GameState == 1) {
    if (keyDown("right")) {
      astronaut.changeAnimation("run", run)
      astronaut.x = astronaut.x + 10
    }
    if (astronaut.collide(ground)) {
      astronaut_jump()
    }
   else if (astronaut.collide(ground2)) {
      astronaut_jump()
    }
    else if (astronaut.collide(ground3)) {
      astronaut_jump()
    }
  }
  astronaut.collide(ground2)
  astronaut.collide(ground)
  astronaut.collide(ground3)
  astronaut.collide(plataform)


  drawSprites();

}

function astronaut_jump(params) {
  if (mouseDown("leftButton")) {
    astronaut.velocityY = astronaut.velocityY - 60
    astronaut.x = astronaut.x + 5
  }
}
