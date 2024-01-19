function vitoriasEDerrotas(vitorias, derrotas) {
  return vitorias - derrotas;
}

let continuar;

while (continuar !== "n") {
  let wins = prompt("Quantidade de vitórias: ");
  let losses = prompt("Quantidade de Derrotas: ");
  let rank;
  let total = vitoriasEDerrotas(wins, losses);

  if (total < 10) {
    rank = "Ferro";
  } else if (total >= 10 && total < 20) {
    rank = "Bronze";
  } else if (total >= 20 && total < 50) {
    rank = "Prata";
  } else if (total >= 50 && total < 80) {
    rank = "Ouro";
  } else if (total >= 80 && total < 90) {
    rank = "Diamante";
  } else if (total >= 90 && total < 100) {
    rank = "Lendário";
  } else if (total >= 100) {
    rank = "Imortal";
  }

  alert(`O Herói tem o saldo de ${total} está no nível de ${rank} `);

  continuar = prompt("Deseja checar de novo? s/n");

  if (continuar != "n" && continuar != "s"){
    alert("Digite apenas 's' para sim e 'n' para não")
    continuar = prompt("Deseja checar novamente? s/n")
  }
}
