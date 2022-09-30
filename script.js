let hangMan = document.getElementById("hangman");
let palabra = document.getElementById("palabra");
let conjunto = ["kenji", "maruo", "amigo"];
let random = Math.round(Math.random() * (conjunto.length - 1));
let respuesta = document.querySelector("[respuesta]");
let btn = document.getElementById("btn");
let palabraActual = conjunto[random];
let palabraShow = [];
let num;
let cont = 0;

btn.addEventListener("click", () => {
  buscarLetra(respuesta.value);
  if (num != -1) {
    palabraShow[num] = " " + palabraActual[num] + " ";
    palabraShow.join(" ");
    palabra.innerText = palabraShow;
  } else {
    hanged();
  }
});

for (let i = 0; i < conjunto[random].length; i++) {
  palabra.innerText += " _ ";
  palabraShow.push(" _ ");
}

function buscarLetra(e) {
    if (e === '') {
        num = -1
    } else {
        num = palabraActual.indexOf(e);
        return num;
    }
  
}

function hanged() {
  cont += 1;
  switch (cont) {
    case 1:
      hangMan.innerText = "H";
      break;
    case 2:
      hangMan.innerText = "HA";
      break;
    case 3:
      hangMan.innerText = "HAN";
      break;
    case 4:
      hangMan.innerText = "HANG";
      break;
    case 5:
      hangMan.innerText = "HANGE";
      break;
    case 6:
      hangMan.innerText = "HANGED";
      break;
    default:
      hangMan.innerText = "Perdiste";
  }
}
