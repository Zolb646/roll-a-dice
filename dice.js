const title = document.createElement("h1");
title.id = "title";
title.textContent = "Death Roller";
document.body.appendChild(title);

const container = document.createElement("div");
container.id = "con";
document.body.appendChild(container);

const input = document.createElement("input");
input.id = "numofdice";
input.value = "1";
input.min = "1";
input.type = "number";
container.appendChild(input);

const butt = document.createElement("button");
butt.id = "butt";
butt.textContent = "roll a dice";
container.appendChild(butt);

const diceresult = document.createElement("div");
diceresult.id = "diceresult";
container.appendChild(diceresult);

const diceimages = document.createElement("div");
diceimages.id = "diceimages";
container.appendChild(diceimages);

const result_con = document.createElement("div");
result_con.id = "rescon";
container.appendChild(result_con);

function rolldice() {
  const numofdice = document.getElementById("numofdice").value;
  const diceresult = document.getElementById("diceresult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images = [];
  let sum = 0;

  for (let i = 0; i < numofdice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    console.log(`dice_images/dice${value}.svg`);
    images.push(
      `<img style="width: 70px; height: 70px" src = "./dice_images/dice${value}.svg">`
    );
    sum += values[i];
  }
  diceresult.textContent = `dice: ${values.join(`, `)}`;
  diceimages.innerHTML = images.join("");
  result_con.textContent = sum;
}
butt.addEventListener("click", rolldice);

rolldice();
