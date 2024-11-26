/*DICHIARAZIONE VARIABILI*/
const panels = document.querySelectorAll(".panel");
const buttonLeft = document.querySelector(".btn-left");
const buttonRight = document.querySelector(".btn-right");

/*TRACCIA IL PANNELLO ATTIVO IMPOSTATO SU 0, IL PRIMO PANNELLO è ATTIVO*/
let activeIndex = 0;

/** RIMUOVE LA CLASSE ATTIVA DA TUTTI I PANNELLI */
function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/* ATTIVA UN PANNELLO ATTIVO IN BASE AL SUO INDEX */
function setActive(index) {
  removeActive();
  panels[index].classList.add("active");
}

/* GESTIONE PULSANTE SINISTRO */
buttonLeft.addEventListener("click", function () {
  activeIndex = (activeIndex - 1 + panels.length) % panels.length;
  setActive(activeIndex);
});

/* GESTIONE PULSANTE DESTRO */
buttonRight.addEventListener("click", function () {
  activeIndex = (activeIndex + 1) % panels.length;
  setActive(activeIndex);
});

/* GESTIONE CLICK SUI PANNELLI */
panels.forEach((panel, index) => {
  panel.addEventListener("click", function () {
    activeIndex = index;
    setActive(activeIndex);
  });
});
