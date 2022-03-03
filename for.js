const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i]);
}

const notas = [6.5, 8.9, 9, 10];

let somaDasNotas = 0;

for (var j = 0; j < notas.length; j++) {
    somaDasNotas += notas[j];
}

let media = somaDasNotas / notas.length;

console.log(media);