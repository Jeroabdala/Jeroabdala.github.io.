function cl(dat) {
  console.log(dat);
}

const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var receta = urlParams.get("receta");
console.log(receta);

function preparado(datos) {
  datos.forEach((element) => {
    cl(element.nombre);
    if (element.nombre == receta) {
      graficarElemento(element);
    }
  });
}
function obtenerDatos() {
  const xmlh = new XMLHttpRequest();
  xmlh.open("GET", "datos.json", true);
  xmlh.send();

  xmlh.onreadystatechange = function (e) {
    if (e.target.readyState == 3) {
      const datosJSON = this.responseText;
      const datos = JSON.parse(datosJSON);
      return preparado(datos);
    } else {
      return cl("nmo");
    }
  };
}
obtenerDatos();

function graficarElemento(dato) {
  const body = document.querySelector("body");
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
