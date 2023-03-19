let continuar = true;

while (continuar) {
  let nome = prompt("Insira o nome do aluno:");
  let notas = [];

  for (let i = 1; i <= 4; i++) {
    let nota = Number(prompt("Insira a nota " + (i) + " de " + nome + ":"));
    notas.push(nota);
  }

  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  
  let media = soma / notas.length;
  
  let passou;
  if (media >= 6) {
    passou = "Aprovado";
  } else {
    passou = "Reprovado";
  }

  alert(
    "Aluno: " + nome + "\n" +
    "Média: " + media + "\n" +
    passou
  );

  continuar = confirm("Deseja inserir as notas de outro aluno?");
}
