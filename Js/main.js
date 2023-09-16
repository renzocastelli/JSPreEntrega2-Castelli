//Tener la informacion de los productos guardada
//Poder tomar input del usuario
//Buscar en base al criterio del usuario
//Poder definir un resultado o poder traer varios resultados parecidos
//Filtros relacionados con el input del usuario
let placas = [
    { nombre: "rtx3070", precio: 500, descripcion: "placa potente" },
    { nombre: "radeon7600", precio: 450, descripcion: "placa media" },
    { nombre: "intelceleron", precio: 200, descripcion: "placa mala" }
]

function buscar(input, placas) {
    let resultados = [];

    for (let i = 0; i < placas.length; i++) {
        if (placas[i].nombre.includes(input)) {
            resultados.push(placas[i]);
        }
    }

    if (resultados.length === 0) {
        console.log("No se encontraron resultados.");
    } else {
        console.log("Resultados encontrados:");
        for (let i = 0; i < resultados.length; i++) {
            console.log(`Nombre: ${resultados[i].nombre}, Precio: $${resultados[i].precio}, Descripción: ${resultados[i].descripcion}`);
        }
    }
}


let criterioBusqueda = prompt("Ingrese el criterio de búsqueda:");

buscar(criterioBusqueda, placas);