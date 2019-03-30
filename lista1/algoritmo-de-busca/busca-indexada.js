var x = 0;
var elementos = [];
var elementos_indices = [];
var valorAleaotrio = 0;
var tamanhoVetor;
var tabela_index = false;
var indexs;
var posicao_partida = 0;
var sent = [];
var indices_estaticos = false;
var index_indice = 0;

class circulo {
  
  constructor(posX,posY,diametro){
    this.posX = posX;
    this.posY = posY;
    this.diametro = diametro;
    this.pintado = false;
    this.indice = false;
  }  
  show(){
    circle(this.posX,this.posY,this.diametro);
  }

  move(){
    this.posX -= 1; 
  }

  isPintado(){
    return true;
  }
}

function preencheVetor(){
  tamanhoVetor = parseInt(random(5,12));
  valorAleaotrio = parseInt(random(0,tamanhoVetor));
  if(tamanhoVetor <= 6){
    indexs = 2;
  }else if(tamanhoVetor > 6 && tamanhoVetor <= 10 ){
    indexs = 3;
  } else{
    indexs = 4;
  }

  var flag = 0;
  for(let i = 0;i < tamanhoVetor;i++){
    elementos.push(new circulo(600, 50 * i + (300-((tamanhoVetor/2)*50)),10));
    if(flag <= valorAleaotrio){
      posicao_partida = flag;
    }
    if(flag == i && (tamanhoVetor-1)!=flag){
      sent.push(flag);
      elementos_indices.push(new circulo(600, 50 * i + (300-((tamanhoVetor/2)*50)),10));
      flag+=indexs;
    }
  }
  
  
  elementos[valorAleaotrio].pintado = true;

}

function setup() {
  createCanvas(1200,600)
  preencheVetor();
  textSize(30);
  textAlign(CENTER);
  x = posicao_partida;
}

function draw() {
  background(0);
  escreve(false);
  for(let i = 0; i < tamanhoVetor;i++){
    if(elementos[i].pintado == true){
      fill(255,0,0);
    }else{
      fill(255);
    }
    elementos[i].show();
  }
  if(tabela_index){
    fill(0,255,0);
    elementos[x].show();  
  }

  fill(255,255,0);
  for(j=0; j < elementos_indices.length; j++){  
    elementos_indices[j].show();
  }

  if(tabela_index){
    fill(0,255,0);
    elementos_indices[sent.indexOf(posicao_partida)].show();  
  }
  

  if(!tabela_index){
    for(j=0; j < elementos_indices.length; j++){  
      elementos_indices[j].move();
    }
    if(elementos_indices[0].posX == 450){
      tabela_index = true; 
      frameRate(1.5);
    }
  }else if(x === valorAleaotrio){
    escreve(true);
    noLoop();
  }else{
    x++;
  }

}
 
function escreve(terminou){
 
  fill(0,255,0)
  text('Busca sequencial indexada',200,60);

  if(terminou === true){
    text('Encontrou o valor!',200,500)
  }
}
