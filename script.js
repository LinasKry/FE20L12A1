var prekesKaina = prompt("Kokia prekės kaina?");
if (isNaN(prekesKaina))
  var prekesKaina = prompt(
    " Neteisinga reikšmė! Prašome įveskite kainą skaičiais"
  );
if (isNaN(prekesKaina)) {
  alert("Deja skaičiavimas negalimas");
  var prekesKaina = 0;
  throw new Error("Nereik rašinėt nesamonių :)");
} else {
  console.log("Jūsų atsakymas");
}
var PVM = prekesKaina - prekesKaina / 1.21;
var PVM = PVM.toFixed(2);
console.log("Prekes kaina su PVM = " + prekesKaina + " EUR");
console.log("PVM = " + PVM + " EUR");
console.log("Prekes Kaina be PVM = " + (prekesKaina - PVM) + " EUR");
alert(
  "Jūsų atsakymas" +
    "\n" +
    "Prekes kaina su PVM = " +
    prekesKaina +
    " EUR" +
    "\n" +
    "PVM = " +
    PVM +
    " EUR" +
    "\n" +
    "Prekes Kaina be PVM = " +
    (prekesKaina - PVM) +
    " EUR"
);
