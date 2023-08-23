//Parte 1
const numero = document.querySelector(".numero-principal");
const botaoMenos = document.querySelector(".botao.decremento");
const botaoMais = document.querySelector(".botao.incremento");
const botaoReset = document.querySelector(".botao.reset");

//parte 2
botaoMais.addEventListener("click", function () {
	numero.innerHTML = +numero.innerHTML + 1;
});
botaoMenos.addEventListener("click", function () {
	numero.innerHTML = +numero.innerHTML - 1;
});
botaoReset.addEventListener("click", function () {
	numero.innerHTML = 0;
});