
// construtor para parametros do objeto (o bloco)
var Desenho = function(posX, posY, width, height, cor){
	this.posX = posX;
	this.posY = posY;
	this.width = width; // não usar portugues pois o canva só funciona com ingles
	this.height = height; // não usar nem altura nem largura -> portugues
	this.cor = cor;

	this.visible = true;

}

// funcções para colisão

Desenho.prototype.metadeLargura = function(){
	return this.width/2;
}

Desenho.prototype.metadeAltura = function(){
	return this.height/2;
}

Desenho.prototype.centroX = function(){ // como decobrimos a posiçõ do centro?  (posX + metadeLargura) <- testar
	return this.posX + this.metadeLargura(); //pego a posição do objeto, somo a metade da largura dele e retorno o resultado
}

Desenho.prototype.centroY = function(){
	return this.posY + this.metadeAltura(); 
}
