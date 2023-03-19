let matriz = [];
let nomes = [];

for (let i = 0; i < 3; i++) {
  let nome = prompt("Insira o nome do aluno " + (i + 1) + ":");
  let notas = [];

  for (let j = 0; j < 4; j++) {
    notas.push(Number(prompt("Insira a nota " + (j + 1) + " de " + nome + ":")));
  }

  nomes.push(nome);
  matriz.push(notas);
}

let medias = [];
for (let i = 0; i < matriz.length; i++) {
  let soma = 0;
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
  medias.push(soma / matriz[i].length);
}

let maiorMedia = 0;
let menorMedia = 10;
let nomeMaiorMedia = "";
let nomeMenorMedia = "";
for (let i = 0; i < medias.length; i++) {
  if (medias[i] > maiorMedia) {
    maiorMedia = medias[i];
    nomeMaiorMedia = nomes[i];
  }
  if (medias[i] < menorMedia) {
    menorMedia = medias[i];
    nomeMenorMedia = nomes[i];
  }
}

for (let i = 0; i < medias.length; i++) {
  alert(nomes[i] + ": " + medias[i]);
}
alert("Aluno com a maior média: " + nomeMaiorMedia + "\n" +
      "Média: " + maiorMedia);
alert("Aluno com a menor média: " + nomeMenorMedia + "\n" +
      "Média: " + menorMedia);