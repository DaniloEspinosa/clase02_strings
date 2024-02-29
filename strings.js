// Métodos de Strings

let text_1 = "Hoy es jueves"

// Maneras de definir un String
let manera_1 = "Hola" // con doble comilla, se pueden incluir comillas simples
let manera_2 = 'Hola' // con comilla simple, se pueden incluir comillas dobles
let manera_3 = `Hola` // con acento grave, se puede incluir variables y las comillas

// length --> nos da la longitud de la cadena
console.log(`La variable tiene ${text_1.length} caracteres.`)

// charAt() --> para acceder a un caracter por su posición
// at() --> para acceder a un caracter por su posición y permite contar desde atras (-1, -2, ...)

console.log(text_1.charAt(0))
console.log(text_1.at(-1))
console.log(text_1[0])

// slice() --> Sirve para cortar un string
let text_2 = text_1.slice(0, 4)
let text_3 = text_1.slice(4, 8)
let text_4 = text_1.slice(4)

console.log(text_2)
console.log(text_3)
console.log(text_4)

// substr  --> extrae desde una posición inicial el numero de caracteres que le indicamos
let text_5 = text_1.substr(4)
console.log(text_5)

// toUpperCase()  --> pone todo el texto en mayúsculas
let text_6 = text_1.toUpperCase()
console.log(text_6)

// toLowerCase()  --> pone todo el texto en minúsculas
let text_7 = text_1.toLowerCase()
console.log(text_7)

let nombre = "DaNILo"
let registro = "danilo"

if (nombre.toLowerCase() == registro) {
    console.log("Es el mismo usuario")
} else {
    console.log("No se quien es")
}

// toLocaleUpperCase()  --> pone todo el texto en mayúsculas
let text_8 = text_1.toLocaleUpperCase()
console.log(text_8)

// toLocaleLowerCase()  --> pone todo el texto en minúsculas
let text_9 = text_1.toLocaleLowerCase()
console.log(text_9)

//concat()  --> unir strings
let parte1 = "Buenos"
let parte2 = "días"
let saludo_completo = parte1 + " " + parte2
let saludo_completo1 = parte1.concat(" ", parte2)
console.log(saludo_completo1)

// trim()  --> elimina los espacion al principio y al final de una cadena
let usuario = "        Danilo Espinosa      "
console.log(usuario.length)
console.log(usuario.trim().length)

// trimStart()  -->  Quita los espacios solo al principio
// trimEnd()    -->  Quita los espacios solo al final

// repeat()  -->  Repite una cadena las veces que le indicamos
console.log("hola ".repeat(3))

// replace()  -->  Reemplazar la primera aparicion que coincide
console.log(text_1)
console.log(text_1.replace("jueves", "viernes"))

let text_10 = "Me gusta mucho mucho mucho javascript"

console.log(text_10.replace("mucho", "poco"))

// replaceAll()  -->  Reemplazar todas las coincidencias
console.log(text_10.replaceAll("mucho", "poco"))

// split()  --> convierte un string en array
let nombre_completo = "Peter Pan"  // "Pan, Peter"
let nombre_array = nombre_completo.split(" ")
console.log(nombre_array)
let nombre_final = nombre_array[1] + ", " + nombre_array[0]
console.log(nombre_final)
console.log(nombre_array[1].concat(", ", nombre_array[0]))  // Lo mismo se puede hacer con concat()

// Convertir este nombre
let cliente = "   poppins, mary"  // "Mary Poppins"
let cliente2 = "     mouse, mickey   "  // "Mickey Mouse"
let cliente3 = "    de los anillos, el señor    "   // "El Señor De Los Anillos"
let cliente4 = "     spiderman   "

function convertir_nombre_cliente(nombre) {
    // quitar espacios y separar las palabras
    let array = nombre.trim().split(", ")
    // formar la primera palabra con letra mayuscula
    let parte1 = array[1].charAt(0).toUpperCase() + array[1].slice(1)
    // formar la segunda palabra con letra mayuscula
    let parte2 = array[0].charAt(0).toUpperCase() + array[0].slice(1)
    // devolver el nombre concatenando parte1 con parte2
    return parte1.concat(" ", parte2)
}

console.log(convertir_nombre_cliente(cliente))
console.log(convertir_nombre_cliente(cliente2))

let fecha = "29-02-2024"  // 2024-02-29

let partir_fecha = fecha.split("-")
let fecha_corregida = partir_fecha[2] + "-" + partir_fecha[1] + "-" + partir_fecha[0]
console.log(fecha_corregida)


function convertir_nombre_cliente2(nombre) {
    // quitar espacios y separar las palabras
    let array = nombre.trim().split(", ")
    console.log(array)
    // reordenar las partes de la frase de la manera correcta
    let nombre_completo = array[1].concat(" ", array[0])
    // convertir la nueva frase en un array para poder capitalizar las palabras
    let array2 = nombre_completo.split(" ")
    // definir una nueva variable para utilizar en el bucle for
    let frase_final = ""
    for (let i = 0; i < array2.length; i++) {
        // capitalizar cada palabra del array
        let palabra = array2[i].charAt(0).toUpperCase() + array2[i].slice(1)
        // concatenar cada palabra a la frase para obtener la frase final
        frase_final = frase_final + " " + palabra
    }
    //devolver el resultado de la frase final quitando el primer espacio que se genera de la concatenación
    return frase_final.trim()
}

console.log(convertir_nombre_cliente2(cliente3))
console.log(convertir_nombre_cliente2(cliente))
console.log(convertir_nombre_cliente2(cliente2))

function convertir_nombre_cliente3(nombre) {
    // quitar espacios y separar
    let array = nombre.trim().split(", ")
    console.log(array)
    let frase_final = ""
    if (array.length > 1) {
        // reordenar las parted de la frase de la manera correcta
        let nombre_completo = array[1].concat(" ", array[0])
        // convertir la nueva frase en un array para poder capitalizar las palabras
        let array2 = nombre_completo.split(" ")
        // definir una nueva variable para utilizar en el bucle for
        for (let i = 0; i < array2.length; i++) {
            // capitalizar cada palabra del array
            let palabra = array2[i].charAt(0).toUpperCase() + array2[i].slice(1)
            // concatenar cada palabra a la frase para obtener la frase final
            frase_final = frase_final + " " + palabra
        }
        return frase_final.trim()
    } else {
        return array[0].charAt(0).toUpperCase() + array[0].slice(1)
    }

    //devolver el resultado de la frase final quitando el primer espacio que se genera de la concatenación
}

console.log(convertir_nombre_cliente3(cliente3))
console.log(convertir_nombre_cliente3(cliente4))
console.log(convertir_nombre_cliente3(cliente))
console.log(convertir_nombre_cliente3(cliente2))