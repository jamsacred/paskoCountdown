let arawEl = document.getElementById("araw");
let orasEl = document.getElementById("oras");
let minutoEl = document.getElementById("min");
let segundoEl = document.getElementById("seg");
function pasko() {
  const paskoNa = new Date("2023-12-25 00:00:00").getTime();
  const ngayon = new Date().getTime();
  const natitirangOras = paskoNa - ngayon;

  const araw = Math.floor(natitirangOras / (1000 * 60 * 60 * 24));
  const oras = Math.floor(
    (natitirangOras % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minuto = Math.floor((natitirangOras % (1000 * 60 * 60)) / (1000 * 60));
  const segundo = Math.floor((natitirangOras % (1000 * 60)) / 1000);

  arawEl.innerHTML = araw;
  orasEl.innerHTML = oras;
  minutoEl.innerHTML = minuto;
  segundoEl.innerHTML = segundo;
  if (natitirangOras <= 0) {
    alert("Pasko na!");
  }
}
pasko();

setInterval(pasko, 1000);
