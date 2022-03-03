const nomes = ['Ana', 'Ju', 'Leo', 'Cami'];

nomes.forEach(ImprimeNomes);

function ImprimeNomes(n, i) {
    console.log(n, i);
}

const notas = [10, 9, 8, 7, 6];

const notasAt = notas.map(n => n == 10 ? n : n + 1);

console.log(notasAt);

//maps

let nomes2 = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesAtualizados = nomes2.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);

//filtrar

const notas2 = [2, 6.5, 3.2, 8];

const reprovados = nomes.filter((_, indice) => notas2[indice] < 5);
console.log(`reprovados: ${reprovados}`)


const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) //170

function operacaoNumerica(acum, atual) {
    return atual + acum
}

const soma2 = numeros.reduce(operacaoNumerica, 0)