class Usuarios {
  constructor() {
    this.personas = [];
  }

  agregarPersona(id, nombre, sala) {
    // console.log("ya esta aqui");
    let persona = { id, nombre, sala };
    this.personas.push(persona);
    return this.personas;
  }

  getPersona(id) {
    let persona = this.personas.filter(persona => {
      
      // console.log(persona.id);
      // console.log(id);
      // console.log(persona.id === id);
      return persona.id === id;
    })[0];
    return persona;
  }

  getPersonas() {
    return this.personas;
  }

  getPersonasPorSala(sala) {
    //....
    let personasEnSala = this.personas.filter(persona => persona.sala === sala);
    return personasEnSala;
  }

  borrarPersona(id) {
    let personaBorrada = this.getPersona(id);
    this.personas = this.personas.filter(persona => persona.id != id);
    return personaBorrada;
  }
}

module.exports = {
  Usuarios
};
