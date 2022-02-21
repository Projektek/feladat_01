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
tomeg.push(jaguarTomeg);
let tigrisTomeg = +document.getElementById("tigrisTomeg").innerText;
tomeg.push(tigrisTomeg);
let oroszlanTomeg = +document.getElementById("oroszlanTomeg").innerText;
tomeg.push(oroszlanTomeg);

let magassag = [];
let gepardMagassag = +document.getElementById("gepardMagassag").innerText;
magassag.push(gepardMagassag);
let jaguarMagassag = +document.getElementById("jaguarMagassag").innerText;
magassag.push(jaguarMagassag);
let tigrisMagassag = +document.getElementById("tigrisMagassag").innerText;
magassag.push(tigrisMagassag);
let oroszlanMagassag = +document.getElementById("oroszlanMagassag").innerText;
magassag.push(oroszlanMagassag);
console.log(magassag);

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
  } else if (ertekel == 3) {
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
  } else if (ertekel == 4) {
    let legmagasabb = "";
    let maxMagassag = 0;

    for (let i = 0; i < magassag.length; i++) {
      if (maxMagassag <= magassag[i]) {
        maxMagassag = magassag[i];
        legmagasabb = allat[i];
      }
    }

    info.innerText = "A legmagasabb állat: " + legmagasabb;
  }
}
