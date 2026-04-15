console.log("Conexion con js correcta...")
/*
Dato: Tipo texto(string)
concatenación de texto con el signo +
podemos unir texto y variables
*/
const nombre ="Nayara";
const apellido ="Pérez";
//Unimos ambas contantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + " " + apellido);

/*
2._ver el tipo de dato (typeof)
*/
console.log("la variable nombre es un tipo de dato; " + typeof nombre);

//template literals (fornma moderna para concatenar)``
console.log  (`Hola, mi nombre es: ${nombre} ${apellido}`)   ; 


//Mostrar el largo de un string (texto) -contar los caracteres.
// .length --> para conatr caractetres y espacios.
let palabra = "paralelepipedo";
console.log(`la palabra ${palabra} tiene ${palabra.length} letras.`);

// Crear una frase y contar sus caracteres.
let frase = "Hoy me desterte temprano y tome desayuno";
console.log(`la frase ${frase} tiene ${frase.length } caracteres.`);

//metodos comunes en js para formatiar texto
// tranformar texto en mayusculas =.toUpperCase
let texto1 = "JAVasCriPT eS lO MeJoR" ;
console.log(texto1.toUpperCase());

//tranformar texto a minusculas .toLowerCase
console.log(texto1.toLowerCase());

//Buscar un texto dentro de un string .includes ()
let texto2 = "Leche, azucar, peras, huevo, harina, "
console.log(texto2.includes("peras")); //true


//convertir una variable a texto .toString()
let telefono = 89182920;
let telefono_Texto = String(telefono);
console.log(`mi numero de telefono ${telefono_Texto}
    es de tipo ${typeof telefono_Texto}`);
