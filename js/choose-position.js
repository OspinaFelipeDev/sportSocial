document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");
    const confirmButton = document.querySelector("footer button");
    let selectedCheckbox = null; // Variable para almacenar la selección actual

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Encuentra el contenedor del jugador
            const player = this.closest(".player");

            // Verifica si ya tiene un checkbox
            let checkbox = player.querySelector("input[type='checkbox']");
            
            if (!checkbox) {
                // Si ya hay otro checkbox seleccionado, lo eliminamos
                if (selectedCheckbox) {
                    selectedCheckbox.remove();
                    selectedCheckbox = null;
                }

                // Crea un nuevo checkbox
                checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.classList.add("player-checkbox");

                // Inserta el checkbox antes del botón de dropdown
                player.insertBefore(checkbox, this);
                selectedCheckbox = checkbox; // Guardamos la referencia al checkbox seleccionado
            } else {
                // Si el checkbox ya existe, lo eliminamos al hacer clic de nuevo
                checkbox.remove();
                selectedCheckbox = null;
            }
        });
    });

    confirmButton.addEventListener("click", function () {
        if (selectedCheckbox) {
            // Obtiene el número de la posición seleccionada
            const playerNumber = selectedCheckbox.parentElement.querySelector("span").textContent;

            // Simulación de un nombre de usuario (deberías obtenerlo desde un formulario de inicio de sesión)
            const userName = "Usuario123"; // Puedes cambiar esto por una entrada dinámica

            // Guarda la selección en localStorage
            localStorage.setItem("selectedPlayer", playerNumber);
            localStorage.setItem("userName", userName);

            // Redirigir a la nueva pantalla
            window.location.href = "../html/booking.html";
        } else {
            alert("No has seleccionado ninguna posición.");
        }
    });
});
