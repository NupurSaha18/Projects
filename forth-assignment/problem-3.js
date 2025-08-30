function bestTeam(player1, player2) {
       if (typeof player1 !== "object" || typeof player2 !== "object") {
              return "Invalid";
       }
       let valid1 = player1.foul + player1.cardY + player1.cardR;
       let valid2 = player2.foul + player2.cardY + player2.cardR;
       if (valid1 > valid2) {
              return player2.name;
       }
       if (valid2 > valid1) {
              return player1.name;
       }
       if (valid1 == valid2) {
              return "Tie"
       }

}

let result = bestTeam(
       { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
       { name: "Sweden", foul: 7, cardY: 0, cardR: 1 }
);
console.log(result);