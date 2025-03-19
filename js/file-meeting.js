 // Datos simulados (reemplaza esto con datos de la base de datos)
const equipoAzul = [
    { nombre: "Carlos Pérez", oficio: "Portero", posicion: "Arquero", foto: "../assets/images/profile.jpg" },
    { nombre: "Andrés López", oficio: "Defensa", posicion: "Central", foto: "../assets/images/profile.jpg" },
    { nombre: "Fernando Ruiz", oficio: "Defensa", posicion: "Lateral", foto: "../assets/images/profile.jpg" },
    { nombre: "Gabriel Mendoza", oficio: "Defensa", posicion: "Lateral", foto: "../assets/images/profile.jpg" },
    { nombre: "Miguel Torres", oficio: "Defensa", posicion: "Central", foto: "../assets/images/profile.jpg" },
    { nombre: "Juan Gutiérrez", oficio: "Mediocampista", posicion: "Volante", foto: "../assets/images/profile.jpg" },
    { nombre: "Luis Ramírez", oficio: "Mediocampista", posicion: "Volante", foto: "../assets/images/profile.jpg" },
    { nombre: "José Fernández", oficio: "Mediocampista", posicion: "Volante", foto: "../assets/images/profile.jpg" },
    { nombre: "Alberto Sánchez", oficio: "Delantero", posicion: "Extremo", foto: "../assets/images/profile.jpg" },
    { nombre: "Daniel Gómez", oficio: "Delantero", posicion: "Extremo", foto: "../assets/images/profile.jpg" },
    { nombre: "Francisco Herrera", oficio: "Delantero", posicion: "Centrodelantero", foto: "../assets/images/profile.jpg" }
];

const equipoRojo = equipoAzul.map(jugador => ({ ...jugador, nombre: jugador.nombre.replace("Carlos", "Pedro") })); // Simulamos datos diferentes

// Función para renderizar los equipos
function renderizarEquipo(equipo, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    equipo.forEach(jugador => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-jugador");
        tarjeta.innerHTML = `
            <img src="${jugador.foto}" alt="Foto de ${jugador.nombre}">
            <h2>${jugador.nombre}</h2>
            <p><strong>Oficio:</strong> ${jugador.oficio}</p>
            <p><strong>Posición:</strong> ${jugador.posicion}</p>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Renderizar ambos equipos
renderizarEquipo(equipoAzul, "equipo-azul");
renderizarEquipo(equipoRojo, "equipo-rojo");