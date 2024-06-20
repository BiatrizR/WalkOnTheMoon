var astronaut, astrounautIdie
var ground2, groundImg
var ground, groundImg
var ground3, groundImg
var plataform1
var run
var GameState = 0;
var blockInv
var BlockHeadInv, BlockHeadInv2;
var blocoInv, blocoInv2;
var pontos = 0
var vida = 3
//inimigos;
var inimigo, inimigoImg, inimigoImgLf, deadEnemy;
var inimigo2, inimigoImg, inimigoImgLf, deadEnemy;

var trofeu, trofeuImg, win, winImg

var soundWin 
var soundLose
//função para carregar imagenbs e animações
function preload() {
  groundimg = loadImage("src/platform.png")
  astrounautIdie = loadAnimation("src/tile000.png", "src/tile001.png", "src/tile002.png", "src/tile003.png", "src/tile004.png")
  run = loadAnimation("src/spriteRun000.png", "src/spriteRun001.png", "src/spriteRun002.png", "src/spriteRun003.png", "src/spriteRun004.png")
  plataform1 = loadImage("src/platformSmallTall.png");
  //!adicionando Inimigo
  inimigoImg = loadAnimation("enemy/Attack_walk1.png", "enemy/Attack_walk2.png", "enemy/Attack_walk3.png", "enemy/Attack_walk4.png", "enemy/Attack_1.png", "enemy/Attack_2.png", "enemy/Attack_3.png", "enemy/Attack_4.png")
  inimigoImgLf = loadAnimation("enemy/Attack_walk1_Lf.png", "enemy/Attack_walk2_Lf.png", "enemy/Attack_walk3_Lf.png", "enemy/Attack_walk4_Lf.png", "enemy/Attack_1_Lf.png", "enemy/Attack_2_Lf.png", "enemy/Attack_3_Lf.png", "enemy/Attack_4_Lf.png");
  deadEnemy = loadAnimation("enemy/Dead.png", "enemy/Dead2.png", "enemy/Dead3.png");
  gameOverImg = loadImage("./src/gameOver.png");
  trofeuImg = loadImage("./src/trofeu.png");
  winImg = loadImage("./src/winner.png");
  soundWin  = loadSound("WinSound.wav");
  soundLose = loadSound("loseSound.wav")
  
}


function setup() {
  canvas = createCanvas(1600, 800);
  //TODO 1: centralizar canvas
  canvas.position(80, 100, 'fixed');
  // canvas.center();

  //jogador/astronauta
  astronaut = createSprite(400, 200, 50, 50)
  astronaut.addAnimation("tile", astrounautIdie)
  astronaut.addAnimation("run", run)
  astronaut.scale = 0.5;

  //inimigos
  inimigo = createSprite(1500, 610, 50, 50);
  inimigo.addAnimation("enemy", inimigoImg);
  inimigo.addAnimation("enemyLf", inimigoImgLf);
  inimigo.addAnimation("deadEnemy", deadEnemy)
  inimigo.scale = 1.8;
  inimigo.velocityX = 3
 
 
  inimigo2 = createSprite(4400, 610, 50, 50)
  inimigo2.addAnimation("enemy", inimigoImg)
  inimigo2.addAnimation("enemyLf", inimigoImgLf);
  inimigo2.addAnimation("deadEnemy", deadEnemy)
  inimigo2.scale = 1.8
  inimigo2.velocityX = 1

  //blocos invisiveis na cabeça do inimigo
  BlockHeadInv = createSprite(1500, 610, 50, 20)
  BlockHeadInv.visible = false
  
  BlockHeadInv2 = createSprite(4400, 610, 50, 20)
  BlockHeadInv2.visible = false


  blocoInv = createSprite(1500, 700, 80, 100)
  blocoInv.setCollider("rectangle",0,0, 80, 100)
  blocoInv.debug = true
  blocoInv.visible = false

  blocoInv2 = createSprite(1500, 700, 80, 100)
  blocoInv2.setCollider("rectangle",0,0, 80, 100)
  blocoInv2.debug = true
  blocoInv2.visible = false

  //chãos e plataformas
  ground = createSprite(635, 790, 1600, 40)
  ground.addImage(groundimg);


  ground1 = createSprite(1400, 790, 1600, 40)
  ground1.addImage(groundimg);

  ground2 = createSprite(3000, 790, 1600, 40)
  ground2.addImage(groundimg);

  ground3 = createSprite(4200, 790, 1600, 40)
  ground3.addImage(groundimg);

  ground4 = createSprite(5200, 400, 1600, 40)
  ground4.addImage(groundimg);

  ground5= createSprite(5500, 790, 1600, 40)
  ground5.addImage(groundimg);


  plataform = createSprite(2222, 700, 1600, 40)
  plataform.addImage(plataform1);

  plataform2 = createSprite(3600, 850, 1600)
  plataform2.addImage(plataform1);

  plataform3 = createSprite(4400, 500, 1600)
  plataform3.addImage(plataform1);

  plataform4 = createSprite(80, 500, 1600)
  plataform4.addImage(plataform1);

  //sprites de fim de jogo
  gameOver = createSprite(width/2 -300, height/2 -100, 800,400);
  gameOver.addImage(gameOverImg );
  gameOver.visible = false

  //trofeu
  trofeu = createSprite(5400, 290)
  trofeu.addImage(trofeuImg);
  trofeu.setCollider("rectangle",0,0, 80, 100)
  trofeu.scale =0.2


 win = createSprite(5500, height/2 -100, 800,400);
 win.addImage(winImg);
 win.visible = false;




}



