// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular(){
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
   
    let totalcarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas)
    let totalcerveja = cervejapp(duracao) * adultos
    let totalbebida = bebidapp(duracao) * adultos + (bebidapp(duracao) / 2 * criancas)

    resultado.innerHTML  = `<p>🥩: ${totalcarne}g de carne`
    resultado.innerHTML += `<p>🍺: ${totalcerveja}ml de cerveja` 
    resultado.innerHTML += `<p>🧃: ${totalbebida}ml de bebidas` 


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
        return 2000
    } else {
        return 1200
    }
}

function bebidapp(duracao){
    if(duracao >= 6){
        return 1500
    } else {
        return 1000
    }
}