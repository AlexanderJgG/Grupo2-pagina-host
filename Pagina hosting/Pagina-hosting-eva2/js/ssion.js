document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores ingresados por el usuario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales (esto es solo un ejemplo)
    if (username === "Ruben" && password === "alonsorojas") {
        document.getElementById("mensaje").textContent = "Inicio de sesión exitoso.";
    } else {
        document.getElementById("mensaje").textContent = "Credenciales incorrectas. Por favor, inténtalo de nuevo.";
    }
});