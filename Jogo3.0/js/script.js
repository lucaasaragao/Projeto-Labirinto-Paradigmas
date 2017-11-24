

(function(){
	// var
	var canv = document.querySelector("canvas"); // referenciado o elemento canvas
	var contexto = canv.getContext("2d"); // pegando o contexto bi dimensional

	// pegando as teclas
	var ESQUERDA = 37, CIMA= 38, DIREITA = 39, BAIXO = 40; // codigos das setas direcionais no teclado

	// movimentos
	var moviEsqueda = moviCima = moviDireita = moviBaixo = false; // atribuindo false a todas as variaveis

	// vetores 
	var desenhos = []; // este vetor será responsavel apenas por desenhar na tela 
	var blocos = []; // este vetor será responsavel pela colisão do objetos desenhados 

	// bloco principal (objetos)
	var blocop1 = new Desenho(0, 450, 50, 50, "#FF4500"); // ~parametros: posX, posY, largura, altura e cor
	blocop1.velocidade = 4;
	desenhos.push(blocop1); // inserindo o objeto dentro do vetor (usando pra isso o push)

	var bloco2 = new Desenho(150, 525, 10, 75, "#008B8B");
	desenhos.push(bloco2);
	blocos.push(bloco2);
	
	var bloco3 = new Desenho(75, 300, 10, 225, "#008B8B");
	desenhos.push(bloco3);
	blocos.push(bloco3);

	var bloco4 = new Desenho(0, 450, 75, 10, "#008B8B");
	desenhos.push(bloco4);
	blocos.push(bloco4);
	
	var bloco5 = new Desenho(75, 375, 150, 10, "#008B8B");
	desenhos.push(bloco5);
	blocos.push(bloco5);

	var bloco6 = new Desenho(150, 450, 150, 10, "#008B8B");
	desenhos.push(bloco6);
	blocos.push(bloco6);
	
	var bloco7 = new Desenho(300, 300, 10, 150, "#008B8B");
	desenhos.push(bloco7);
	blocos.push(bloco7);

	var bloco6 = new Desenho(150, 300, 225, 10, "#008B8B");
	desenhos.push(bloco6);
	blocos.push(bloco6);

	var bloco7 = new Desenho(300, 75, 300, 10, "#008B8B");
	desenhos.push(bloco7);
	blocos.push(bloco7);

	var bloco8 = new Desenho(0, 75, 150, 10, "#008B8B");
	desenhos.push(bloco8);
	blocos.push(bloco8);

	var bloco9 = new Desenho(150, 75, 10, 150, "#008B8B");
	desenhos.push(bloco9);
	blocos.push(bloco9);

	var bloco10 = new Desenho(225, 0, 10, 150, "#008B8B");
	desenhos.push(bloco10);
	blocos.push(bloco10);

	var bloco11 = new Desenho(225, 150, 150, 10, "#008B8B");
	desenhos.push(bloco11);
	blocos.push(bloco11);

	var bloco12 = new Desenho(450, 75, 10, 300, "#008B8B");
	desenhos.push(bloco12);
	blocos.push(bloco12);

	var bloco13 = new Desenho(300, 225, 150, 10, "#008B8B");
	desenhos.push(bloco13);
	blocos.push(bloco13);

	var bloco14 = new Desenho(225, 525, 150, 10, "#008B8B");
	desenhos.push(bloco14);
	blocos.push(bloco14);	

	var bloco15 = new Desenho(450, 525, 150, 10, "#008B8B");
	desenhos.push(bloco15);
	blocos.push(bloco15);	

	var bloco16 = new Desenho(375, 375, 10, 150, "#008B8B");
	desenhos.push(bloco16);
	blocos.push(bloco16);	

	var bloco17 = new Desenho(0, 150, 75, 10, "#008B8B");
	desenhos.push(bloco17);
	blocos.push(bloco17);	

	var bloco18 = new Desenho(75, 225, 75, 10, "#008B8B");
	desenhos.push(bloco18);
	blocos.push(bloco18);

	var bloco19 = new Desenho(525, 150, 75, 10, "#008B8B");
	desenhos.push(bloco19);
	blocos.push(bloco19);

	var bloco20 = new Desenho(450, 300, 75, 10, "#008B8B");
	desenhos.push(bloco20);
	blocos.push(bloco20);

	var bloco21 = new Desenho(450, 375, 75, 10, "#008B8B");
	desenhos.push(bloco21);
	blocos.push(bloco21);

	var bloco22 = new Desenho(375, 450, 75, 10, "#008B8B");
	desenhos.push(bloco22);
	blocos.push(bloco22);

	var bloco23 = new Desenho(225, 225, 10, 75, "#008B8B");
	desenhos.push(bloco23);
	blocos.push(bloco23);

	var bloco22 = new Desenho(525, 225, 10, 75, "#008B8B");
	desenhos.push(bloco22);
	blocos.push(bloco22);

	var bloco23 = new Desenho(525, 375, 10, 75, "#008B8B");
	desenhos.push(bloco23);
	blocos.push(bloco23);

	var bloco24 = new Desenho(0, 0, 10, 450, "#008B8B");
	desenhos.push(bloco24);
	blocos.push(bloco24);

	var bloco25 = new Desenho(0, 0, 590, 10, "#008B8B");
	desenhos.push(bloco25);
	blocos.push(bloco25);
	
	var bloco26 = new Desenho(0, 525, 10, 75, "#008B8B");
	desenhos.push(bloco26);
	blocos.push(bloco26);

	var bloco27 = new Desenho(0, 590, 590, 10, "#008B8B");
	desenhos.push(bloco27);
	blocos.push(bloco27);

	var bloco28 = new Desenho(590, 150, 10, 450, "#008B8B");
	desenhos.push(bloco28);
	blocos.push(bloco28);

	var bloco29 = new Desenho(590, 0, 10, 75, "#008B8B");
	desenhos.push(bloco29);
	blocos.push(bloco29);

	// Entradas do teclado
	window.addEventListener("keydown", function(e){ // disparando uma função com o "e = evento" como parametro e usando o "KEYDOWM"
		var teclado = e.keyCode;
		
		// usando o switch case para atribuir true ao movimento do blooco
		switch(teclado){
			case ESQUERDA:
				moviEsqueda = true;
				break;
			case CIMA:
				moviCima = true;
				break;
			case DIREITA:
				moviDireita = true;
				break;
			case BAIXO:
				moviBaixo = true;
				break;
		}
	}, false);

	window.addEventListener("keyup", function(e){
		var teclado = e.keyCode;
		// reuso planejado KKKK para atribuir condição de parada ao bloco 
		switch(teclado){
			case ESQUERDA:
				moviEsqueda = false;
				break;
			case CIMA:
				moviCima = false;
				break;
			case DIREITA:
				moviDireita = false;
				break;
			case BAIXO:
				moviBaixo = false;
				break;

		}
	}, false);


	// funcionalidades
	function recarregar(){ // função recursiva para recarregar o jogo
		window.requestAnimationFrame(recarregar, canv);
		atualizar();
		renderizar();
		// fazendo isso, toda vida que chamar a função recarregar o jogo vai atualizar e desenhar
	}

	function atualizar(){ // atualizar os recursos do jogo
		
		if(moviEsqueda && !moviDireita){
			blocop1.posX -= blocop1.velocidade;
		}
		if(moviDireita && !moviEsqueda){
			blocop1.posX += blocop1.velocidade;
		}
		if(moviCima && !moviBaixo){
			blocop1.posY -= blocop1.velocidade;
		}
		if(moviBaixo && !moviCima){
			blocop1.posY += blocop1.velocidade;
		}

		// atribuindo a borda do canvas para o personagem não sair da tela
		//blocop1.posX = Math.max(0, blocop1.posX);
		// math max faz uma comparação entre dois valores e o math min tbm 
		// assim quando tentar atrevessas a parede o valor fica sendo menor do que o valor posX assim impedindo de atravessar as paredes
		// essa logica n foi minha
		// 
		blocop1.posX = Math.max(0, Math.min(canv.width - blocop1.width, blocop1.posX))
		blocop1.posY = Math.max(0, Math.min(canv.height - blocop1.height, blocop1.posY))

		//Colisão
		for(var i in blocos){
			var parede = blocos[i];
			if(parede.visible){		//esse processo será executado a cada atualização do jogo 
				blocoRetangulo(blocop1,parede);


			}

		}

	}

	function renderizar(){ // desenhar os personagens do jogo
		contexto.clearRect(0, 0,canv.width,canv.height);
		// função para limpar o canvas de acordo com sua altura e largura
		for(var i = 0; i < desenhos.length; i++){ // varradno meu vetor de desenhos. Duvida -> "for (var i desenhos)" pesquisar
			var desenho = desenhos[i]; // referenciando o elemento da vez dentro do vetor
			if(desenho.visible){
				contexto.fillStyle = desenho.cor; // atribuindo a cor do objeto atraves da função fill style
				contexto.fillRect(desenho.posX, desenho.posY, desenho.width, desenho.height); // desenhando na tela com a função fillRect
			}
		}	
	}

	recarregar();

}());