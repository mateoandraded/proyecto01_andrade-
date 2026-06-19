const el = document.getElementById("actualizado");

if (el) {
  const fecha = new Date().toLocaleDateString("es-EC", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  el.textContent = "Ultima actualizacion: " + fecha;
}
