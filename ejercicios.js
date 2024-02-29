// Hay que invertir la manera en la que esta escrita la fecha
let fecha = "29-02-2024"  // Debe quedar de esta manera "2024-02-29" este es el formato de fecha internacional

let arrayFecha = fecha.split("-")
console.log(arrayFecha)
let fechaInvertida = arrayFecha[2] + "-" + arrayFecha[1] + "-" + arrayFecha[0]
console.log(fechaInvertida)

// Tenemos este nombre
let cliente1 = "    poppins, mary   " // Debemos obtener "Mary Poppins"
let cliente2 = "   mouse, mickey   "  // Debemos obtener "Mickey Mouse"

let cliente3 = "   de los anillos, el señor  "  // Debemos obtener "El Señor De Los Anillos"
let cliente4 = "    spiderman  "                // Debemos obtener "Spiderman"

function arreglar_nombres(cliente) {
    // Quitar espacios que sobran adelante y atras
    let clienteSinEspacios = cliente.trim()

    // Separar apellido y nombre
    let separado = clienteSinEspacios.split(", ")

    let inicialApellido = separado[0].at(0).toUpperCase()
    let restoApellido = separado[0].slice(1)
    let apellido = inicialApellido + restoApellido
    console.log(inicialApellido)
    console.log(restoApellido)
    console.log(apellido)

    let apellido2 = separado[0].at(0).toUpperCase() + separado[0].slice(1)
    console.log(apellido2)

    let nombrePila = separado[1].at(0).toUpperCase() + separado[1].slice(1)
    console.log(nombrePila)

    // let nombreFinal = nombrePila.concat(" ", apellido2)
    // console.log(nombreFinal)
    // return nombreFinal

    return nombrePila.concat(" ", apellido2)
}


console.log(arreglar_nombres(cliente1))
console.log(arreglar_nombres(cliente2))
console.log(arreglar_nombres(cliente3))

function ponerInicialEnMayusculas(palabra) {
    return palabra.at(0).toUpperCase() + palabra.slice(1)
}

function arreglar_nombres2(cliente) {
    let nombreSinEspacios = cliente.trim().split(", ")
    console.log(nombreSinEspacios)
    if (nombreSinEspacios.length > 1) {
        let ordenCorregido = nombreSinEspacios[1].concat(" ", nombreSinEspacios[0])
        console.log(ordenCorregido)
        // console.log(typeof(nombreSinEspacios))
        // console.log(typeof(nombreSinEspacios[1] + " " + nombreSinEspacios[0]))

        let ordenCorregidoArray = ordenCorregido.split(" ")
        console.log(ordenCorregidoArray)

        let textoFinal = ""
        for (let i = 0; i < ordenCorregidoArray.length; i++) {
            console.log(ordenCorregidoArray[i])
            let temp = ponerInicialEnMayusculas(ordenCorregidoArray[i])
            console.log(temp)
            textoFinal = textoFinal + " " + temp
        }
        return textoFinal.trim()
    } else {
        return nombreSinEspacios[0].at(0).toUpperCase() + nombreSinEspacios[0].slice(1)
    }



}

console.log(arreglar_nombres2(cliente1))
console.log(arreglar_nombres2(cliente2))
console.log(arreglar_nombres2(cliente3))
console.log(arreglar_nombres2(cliente4))

