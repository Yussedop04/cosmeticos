function filtrarProductos() {
    var categoria = document.getElementById("categoria").value;
    var productos = document.getElementsByClassName("producto");

    for (var i = 0; i < productos.length; i++) {
        if (categoria === "todos" || productos[i].classList.contains(categoria)) {
            productos[i].style.display = "block";
        } else {
            productos[i].style.display = "none";
        }
    }
}
// Obtén el botón por su id
function redirigir() {
    window.location.href = "login.html";
  }




