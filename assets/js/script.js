// Jogo adivinha com POO
alert('Jogo do advinha JS Game!!');
// Links de referencia do projeto para sortear numeros aleatorio-> https://github.com/alura-cursos/logica-js
class Game {
	// atributos
	nomeJogador;
	numeroSorte;
	//metodo contructor
	constructor(nomeJogador) {
		this.nomeJogador = nomeJogador;
		// Sorteio de numero aleatorios em JS-> https://devfuria.com.br/javascript/numeros-aleatorios/
		this.numeroSorte = Math.floor(Math.random() * 10 + 1);
	}
	// metodos da classe
	startGame() {
		this.nomeJogador = this.getNomeJogador();
		let numeroSorteMaquina = this.soteiaNumero;
		console.log(numeroSorteMaquina);
		let numeroTentativa = 1;
		let numeroEscolhaJogador = this.entradaUsuarioNumeroEscolhido();
		while (numeroEscolhaJogador != numeroSorteMaquina) {

			if (numeroEscolhaJogador >= numeroSorteMaquina) {

				alert('o numero é menor!');
				numeroEscolhaJogador = this.entradaUsuarioNumeroEscolhido();
			} else {

				alert('o numero é maior!');
				numeroEscolhaJogador = this.entradaUsuarioNumeroEscolhido();
			}
			numeroTentativa++;
		}
		let tentativa = numeroTentativa == 1 ? 'tentativa' : 'tentativas';
		alert(`${this.nomeJogador}, Você acertou em ${numeroTentativa} ${tentativa}, o numero da sorte é  ${numeroSorteMaquina}!`);
	}
	// numero escolhido
	entradaUsuarioNumeroEscolhido() {
		let numeroEscolhido = parseInt(prompt('Escolhar um numero entre 1 e 10.'));
		if (numeroEscolhido == "") {
			alert("Numero não pode ser vazio")
			numeroEscolhido = parseInt(prompt('Escolhar um numero entre 1 e 10.'));
		}
		return numeroEscolhido;
	}
	// nome do usuario
	getNomeJogador() {
		let nome = prompt('Qual seu nome?.');
		if (nome == "") {
			alert("nome não pode ser vazio");
			nome = prompt('Qual seu nome?.');
		}
		return nome;
	}
	// sorteia numero
	get soteiaNumero() {
		return this.numeroSorte;
	}
}
// instancia da classe
const player1 = new Game("player1");
// invoca metodo
player1.startGame();