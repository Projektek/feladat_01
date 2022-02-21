"use strict";
let allat = ["Gepárd", "Jaguár", "Tigris", "Oroszlán"];
let sebesseg = [];

let gepardSebesseg = +document.getElementById("gepardSebesseg").innerText;
sebesseg.push(gepardSebesseg);
let jaguarSebesseg = +document.getElementById("jaguarSebesseg").innerText;
sebesseg.push(jaguarSebesseg);
let tigrisSebesseg = +document.getElementById("tigrisSebesseg").innerText;
sebesseg.push(tigrisSebesseg);
let oroszlanSebesseg = +document.getElementById("oroszlanSebesseg").innerText;
sebesseg.push(oroszlanSebesseg);

let tomeg = [];
let gepardTomeg = +document.getElementById("gepardTomeg").innerText;
tomeg.push(gepardTomeg);
let jaguarTomeg = +document.getElementById("jaguarTomeg").innerText;
tomeg.push(jaguarSebesseg);
let tigrisTomeg = +document.getElementById("tigrisTomeg").innerText;
tomeg.push(tigrisSebesseg);
let oroszlanTomeg = +document.getElementById("oroszlanTomeg").innerText;
tomeg.push(oroszlanSebesseg);

function kiertekel() {
  let info = document.getElementById("info");
  info.style.visibility = "visible";
  let ertekel = document.getElementById("szamitas").options.selectedIndex;

  if (ertekel == 1) {
    let leggyorsabb = "";
    let maxSebesseg = 0;

    for (let i = 0; i < sebesseg.length; i++) {
      if (maxSebesseg <= sebesseg[i]) {
        maxSebesseg = sebesseg[i];
        leggyorsabb = allat[i];
      }
    }

    info.innerText = "A leggyorsabb állat: " + leggyorsabb;
  } else if (ertekel == 2) {
    let legnehezebb = "";
    let maxTomeg = 0;

    for (let i = 0; i < tomeg.length; i++) {
      if (maxTomeg <= tomeg[i]) {
        maxTomeg = tomeg[i];
        legnehezebb = allat[i];
      }
    }

    info.innerText = "A legnehezebb állat: " + legnehezebb;
  } else {
    let legtobbEnergia = "";
    let maxEnergia = 0;

    for (let i = 0; i < allat.length; i++) {
      let energia = (tomeg[i] * sebesseg[i] * sebesseg[i]) / 2;
      if (maxEnergia <= energia) {
        maxEnergia = energia;
        legtobbEnergia = allat[i];
      }
    }

    info.innerText = "A legtöbb energiát használó állat: " + legtobbEnergia;
  }
}
