// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputAdultosnb = document.getElementById("adultosnb");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular(){
    let adultos = inputAdultos.value
    let adultosnb = inputAdultosnb.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
 
    let totalcarne = carnepp(duracao) * adultos + (carnepp(duracao) * adultosnb) + (carnepp(duracao) / 2 * criancas)
    let totalcerveja = cervejapp(duracao) * adultos
    let totalbebida = (bebidapp(duracao) / 3 * adultos) + (bebidapp(duracao) * adultosnb) + (bebidapp(duracao) / 2 * criancas)

    resultado.innerHTML  = `<p>🥩: ${totalcarne / 1000}kg de carne`
    resultado.innerHTML += `<p>🍺: ${Math.ceil(totalcerveja / 355)} latas de cerveja (355ml)` 
    resultado.innerHTML += `<p>🧃: ${Math.ceil(totalbebida / 2000)} garrafas de refrigerante (2L)` 
 
    
}

function carnepp(duracao){
    if(duracao >= 6){
        return 650
    } else {
        return 400
    }
}

function cervejapp(duracao){
    if(duracao >= 6){
        return 3550
    } else {
        return 2130
    }
}

function bebidapp(duracao){
    if(duracao >= 6){
        return 1500
    } else {
        return 1000
    }
}