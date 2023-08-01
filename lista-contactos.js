class Persona{

  static contadorPersonas = 0;
  
  constructor(nombres, apellido, telefono, ubicacion){
      this._id = ++Persona.contadorPersonas;
      this._nombre = nombres;
      this._apellido = apellido;
      this._telefono = telefono;
      this._ubicacion = ubicacion;
  }

  get id(){
      return this._id;
  }

  set id(id){
      this._id = id;
  }

  get nombres(){
      return this._nombre;
  }

  set nombres(nombres){
      this._nombre = nombres;
  }

  get apellido(){
      return this._apellido;
  }

  set apellido(apellido){
      this._apellido = apellido;
  }

  get telefono(){
      return this._telefono;
  }

  set telefono(telefono){
      this._telefono = telefono;
  }

  get ubicacion(){
      return this._ubicacion;
  }

  set ubicacion(ubicacion){
      this._ubicacion = ubicacion;
  }

  toString(){
      return `Contacto n°: ${this._id}, Nombre: ${this._nombre}, Apellido: ${this._apellido}, Telefono ${this._telefono}, Direccion: ${this._ubicacion} `;
  }
}

class Contacto{
  static contadorContactos = 0;

  static get MAX_CONTACTOS(){
      return 5;
  }

  constructor(){
      this._idContactos = ++Contacto.contadorContactos;
      this._contactos = [];
  }

  get idContactos(){
      return this._idContactos
  }

  agregarContacto(nuevoContacto){
      if(this._contactos.length < Contacto.MAX_CONTACTOS){
          this._contactos.push(nuevoContacto);
      }else{
          console.log('No se pueden agregar mas contactos');
      }
  }

  eliminarContacto(eliminar){
    let index = this._contactos.indexOf(eliminar);
    if(index !== -1){
        this._contactos.splice(index, 1);
    }
}

  mostrarContactos(){
      let contactoPersona = '';
      for(let contacto of this._contactos){
          contactoPersona += '\n{' + contacto.toString() + '}';
      }

      console.log(`Lista N°: ${this._idContactos} Contactos: ${contactoPersona}`);
  }

}

let persona1 = new Persona('Cesar', 'Trujillo', 321, 'Mz 4 Cs 144');
let persona2 = new Persona('Andy', 'Trujillo', 654, 'Mz 5 Cs 146');
let persona3 = new Persona('Henry', 'Trujillo', 789, 'Mz 6 Cs 148');
let persona4 = new Persona('Maria', 'Torres', 453, 'Mz 7 Cs 150');
let persona5 = new Persona('Elicenia', 'Giraldo', 785, 'Mz 8 Cs 152');

let contacto1 = new Contacto();
contacto1.agregarContacto(persona1);
contacto1.agregarContacto(persona2);
contacto1.mostrarContactos();

let contacto2 = new Contacto();
contacto2.agregarContacto(persona3);
contacto2.agregarContacto(persona4);
contacto2.agregarContacto(persona5);
contacto2.mostrarContactos();

contacto1.eliminarContacto(persona2);
contacto1.mostrarContactos();
contacto2.eliminarContacto(persona4);
contacto2.mostrarContactos();
