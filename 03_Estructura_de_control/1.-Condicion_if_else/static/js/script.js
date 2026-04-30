console.log("Conexion con JS correcta...")
/*
==============================
1.¿que es una condicion?
==============================
Una condicion nos permite tomar decisiones en el codigo. Separando dos caminos el si(if) y el no(else).

Estructura basica:(Sintaxis --> Reglas del lenguaje de programacion)
if (consicion)
//codigo que se ejecuta si la condicion es verdadera.
}else}
    //codigo que se ejecuta si la condicion es falsa.
}
    */
//Ejemplo 1:(numerico) --IF
let edad = 18;

if (edad >= 18) {
    console.log("eres mayor de edad");
}
//Ejemplo 2:Dos Caminos posibles
let temperatura = 10;

if (temperatura > 20) {
    console.log("hace calor");
} else {
    console.log("Hace frio")
}
//Ejemplo 3:IF - ELSE IF - ELSE (Multiples condiciones)
let nota = 7.0;

if (nota >= 6.0) {
    console.log("excelente! sigue asi");
} else if (nota >= 4.0) {
    console.log("Aprobado,Puedes mejorar!");
} else {
    console.log("Reprovado, estudia mas")
}
//4 condiciones con STRING
let nombre ="Nayara";

//conparacion exacta (===)
if (nombre === "Nayara"){
    console.log("Hola "+ nombre)
} else {
    console.log("Tu no eres Nayara")
}
/* OPERADORES DE COMPARACION
> mayor que 
< menor que
>=mayor o igual
<= menor o igual
=== escricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
//EJEMPLO DE DISTINTO
let num = 1;
let num2 = 10;
if(num !==5){
    console.log(`El numero:${num} es distinto que ${num2}`)
}else{
    console.log("son iguales!")
}