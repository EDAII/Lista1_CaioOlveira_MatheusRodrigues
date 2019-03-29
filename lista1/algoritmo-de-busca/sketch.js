
var x = 0;
var elementos = [];
var valorAleaotrio = 0;
var tamanhoVetor;

class circulo {
  
  constructor(posX,posY,diametro){
    this.posX = posX;
    this.posY = posY;
    this.diametro = diametro;
    this.pintado = false;
    this.speed = 0;
  }  
  show(){
    circle(this.posX,this.posY,this.diametro);
  }

  move(){
    this.posY -= 1; 
  }

  isPintado(){
    return true;
  }
}

function preencheVetor(){
  tamanhoVetor = parseInt(random(3,18));
  valorAleaotrio = parseInt(random(0,tamanhoVetor+1))
  for(let i = 0;i < tamanhoVetor+1;i++){
    elementos.push(new circulo(50 * i + (600-((tamanhoVetor/2)*50)),300,15))
  }
  elementos[valorAleaotrio].pintado = true;
 
}

function setup() {
  createCanvas(1200,600)
  frameRate(1.5);
  preencheVetor();
  textSize(40);
  textAlign(CENTER);  
}

function draw() {
  background(0);
  escreve(false);
  for(let i = 0; i < tamanhoVetor+1;i++){
    if(elementos[i].pintado == true){
      fill(255,0,0);
    }else{
      fill(255);
    }
    elementos[i].show();
  }

  fill(0,255,0);
  elementos[x].show();
  
  if(x === valorAleaotrio){
    elementos[x].move();
    frameRate(70);
    if(elementos[x].posY == 250){
      escreve(true);
      noLoop();
    }
  }else{
    x++;
  }

}
 
function escreve(terminou){
 
  fill(0,255,0)
  text('Busca sequencial',600,60);

  if(terminou === true){
    text('Encontrou o valor!',600,500)
  }
}
