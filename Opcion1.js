let l= Number(prompt("Ingrese cantidad de litros que produce"));
let pg= +prompt("Ingrese el precio del galon");
let tg=l/3.785;
let ga;

ga=pg*tg;

console.log(`La producción de un día será: ${ga}`);
