function cl(dat) {
  console.log(dat);
}
window.addEventListener("load", function () {
  return obtenerDatos();
});

function preparado(datos) {
  datos.forEach((element) => {
    graficarElemento(element);
  });
}
function obtenerDatos() {
  const xmlh = new XMLHttpRequest();
  xmlh.open("GET", "datos.json", true);
  xmlh.send();

  xmlh.onreadystatechange = function (e) {
    cl(e.target.readyState);
    if (e.target.readyState == 3) {
      const datosJSON = this.responseText;
      const datos = JSON.parse(datosJSON);
      return preparado(datos);
    } else {
      return cl("nmo");
    }
  };
}

function graficarElemento(dato) {
  const body = document.querySelector("body");
  cl(dato.descripcion);
  const tituloDat = dato.nombre;
  const descripcionDat = dato.descripcion;
  const section = document.createElement("SECTION");
  const titulo = document.createElement("H4");
  const descripcion = document.createElement("P");
  titulo.textContent = tituloDat;
  descripcion.textContent = descripcionDat;

  body.appendChild(section);
  section.appendChild(titulo);
  section.appendChild(descripcion);
}
