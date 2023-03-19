let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(Number(prompt("Insira um número:")));
}

let pares = [];
let impares = [];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    pares.push(numeros[i]);
  } else {
    impares.push(numeros[i]);
  }
  soma += numeros[i];
}
let media = soma / numeros.length;

alert(
  "Números pares: " + pares + "\n" +
  "Números ímpares: " + impares +  "\n" +
  "Média geral: " + media
);
