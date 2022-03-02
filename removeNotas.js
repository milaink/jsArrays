const notas = [10, 6, 8, 5, 10];
notas.pop(); //não aceita parametros
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média é ${media}`);

//concatenar arrays
const notas1 = [10, 6, 8, 5, 10];
const notas2 = [10, 6, 6, 5, 7];
const notas3 = notas1.concat(notas2);
console.log(notas3)

//findIndex()
const notas4 = [10, 6, 8, 5, 10];
const notas5 = [10, 6, 6, 5, 7];
const nf = notas4.findIndex(encontreNumero);

function encontreNumero(numero) {
    return numero === 8;
}
console.log(`O número 8 vai estar na posição ${nf}`);

//indexof()
let n = 0;
indexado(n);

n = 10;
indexado(n);

function indexado(n) {
    let index = notas4.indexOf(n);
    if (index > -1) {
        console.log("O número pertence a lista.")
    } else {
        console.log("O número não pertence a lista.")
    }
}




//if (index)

// ArrayVazio
/*const arrayVazia = [, , , ];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)*/