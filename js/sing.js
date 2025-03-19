document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Correo:", email);
    console.log("Contraseña:", password);

    // Aquí pODREMOS enviar los datos a una API con fetch()
});