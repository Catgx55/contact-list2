function agregar(persona){
  console.log("Agregando contactos nuevo");
  contacto.push(persona);
}

function mostrar(){
  for(let i = 0; i < contacto.length; i++){
    console.log(contacto[i].datosCompletos);
  }
}

console.log('Bienvenidos a la lista de contactos' + '\n___________________________________')
let contacto = [{
  id: 1,
  nombre: 'Cesar',
  apellido: 'Trujillo',
  telefono: 321654987,
  ubicaciones: {
    ciudad: 'Armenia',
    direccion: 'Mz 4 Cs 144'
  },
   get datosCompletos(){
     return 'Contacto N°: '+ this.id + '\nNombre: ' + this.nombre + '\nApellido: ' + this.apellido + 
     '\nTelefono: ' + this.telefono + '\nCiudad: ' + this.ubicaciones.ciudad + '\nDireccion: ' + this.ubicaciones.direccion + '\n___________________________________';
   }
},

{
  id: 2,
  nombre: 'Henry',
  apellido: 'Trujillo',
  telefono: 321654,
  ubicaciones: {
    ciudad: 'Armenia',
    direccion: 'Mz 4 Cs 144'
  },
   get datosCompletos(){
     return 'Contacto N°: '+ this.id + '\nNombre: ' + this.nombre + '\nApellido: ' + this.apellido + 
     '\nTelefono: ' + this.telefono + '\nCiudad: ' + this.ubicaciones.ciudad + '\nDireccion: ' + this.ubicaciones.direccion + '\n___________________________________';
   }
}]

agregar(persona = {
  id: 3,
  nombre: 'Andy',
  apellido: 'Trujillo',
  telefono: 321456,
  ubicaciones: {
    ciudad: 'Armenia',
    direccion: 'Mz 4 Cs 144',
  },
  get datosCompletos(){
    return 'Contacto N°: '+ this.id + '\nNombre: ' + this.nombre + '\nApellido: ' + this.apellido + 
    '\nTelefono: ' + this.telefono + '\nCiudad: ' + this.ubicaciones.ciudad + '\nDireccion: ' + this.ubicaciones.direccion + '\n___________________________________';
 }
})


mostrar();


//console.log(persona.datosCompletos);
//console.log(contacto[1].datosCompletos);