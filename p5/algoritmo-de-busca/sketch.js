
var x = 0;
var elementos = [];
var valorAleaotrio = 0;
var tamanhoVetor

class circulo {
  
  constructor(posX,posY,diametro){
    this.posX = posX;
    this.posY = posY;
    this.diametro = diametro;
    this.pintado = false;
  }  
  show(){
    circle(this.posX,this.posY,this.diametro);
  }

  isPintado(){
    return true;
  }
}

function preencheVetor(){
  tamanhoVetor = parseInt(random(3,18));
  valorAleaotrio = parseInt(random(0,tamanhoVetor+1))
  for(let i = 0;i < tamanhoVetor+1;i++){
    elementos.push(new circulo(50 * i + 100,300,15))
  }
  elementos[valorAleaotrio].pintado = true;
 
}

function setup() {
  createCanvas(1000,600)
  frameRate(1.5);
  preencheVetor();
  textSize(40);
  textAlign(CENTER);

  
}

function draw() {
  background(0);
  escreve(false);
  console.log("Valor aleatorio: "+valorAleaotrio);
  console.log("Tamanho do vetor: "+tamanhoVetor);
  for(let i = 0; i < tamanhoVetor+1;i++){
    if(elementos[i].pintado == true){
      fill(255,0,0);
    }else{
      fill(255);
    }
    elementos[i].show()
  }
  fill(0,255,0)
  elementos[x].show()
  
  if(x === valorAleaotrio){
    escreve(true)
    noLoop();
  }
  x++;
}

function escreve(terminou){
 
  fill(0,255,0)
  text('Busca sequencial',400,60);

  if(terminou === true){
    text('Encontrou o valor',400,500)
  }
}