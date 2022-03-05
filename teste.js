let duracoes = [1.01, 1.01, 1.01, 1.4, 1.4];
let dias = 0;

duracoes.sort(function(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
})
console.log(duracoes);


for (var i = 0; i < duracoes.length; i++) {
    if (duracoes[i] > 2.02) {
        dias++
    } else if (duracoes[i] + duracoes[i + 1] <= 3) {
        dias++;
        duracoes.splice(0, 2);
    }
}

if (duracoes != undefined) {
    dias++;
}

console.log(`Carla assistiu todos os filmes em ${dias} dias`);