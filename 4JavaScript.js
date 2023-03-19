let numeros = [];

for (let i = 1; i <= 5; i++) {
  numeros.push(prompt("Insira um número " + i + ":"));
}

alert("O valor na posição 3 é: " + numeros[2]);