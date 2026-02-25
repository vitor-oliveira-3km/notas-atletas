let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

// Função para calcular a média válida
function calculaMedia(notas) {
  let notasOrdenadas = notas.slice().sort((a, b) => a - b);
  let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
  let soma = notasValidas.reduce((total, nota) => total + nota, 0);
  return soma / notasValidas.length;
}

atletas.forEach(atleta => {
  let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);
  let media = calculaMedia(atleta.notas);

  console.log(`Atleta: ${atleta.nome}`);
  console.log(`Notas Obtidas: ${notasOrdenadas}`);
  console.log(`Média Válida: ${media}`);
  console.log("");
});