//função para executar as ações do jogo
function draw() {
  background("lightblue");
  camera.position.x = astronaut.x
  astronaut.velocityY = astronaut.velocityY + 5
  console.log(astronaut.y)


  //adicionando edição e modificação de texto
  textSize(30);
  fill("green")
  text("🏆 ", astronaut.x + 325, 80);
  text("pontos: " + pontos, astronaut.x + 200, 80);

  text("💗 ", astronaut.x + 505, 80);
  text("vidas: " + vida, astronaut.x + 400, 80);

   
   gameOver.visible = false;
  // win.visible = false;

  if (keyDown("right")) {
    GameState = 1;
   
  }

  if (GameState == 1) {
   // win.visible = false;
    if (keyDown("right")) {
      astronaut.changeAnimation("run", run)
      astronaut.x = astronaut.x + 10
    }
    if (astronaut.collide(ground)) {
      astronaut_jump()
    } 
    else if (astronaut.collide(ground1)) {
      astronaut_jump()
    }
    else if (astronaut.collide(ground2)) {
      astronaut_jump()
    }
    else if (astronaut.collide(ground3)) {
      astronaut_jump()
    }

    else if (astronaut.collide(ground4)) {
      astronaut_jump()
    }
    //completando o pulo
    else if (astronaut.collide(ground5)) {
      astronaut_jump()
    } else if (astronaut.collide(plataform)) {
      astronaut_jump()
    } 
    else if (astronaut.collide(plataform2)) {
      astronaut_jump()
    } else if (astronaut.collide(plataform3)) {
      astronaut_jump()
    } else if (astronaut.collide(plataform4)) {
      astronaut_jump()
    }
  

    //chamando funções 
    EnemyDead();
    dano();
    
   // win.visible = false;
    //comportancia do inimigo
    if (inimigo.x > 1580) {
      inimigo.velocityX = -5
      inimigo.changeAnimation("enemyLf", inimigoImgLf)
    } if (inimigo.x < 1200) {
      inimigo.velocityX = +5
      inimigo.changeAnimation("enemy", inimigoImg)
    }


    if (inimigo2.x > 4480) {
      inimigo2.velocityX = -5;
      inimigo2.changeAnimation("enemyLf", inimigoImgLf)
      
    } if (inimigo2.x < 4000) {
      inimigo2.velocityX = +5
      inimigo2.changeAnimation("enemy", inimigoImg)
     
    }
    BlockHeadInv.x = inimigo.x;
    BlockHeadInv2.x = inimigo2.x;


    blocoInv.x = inimigo.x
    blocoInv2.x = inimigo2.x


    //chamado gameOver
    if(vida == 0){
      camera.position.x = width/2;
      GameState = 2;
    }
   

    
    if(astronaut.isTouching(trofeu)){
     // camera.position.x = width/2;
      GameState =3;
      //OPERADOR LÓGICO DE NEGAÇÃO !, PARA O SOM TOCAR UMA VEZ
      if(!soundWin.isPlaying()){
        soundWin.play()
      }

    }
  
  }
  if(GameState ==3){
    camera.position.x = width/2;
    gameWin();
  }

  //definindo fim de jogo
  if(GameState == 2){
   astronaut.destroy();
    textFont("courier New");
    textSize(40);
    strokeWeight(10);
    stroke("#2d126b");
    fill("#dbb623")
    text("GAME OVER!", width/2 -400, height/2 +100, 800,400);

    gameOver.visible = true;
    win.visible = false;
    if(!soundLose.isPlaying()){
      soundLose.play();
    }

    
  }



  astronaut.collide(ground);
  astronaut.collide(ground1);
  astronaut.collide(ground2);
  astronaut.collide(ground3);
  astronaut.collide(ground4);
  astronaut.collide(ground5);
  astronaut.collide(plataform);
  astronaut.collide(plataform2);
  astronaut.collide(plataform3);
  astronaut.collide(plataform4);

  drawSprites();

}

//função de pulo do astronauta
function astronaut_jump() {
  if (mouseDown("leftButton")) {
    astronaut.velocityY = astronaut.velocityY - 60
    astronaut.x = astronaut.x + 50
   
  }
}


//função de colisão com o bloco invisível para matar o inimigo
function EnemyDead() {
  if (astronaut.isTouching(BlockHeadInv)) {
    inimigo.changeAnimation("deadEnemy", deadEnemy)
    inimigo.lifetime = 20
    BlockHeadInv.destroy()
    pontos = pontos + 1
    blocoInv.destroy()
  }
  if (astronaut.isTouching(BlockHeadInv2)) {
    inimigo2.changeAnimation("deadEnemy", deadEnemy)
    inimigo2.lifetime = 20
    BlockHeadInv2.destroy()
    pontos = pontos + 1
    blocoInv2.destroy()
  }
}


//função para tirar vida do astronauta
function dano() {
  if (astronaut.isTouching(blocoInv)) {
    astronaut.x = 400
    vida = vida -1
  }

  if (astronaut.isTouching(blocoInv2)) {
    astronaut.x = 400
    vida = vida -1
  }
  if (astronaut.y > 900) {
    vida = vida -1
    astronaut.x = 400;
    astronaut.y = 200;
    
  }

 
}

function gameWin(){
  
  win.visible = true;
  textFont("courier New");
  textSize(40);
  strokeWeight(10);
  stroke("#2d126b");
  fill("#dbb623")
  text("you win!", width/2 -400, height/2 +100, 800,400);


  astronaut.destroy();
}
