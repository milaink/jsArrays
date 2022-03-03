const notas = [7, 9, 9, 10];

let somaDasNotas = 0;

//callback
//notas.forEach(n => { somaDasNotas += n });

notas.forEach(function(i) {
    somaDasNotas += i;
})

let media = somaDasNotas / notas.length;

console.log(media);