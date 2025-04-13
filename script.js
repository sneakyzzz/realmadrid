const jogadores = [
  "Vinícius Jr.",
  "Rodrygo",
  "Jude Bellingham",
  "Modrić",
  "Tchouaméni",
  "Valverde",
  "Camavinga",
  "Carvajal",
  "Rüdiger",
  "Alaba",
  "Courtois",
  "Lunin",
  "Brahim Díaz",
  "Nacho",
  "Fran García",
  "Arda Güler",
  "Endrick",
  "Lucas Vázquez"
];

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const sorteado = jogadores[Math.floor(Math.random() * jogadores.length)];

  document.getElementById('resultado').textContent =
    `Parabéns! Após nossa análise... você seria o ${sorteado}! ⚽`;
});
