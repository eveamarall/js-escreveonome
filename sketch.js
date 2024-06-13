//variaveis bolinha
let xBolinha = 300;
let diametro = 20;
let yBolinha = 200;
let raio = diametro / 2;

//variaveis velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis minha raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 120

//variaves raquete oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//colisao biblioteca
let colidiu = false;

//placar do jogo
let meuPlacar = 0
let placarOponente = 0

//variaveis sons jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentarBolinha();
  colisaoBorda();
  mostrarRaquete(xRaquete, yRaquete);
  movimentarMinhaRaquete();
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente)
  colisaoRaqueteBiblioteca(xRaquete, yRaquete)
  mostrarRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentarRaqueteOponente();
  incluirPlacar();
  marcarPonto();
}
function mostrarBolinha(){
  circle(xBolinha,yBolinha,diametro);
}
function movimentarBolinha(){
 xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha; 
}
function colisaoBorda(){
  if ( xBolinha + raio > width || 
      xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || 
      yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function colisaoRaqueteBiblioteca(x,y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1
    raquetada.play();
  }
}
function mostrarRaquete(x,y){ rect(x,y,raqueteComprimento,raqueteAltura);
}
function movimentarMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;

  }
}
function colisaoRaquete(x, y){
  if (xBolinha - raio < x + raqueteComprimento && yBolinha - raio < y + raqueteAltura && yBolinha + raio > y){
    velocidadeXBolinha *= -1
  }
} 
function movimentarRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;

}
}
function incluirPlacar(){
  stroke(250);
  textAlign(CENTER)
  textSize(23);
  fill("#03A9F4")
  rect(152, 10, 40, 27);
  fill(255)
  text(meuPlacar, 170, 30);
  fill("#03A9F4");
  rect(452, 10, 40, 27);
  fill(255)
  text(placarOponente, 470, 30)
}
function marcarPonto(){
  if (xBolinha > 590){
    meuPlacar += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    placarOponente += 1
    ponto.play();
  } 
}



