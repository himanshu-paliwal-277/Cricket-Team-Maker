const addPlayerButton = document.getElementById("add-player-button");
const playerNameInput = document.getElementById("player-name-input");
const allPlayerList = document.getElementById("all-player-list");
const makeTeamButton = document.getElementById("make-team-button");

const Players = document.querySelectorAll(".player");

Players.forEach((player) => {
  player.addEventListener("dblclick", () => {
    player.remove();
  })
});

addPlayerButton.addEventListener("click", () => {
  if (playerNameInput.value !== "") {
    let div = document.createElement("div");
    div.classList.add("player");

    div.addEventListener("dblclick", () => {
      div.remove();
    })

    let img = document.createElement("img");
    img.src = "./Assets/player.png";
    img.style.width = "40px";
    img.style.height = "35px";

    let h3 = document.createElement("h3");
    h3.textContent = playerNameInput.value;
    h3.classList.add("player-name");
    div.appendChild(img);
    div.appendChild(h3);

    allPlayerList.appendChild(div);

    playerNameInput.value = "";
  }
});

// ------------------------------------------------------
let add_player = document.getElementById("add_player");

add_player.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      playerNameInput.value = "abc" + (i + 1);
      addPlayerButton.click();
    }, 200 * i);
  }
});
// ------------------------------------------------------

makeTeamButton.addEventListener("click", () => {
  const AllPlayer = document.querySelectorAll(".player");
  const teamAcaptain = document.getElementById("team-A-captain");
  const teamBcaptain = document.getElementById("team-B-captain");

  console.log(AllPlayer);
  // console.log(AllPlayer.length)

  let n = AllPlayer.length;
  let i = 0;
  let arr = [];
  while (i < n) {
    let randomNumber = Math.floor(Math.random() * n);
    if (arr.includes(randomNumber)) continue;
    arr.push(randomNumber);
    i++;
  }
  console.log(arr);
  if (n < 2) {
    // alert("Minimum 2 Player required");
    return;
  }
  // If odd number of players
  if (n % 2 === 1) {
    arr.pop();
  }
  const teamAplayers = document.getElementById("team-A-player");
  const teamBplayers = document.getElementById("team-B-player");

  teamAcaptain.textContent = AllPlayer[arr[0]].querySelector("h3").textContent;
  teamBcaptain.textContent = AllPlayer[arr[1]].querySelector("h3").textContent;
  AllPlayer[arr[0]].remove();
  AllPlayer[arr[1]].remove();

  arr.forEach((element, index) => {
    if (index < 2) return;
    setTimeout(() => {
      AllPlayer[element].style.width = "30%";
      if (index % 2 === 0) {
        teamAplayers.append(AllPlayer[element]);
      } else {
        teamBplayers.append(AllPlayer[element]);
      }
    }, 300 * index);
  });
});
