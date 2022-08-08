// Lógica JS

// Atividade 1
let saudacao = "Olá, mundo!"

// Atividade 2
let idade = 26
let peso = 62

// Atividade 3
let eBrasileiro = true

// Atividade 4
var idade2 = 26
var sobrenome = "Ribeiro"
var salarioMinimo = 1.200 

// Atividade 5
var nome = "Laís"
var idade3 = 26
var altura = 1.63
var possuiPet = true
var filmesFavoritos = ["Soul", "Capitão Fantástico"]

// Atividade 6
var nome = "Taylor"
var sobrenome = "Alvarenga"
var profissao = "Programadora"

var cartaoDeVisita = (nome +" "+ sobrenome +" - "+ profissao)

// Atividade 7
let janeiro = 100
let fevereiro = 300
let marco = 90

let valorTotal = janeiro + fevereiro + marco


// Atividade 8
let numeroA = 5
let numeroB = 2

let resultadoSoma = numeroA + numeroB
let resultadoMultiplicacao = numeroA * numeroB
let resultadoDivisao = numeroA / numeroB
let resultadoSubtracao = numeroA - numeroB

// Atividade 9 
let trabalhoDeHistoria = 8.0
let trabalhoDeMatematica = 7.0
let trabalhoDeCiencia = 10
let trabalhoDeGeografia = 9.5
let quantidadeDeTrabalhos = 4

let media = (trabalhoDeHistoria + trabalhoDeMatematica + trabalhoDeCiencia + trabalhoDeGeografia) / quantidadeDeTrabalhos

// Atividade 10
var numeroMenor = 3
var numeroMaior = 6

var eMenor = numeroMenor < numeroMaior
var eMaior = numeroMenor > numeroMaior


// Estrutura de Decisão

// Atividade 1
let nome = "João"
let idade1 = 17

if(idade >=18){
    console.log("Olá, " + nome);
    console.log("Você passou no nosso teste e já pode dirigir!");
} else{
    console.log("Olá, " + nome);
}

// Atividade 2
let saldo = 1.500

if(saldo > 0){
    console.log("Seu saldo está positivo! Gostaria de fazer um investimento?")
}

if(saldo < 0){
    console.log("Seu saldo está negativo! Gostaria de fazer um empréstimo?")
}

// Atividade 3
var idade2 = 15

if (idade >= 18) {
    console.log("Você já pode dirigir!")
} else {
    console.log("Ops, você ainda não tem a idade mínima para dirigir!")
}

// Atividade 4
var idade3 = 40

if (idade > 65) {
    console.log("Você já pode se aposentar")
} else {
    console.log("Você ainda não pode se aposentar")
}

// Atividade 5
let estrangeiro = true;

if (estrangeiro) {
    console.log("Você poderia apresentar seu RNE, por favor?")
} else {
    console.log("Você poderia apresentar seu CPF, por favor?")
}

// Atividade 6
var numeroDaSorte = 18

if ((numeroDaSorte % 2) == 0) {
    console.log("Par")
} else {
    console.log("Ímpar")
}

// Atividade 7
var petPeso = 7

if (petPeso < 4) {
    console.log("Abaixo do Peso")
} else if (petPeso > 10) {
    console.log("Acima do Peso")
} else {
    console.log("Peso normal")
}

// Atividade 8
var ladosIguais = 0

if (ladosIguais == 3) {
    console.log("Equilátero")
} else if (ladosIguais == 2) {
    console.log("Isósceles")
} else {
    console.log("Escaleno")
}

// Atividade 9
var produtoQtd = 3
var produtoAtivo = true

if(produtoQtd > 0 && produtoAtivo){
    console.log("Você pode finalizar essa compra")
} else {
    console.log("Produto não está disponível para compra")
}

// Atividade 10
var usuarioAltura = 170
var usuarioIdade = 21

if(usuarioAltura > 150 || usuarioIdade >= 21){
    console.log("Você pode subir")
} else {
    console.log("Desculpe, você não atende os requisitos para usar o brinquedo")
}

// Atividade 11
var diaSemana = 'sabado'

if(diaSemana != "sabado" && diaSemana != "domingo"){
    console.log("Você pode ir ao banco")
} else {
    console.log("O banco está fechado, tente outro dia")
}

// Estrutura de Repetição
// Atividade 1
for(let i = 0; i < 7; i++){
    console.log("Bom dia, grupo!")
}

// Atividade 2
for(let i = 0; i < 10; i++){
    console.log("7 x " + i + "!")
}