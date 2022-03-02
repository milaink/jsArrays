// método slice
const frutas = ['maça', 'banana', 'limão', 'laranja',
    'morango', 'abacate', 'uva', 'mamão', 'melão', 'tangerina',
    'ameixa', 'maracuja', 'açai', 'acerola', 'cajá', 'amora'
];

console.log(`O tamanho do array é de ${frutas.length} frutas`);

const cesta1 = frutas.slice(0, frutas.length / 2);
const cesta2 = frutas.slice(frutas.length / 2); //8,16
const cesta3 = frutas.slice(cesta2.length / 2); //4,16

console.log(cesta1);
console.log(cesta2);
console.log(cesta3);