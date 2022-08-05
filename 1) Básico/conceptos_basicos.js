// Esto es un objeto literal, que es instancia del prototipo por
// default "Object"

const natalia = {

    // Propiedades del objeto Natalia

    name: 'Natalia',
    Age: '20',
    cursosApropados: 

    [
    
    'Curso definitivo de HTML Y CSS', 
    'Curso práctico de Javascript'
     
    ],

    // Métodos del objeto Natalia

    aprobarCurso(curso){
        this.cursosApropados.push(curso)
    }
}

// Hacer que Natalia apruebe otro curso:

// natalia.cursosApropabos.push('Curso de Scope y Closures')
// natalia.aprobarCurso('Curso de Responsive Desing')


// Prototipos

function Student(name, age, cursosApropados){
 
   this.name = name,
   this.age = age,
   this.cursosApropados = cursosApropados

   // En los prototipos podemos usar la palabrita prototype para crear los métodos

   Student.prototype.aprobarCurso = function(curso){
    this.cursosApropados.push(curso)
   }

}


// Creacion de instancia de la clase Student

const Juanita = new Student(
    'Juanita La Alcachofa',
    22,
    [
        'Curso definitivo de Python'
    ]
)




