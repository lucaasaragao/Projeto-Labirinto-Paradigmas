
function blocoRetangulo(retangulo1, retangulo2){
	//retangulo1 -> bloqueado
	//retangulo2 -> parede 

	//criando catetos

	var catetoX = retangulo1.centroX() - retangulo2.centroX(); // pegando a subtração do centro no x
	var catetoY = retangulo1.centroY() - retangulo2.centroY(); // pegando a subtração do centro no y

	//soma das metades

	var somaMetadeLargura = retangulo1.metadeLargura() + retangulo2.metadeLargura();
	var somaMetadeAltura = retangulo1.metadeAltura() + retangulo2.metadeAltura();
	// se a distancia dos centros dos objetos forem menor que a a soma das larguras

	// avaliando colisão
	// função Math.abs retorna o valor absoluto ou seja sem numero negativo caso a posX e a posY sejam negativas 
	if(Math.abs(catetoX) < somaMetadeLargura && Math.abs(catetoY) < somaMetadeAltura){ //com essa condição eu já sei se está tendo colisão ou não
		//retangulo1.visible = false;
		
		var colisaoX = somaMetadeLargura - Math.abs(catetoX); 
		// recebe a soma das larguras menos o valor absoluto do cateto fazendom assim ver se invadiram os pix dos outro blocos
		// se o cateto em x for menor que a soma das larguras deve haver uma sobreposição de valores - - TRATAR ESSE ERRO 
		var colisaoY = somaMetadeAltura - Math.abs(catetoY);

		if(colisaoX >= colisaoY){ // colisão por cima ou por baixo
			if(catetoY > 0 ){ // por cima, mais proximo do fundo do canvas
				retangulo1.posY += colisaoY;

			} else{
				retangulo1.posY -= colisaoY;
			}

		} else { // colisão foi pela esquerda ou direita
			if(catetoX > 0 ){ // colisão pela esquerda
				retangulo1.posX += colisaoX;
			} else{
				retangulo1.posX -= colisaoX;
			}

		}
	}


}