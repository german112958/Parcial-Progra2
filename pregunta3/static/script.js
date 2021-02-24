function sendValue() {
    var producto = document.getElementById("Producto").value;
    var precio = document.getElementById("Precio").value;
    var cantidad = document.getElementById("Cantidad").value;
    var subtotal = document.getElementById("cantidad").value * document.getElementById("Precio").value;

    var fila = "<tr><td>" + producto + "</td><td>" + cantidad + "</td><td>" + precio + "</td><td>" + subtotal + "</td></tr>";

    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tablaprecio").appendChild(btn);
}

