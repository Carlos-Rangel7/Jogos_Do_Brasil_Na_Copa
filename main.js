function creatGame(player1, hour, player2) {
  return `
  <li>
      <img src="assets/icon-${player1}.svg" alt="Bandera do ${player1}">
      <strong>${hour}</strong>
      <img src="assets/icon-${player2}.svg" alt="Bandeira ${player2}">
  </li>`
}

let delay = -0.4;
function creatCard(date, day, games) {
  delay = delay + 0.4;
  return `
 <div class="card" style="animation-delay: ${delay}s" >
      <h2>${date} <span>${day}</span></h2> <!--span serve para diferenciar uma frase da outra-->
        <ul>
         ${games} 
        </ul>
      </div>`
}

document.querySelector("#cards").innerHTML =
  creatCard("24/11", "Quinta", creatGame("brazil", "16:00", "serbia")) +
  creatCard("28/11", "Segunda", creatGame("brazil", "16:00", "switzerland")) +
  creatCard("02/12", "Sexta", creatGame("brazil", "16:00", "cameroon"))
