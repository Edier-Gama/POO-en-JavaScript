// Prototipos con la sintaxis de Clases

class Student {

    // Atributos

    constructor({
        name,
        age,
        cursosAprobados
    }){

        this.name = name
        this.age = age
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(curso){
        this.cursosAprobados.push(curso)
    }

}

const Natalia = new Student({
    name: 'Natalia',
    age: 20,
    cursosAprobados: 
    [
      'Curso de Js',
      'Curso de programación básica'

    ]
})