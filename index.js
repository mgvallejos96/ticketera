class Persona {
    constructor (nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido= apellido;
        this.edad= edad;
    }
}

const personita = new Persona("Luis","Miguel",30);

console.log(personita);

class Estudiante extends Persona {
    constructor(nombre,apellido,edad,carrera,promedio){
        super(nombre,apellido,edad);
        this.carrera=carrera;
        this.promedio=promedio;
    }
}

const estudainte = new Estudiante ("Ale","Gim",30,"Sistemas",10);

console.log(estudainte)