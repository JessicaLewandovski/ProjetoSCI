let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(Number(prompt("Insira um número:")));
}

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

alert("O número maior é: " + maior + "\n" + "O número menor é: " + menor);
