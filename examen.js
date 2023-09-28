var nombre = prompt("Bienvenido a al cuestionario sobre los mares. Ingresa tu nombre:");
var c = 0;
var i = 0;
var p1 = prompt("¿Cuánta agua hay en la Tierra?\nA: Alrededor de un 41% de la superficie terrestre es agua.\nB: Alrededor de un 51% de la superficie terrestre es agua.\nC: Alrededor de un 71% de la superficie terrestre es agua.")
if (p1 == "c"){
    c = c + 1;
}else{
    i = i + 1;
}

var p2 = prompt("¿Qué océano es el más grande?\nA:El Pacífico.\nB:El Atlántico.\nC:El Índico.");
if (p2 == "A"){
    c = c + 1;
}else{
    i = i + 1;
}

var p3 = prompt("¿Cuánto mide la parte más profunda de los Océanos?\nA:11 Km. \nB:23 Km\nC:31 Km");
if (p3 == "C"){
    c = c + 1;
}else{
    i = i + 1;
}

if(c > i){
    document.write(nombre + " , has superado con exito el cuestionario sobre los mares:<br>");
    document.write("Respuestas correctas: "+c+"<br>");
    document.write("respuestas incorrectas: "+i);
}else{
    document.write(nombre + " , puedes hacerlo mejor:<br>");
    document.write("Respuestas correctas: "+c+"<br>");
    document.write("respuestas incorrectas: "+i);
}