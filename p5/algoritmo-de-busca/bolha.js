class circulo {
  
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.diametro = 10;
    this.pintado = false;
  }  
  display(){
    circle(this.posX,this.posY,this.diametro);
  }

  isPintado(){
    return true;
  }
}
