const listaDeFrutas = ['maça', 'banana', 'limão', 'laranja',
    'morango', 'abacate', 'uva', 'mamão', 'melão', 'tangerina',
    'ameixa', 'maracuja', 'açai', 'acerola', 'cajá', 'amora'
];

console.log(listaDeFrutas.length);
listaDeFrutas.splice(1, 0, 'mamão');

console.log(`Lista de Frutas: ${listaDeFrutas}`)
console.log(listaDeFrutas.length);