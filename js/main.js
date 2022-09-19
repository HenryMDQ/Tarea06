console.log("========= Punto 1 tarea 6 ===========");
console.log("====Lectura de Title del documento index.html====");
console.log(document.title);

console.log("========= Punto 3 tarea 6 ===========");

let integrante = document.querySelectorAll("dl");

var personas= new Array(2);
for (var i = 0; i < 2; i++) {
    personas[i] = new Array(4);
}

for (i = 0; i < integrante.length; ++i) {
    let descripcion = integrante[i].querySelectorAll("dt");
    let items = integrante[i].querySelectorAll("dd");
    for (j = 0; j < items.length; j++) {
        personas[i][j] = items[j].innerHTML.toString().trimStart().trimEnd();
    } 
}
let resultado='-----\n';

for (let i = 0; i < 2; i++) {
    resultado = resultado + `Integrante ${i+1}: "`
    for (let j = 0; j < 4; j++) {
        if (personas[i][j] != ""){
          resultado = resultado + personas[i][j]+" ";
        }
    }
    resultado = resultado.trimEnd()+'"\n'
}
console.log(resultado);

console.log("========= Punto 4 tarea 6 ===========");

