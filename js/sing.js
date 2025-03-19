document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Correo:", email);
    console.log("Contraseña:", password);

    // Simular autenticación (puedes cambiar esto con una validación real)
    if (email && password) { 
        // Redirigir a la pantalla de perfil
        window.location.href = "profile.html";
    } else {
        alert("Por favor, ingresa un correo y una contraseña válidos.");
    }
});
