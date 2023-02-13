// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const numeroAltura = Number(prompt("Digite a altura do retagunlo: "));
  const numeroLargura = Number(prompt("Digite a largura do retagunlo"));
  const resultado = numeroAltura * numeroLargura;
  console.log(resultado);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual: "));
  const anoNascimento = Number(prompt("Digite o seu ano de nascimento: "));
  const resultado = anoAtual - anoNascimento;
  console.log(resultado);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura).toFixed(2);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const seuNome = prompt("Digite o seu nome:");
  const suaIdade = Number(prompt("Digite a sua idade:"));
  const seuEmail = prompt("Digite o seu email:");
  console.log(
    `Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCorFavorita = prompt("Digite a primeira cor favorita:");
  const segundaCorFavorita = prompt("Digite a segunda cor favorita");
  const terceiraCorFavorita = prompt("Digite a terceira cor favorita");
  const meuArray = [
    primeiraCorFavorita,
    segundaCorFavorita,
    terceiraCorFavorita,
  ];
  console.log(meuArray);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const resultado = string.toUpperCase();
  return resultado;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const meuArray = array[0];
  const outroArray = array[array.length - 1];
  array[0] = outroArray;
  array[array.length - 1] = meuArray;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual: "));
  const anoNascimento = Number(prompt("Digite o ano de nascimento: "));
  const anoEmissaoRg = Number(prompt("Digite o ano da emissão do RG:"));
  const idade = anoAtual - anoNascimento;
  const tempoEmissao = anoAtual - anoEmissaoRg;
  if (idade <= 20) {
    console.log(tempoEmissao >= 5);
  } else if (idade <= 50) {
    console.log(tempoEmissao >= 10);
  } else {
    console.log(tempoEmissao >= 15);
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 != 0);
  return anoBissexto;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?");
  const ensinoMedio = prompt("Você possui ensino médio completo?");
  const disponibilidadeHorario = prompt(
    "Você possui disponibilidade de horário?"
  );

  const resposta =
    idade.toLowerCase() === "sim" &&
    ensinoMedio.toLowerCase() === "sim" &&
    disponibilidadeHorario.toLowerCase() === "sim";

  console.log(resposta);
}
