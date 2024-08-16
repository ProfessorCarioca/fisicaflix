let xBolinha = 250;
let yBolinha = 250;
let velocidadexBolinha = 8;
let velocidadeyBolinha = 8;
let diametro = 50;
let raio = diametro/2; 
let xRaquete = 50;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 100;
//variáveis do oponente
let xRaqueteOponente = 450;
let yRaqueteOponente = 150;
let velocidadeyRaqueteOponente = 5;
//let verificaColisaoRaquete;
//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;
 let raquetada;
let ponto;
let trilha;


function setup() {
  createCanvas(500, 400);
 //trilha.play();
}

function draw() {
  background(0);
 verificaColisaoRaquete(); 
  bolinha ();
  // descomente o  comando abaixo para chamar a função colisãoRaqueteOponente mas requer ajustes nesta função.
  verificaColisaoRaqueteOponente();
marcaPonto();
  incluiPlacar();

  // criar bolinha
  
  function bolinha () {
  circle(xBolinha, yBolinha, diametro);
   
  
  
  // mova a bolinha
  
  xBolinha = xBolinha + velocidadexBolinha;
 yBolinha += velocidadeyBolinha;
  
  // se tocar na borda volte 
  if ( xBolinha + raio > width || xBolinha - raio < 0 ) {
    velocidadexBolinha *= -1;
  }
  
  if ( yBolinha + raio > height || yBolinha - raio < 0 ) {
    velocidadeyBolinha *= -1;
  }
  }
  // criar raquete do jogador
  
 rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura); 
 fill(random(0, 255), random(0, 255), random(0, 255));
 // rect(mouseX, mouseY, raqueteComprimento, raqueteAltura); 
  
  // movimentar raquete do jogador
  
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
// colisao raquete do jogador
  
    //   if (xBolinha - raio < xRaquete + raqueteComprimento
     //   && yBolinha - raio < yRaquete + raqueteAltura
      //  && yBolinha + raio > yRaquete) {
       
      //   velocidadexBolinha *= -1;
   // }

  // raquete do oponente 
  
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
  
  yRaqueteOponente += velocidadeyRaqueteOponente;
  
  if( yRaqueteOponente + raqueteAltura > height || yRaqueteOponente < 0 ){velocidadeyRaqueteOponente *= -1}

  function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadexBolinha *= -1;
   //  raquetada.play();
    }
    
   

}

  
  function verificaColisaoRaqueteOponente() {
    if (xBolinha + raio > xRaqueteOponente - raqueteComprimento
        && yBolinha + raio < yRaqueteOponente + raqueteAltura
        && yBolinha - raio > yRaqueteOponente) {
        velocidadexBolinha *= -1;
    }
  }
  //
  
 
  
  // Marce Pontos
  
 function marcaPonto() {
    if (xBolinha + raio > 590) {
        meusPontos = meusPontos + 1;
    }
    if (xBolinha - raio < 10) {
        pontosDoOponente += 1;
    }
}

 //Placar 
  
  function incluiPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
} 
  
 function preload() {
    trilha = loadSound("The CallOfKtulu.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("Pop.wav");
}

}
