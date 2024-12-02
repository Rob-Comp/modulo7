// const Estudiante = class {
//
// }
export default class Estudiante {
    constructor(id, nombre, apellidos, edad, nroIdentificacion) {
        this._id = id;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._nroIdentificacion = nroIdentificacion;
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    get edad() {
        return this._edad;
    }

    get nroIdentificacion() {
        return this._nroIdentificacion
    }

    set id(nuevo_id) {
        if (nuevo_id === '') {
            console.error('Nuevo id no puede ser vacio!');
        } else {
            this._id = nuevo_id;
        }
    }

    set nombre(nuevo_nombre) {
        if (nuevo_nombre === '') {
            console.error('Nuevo nombre no puede ser vacio!');
        } else {
            this._nombre = nuevo_nombre;
        }
    }

    set apellidos(nuevo_apellidos) {
        if (nuevo_apellidos === '') {
            console.error('Nuevo_apellidos no puede ser vacio!');
        } else {
            this._apellidos = nuevo_apellidos;
        }
    }

    set edad(nuevo_edad) {
        if (nuevo_edad === '') {
            console.error('Nuevo edad no puede ser vacio!');
        } else {
            this._edad = nuevo_edad;
        }
    }

    set nroIdentificacion(nuevo_nroIdentificacion) {
        if (nuevo_nroIdentificacion === '') {
            console.error('Nuevo nroIdentificacion no puede ser vacio!');
        } else {
            this._nroIdentificacion = nuevo_nroIdentificacion;
        }
    }
}

export default class Cursos {
    constructor(id, titulo, descripcion) {
        this._id = id;
        this._titulo = titulo;
        this._descripcion = descripcion;
    }

    // Métodos getters
    get id() {
        return this._id
    }

    get titulo() {
        return this._titulo
    }

    get descripcion() {
        return this._descripcion
    }

    set id(nuevo_id) {
        if (nuevo_id === '') {
            console.error('Nuevo id no puede estar vacio!');
        } else {
            this._id = nuevo_id;
        }
    }

    set titulo(nuevo_titulo) {
        if (nuevo_titulo === '') {
            console.error('Nuevo titulo no puede estar vacio!');
        } else {
            this._titulo = nuevo_titulo;
        }
    }

    set descripcion(nuevo_descripcion) {
        if (nuevo_descripcion === '') {
            console.error('Nuevo descripcion no puede estar vacio!');
        } else {
            this._descripcion = nuevo_descripcion;
        }
    }
}