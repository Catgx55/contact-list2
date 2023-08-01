function agregar(contacto) {
  for (let i = 0; i < contacto.length; i++) {
    contacto.push([i]);
  }
  console.log(
    "Agregando contactos nuevo: " + "\n___________________________________"
  );
}

function eliminar(){
  contacto.push(contacto);
}


function mostrar() {
  for (let i = 0; i < contacto.length; i++) {
    console.log(contacto[i].datosCompletos);
  }
}

console.log(
  "Bienvenidos a la lista de contactos" +
    "\n___________________________________"
);
let contacto = [
  {
    id: 1,
    nombre: "Cesar",
    apellido: "Trujillo",
    telefono: 321654987,
    ubicaciones: {
      ciudad: "Armenia",
      direccion: "Mz 4 Cs 144",
    },
    get datosCompletos() {
      return (
        "Contacto N°: " +
        this.id +
        "\nNombre: " +
        this.nombre +
        "\nApellido: " +
        this.apellido +
        "\nTelefono: " +
        this.telefono +
        "\nCiudad: " +
        this.ubicaciones.ciudad +
        "\nDireccion: " +
        this.ubicaciones.direccion +
        "\n___________________________________"
      );
    },  
  },

  {
    id: 2,
    nombre: "Henry",
    apellido: "Trujillo",
    telefono: 321654,
    ubicaciones: {
      ciudad: "Armenia",
      direccion: "Mz 4 Cs 144",
    },
    get datosCompletos() {
      return (
        "Contacto N°: " +
        this.id +
        "\nNombre: " +
        this.nombre +
        "\nApellido: " +
        this.apellido +
        "\nTelefono: " +
        this.telefono +
        "\nCiudad: " +
        this.ubicaciones.ciudad +
        "\nDireccion: " +
        this.ubicaciones.direccion +
        "\n___________________________________"
      );
    },
  },
];

mostrar();

agregar(
  (contacto[2] = {
    id: 3,
    nombre: "Andy",
    apellido: "Trujillo",
    telefono: 321456,
    ubicaciones: {
      ciudad: "Armenia",
      direccion: "Mz 4 Cs 144",
    },
    get datosCompletos() {
      return (
        "Contacto N°: " +
        this.id +
        "\nNombre: " +
        this.nombre +
        "\nApellido: " +
        this.apellido +
        "\nTelefono: " +
        this.telefono +
        "\nCiudad: " +
        this.ubicaciones.ciudad +
        "\nDireccion: " +
        this.ubicaciones.direccion +
        "\n___________________________________"
      );
    },
  })
);

mostrar();
eliminar(2);
mostrar();
