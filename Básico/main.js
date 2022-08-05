// Vamos a recrear un sistema báscico de estudiantes en una plataforma
// educatiiva virtual usando POO

class Student
{
    constructor(    
    {
        name,
        email,
        userName,
        instagram = undefined,
        twitter = undefined,
        facebook = undefined,
        cursosAprobados = [],
        escuelasDeApredizaje = []
    }
    ) 
    
    {
        this.name = name
        this.email = email
        this.userName = userName
        this.redesSociales = 
        {
            facebook,
            twitter,
            instagram
        }
        this.cursosAprobados = cursosAprobados
        this.escuelasDeApredizaje = escuelasDeApredizaje
    }

    publicarComentario(comentario){
        const comment = new Comment ({
            content: comentario,
            studentName: this.name
        })

        comment.publicar()
    }
}


class FreeStudent extends Student{
   constructor(props){
     super(props)
   }

   aprobarCurso(curso){
    if (curso.isFree){
        this.cursosAprobados.push(curso)
        console.warn('Curso aprovado con éxito')
    }else{
        console.warn('Lo sentimos' + this.name + ', no puedes aprobar cursos de pago')
    }
   }
}


class BasicStudent extends Student{
    constructor(props){
      super(props)
    }

    aprobarCurso(curso){
        if (curso.lang !== 'ingles'){
            this.cursosAprobados.push(curso)
            console.warn('Curso aprovado con éxito')
        }else{
            console.warn('Lo sentimos ' + this.name + ' no puedes tomar clases en ingles')
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
      super(props)
    }


    aprobarCurso(curso){
        if (curso.isFree){
            this.cursosAprobados.push(curso)
            console.warn('Curso aprovado con éxito')
        }else{
            console.warn('Curso aprobado con éxito')
        }
    }
}

class TeacherStudent extends Student{

    constructor(props){
        super(props)
    }

    aprobarCurso(curso){
        
        if (curso.isFree){
            this.cursosAprobados.push(curso)
            console.warn('Curso aprovado con éxito')
        }else{
            console.warn('Curso aprobado con éxito')
        }
    }

    publicarComentario(comentario){
        const comment = new Comment ({
            content: comentario,
            studentName: this.name,
            studentRol: 'Profesor'
        })

        comment.publicar()
    }
}


class Comment{
    constructor({
        content,
        studentName,
        studentRol = 'estudiante'
    }){
        this.content = content
        this.studentName = studentName
        this.studentRol = studentRol
        this.likes = 0
    }

    publicar(){
        console.log(this.studentName + '( ' + this.studentRol + ' )')
        console.log(this.likes + ' likes')
        console.log(this.content)
    }
}



class escuela{
    constructor(
    {

       name,
       cantidadCursos,
       temaEscuela,
       certificado = null,
       cursos
    }
    )
    {
        // El guion bajo significa que es un atributo privado
        this.name = name
        this.cantidadCursos = cantidadCursos
        this.temaEscuela = temaEscuela
        this.certificado = certificado
        this.curso = cursos
    }

    // Entonces si el nombre del curso es privado como puedo obtener su valor?


}

function playVideo(id){
      const urlSecreta = 'https://platziurlsupersecreta.com/'+id
      console.log('Se está reproducuiendo desde ' + urlSecreta)
}

function stopVideo(id){
    const urlSecreta = 'https://platziurlsupersecreta.com/'+id
    console.log('Se pausó desde ' + urlSecreta)
}

class PlatziClass{
    constructor({
       name,
       classID,
    })
    {
       this.name = name
       this.classID = classID
    }

    reproducir(){
        playVideo(this.classID)
    }

    pausar(){
        stopVideo(this.classID)  
    }
}


class Curso {

    constructor(
    {
         name,
         clases,
         profesor,
         calificacion,
         certificado,
         isFree,
         lang
    }
    )
    {
        this._name = name,                  
        this.clases = clases,
        this.profesor = profesor,
        this.calificacion = calificacion,
        this.certificado = certificado
        this.isFree = isFree
        this.lang = lang
    }

    get name(){
        return this._name
    }

    set name(nuevoNombrecito){

        
        if (nuevoNombrecito === 'Curso Malito de programación basica'){
            console.error('Oye que te pasa loca')
        } else{
          this._name = nuevoNombrecito
        }

    }
}


const cursoProgBasica = new Curso({

    name: 'Curso Gratis de programacion basica',
    clases: 23,
    profesor: 'Freddy Vega',
    calificacion: 5.0,
    certificado: 'Certificado oficial de el curso de programacion basica',
    isFree: true,
    lang: 'español'
})

const cursoPOO = new Curso({
    name: 'Curso de programacion orientada a objetos',
    clases: 23,
    profesor: 'Edier Gama',
    calificacion: 5.0,
    certificado: 'Certificado oficial de el curso de programacion orientada a objetos',
    isFree: false,
    lang: 'ingles'
})




const escuelaDeDesarrolloWeb = new escuela({
    name: 'Escuela de desarrollo web',
    cantidadCursos: 120,
    temaEscuela: 'Programación Web',
    certificado: 'Certificado oficial de la escuela de desarrollo web',
    cursos: [cursoProgBasica, cursoPOO]
})

const escuelaDeMachineLearning = new escuela({
    name: 'Escuela de machine learning',
    cantidadCursos: 80,
    temaEscuela: 'Machine Learning',
    certificado: 'Certificado oficial de la escuela de machine learning',
    cursos: [cursoProgBasica, cursoPOO]
})



const Santiago = new BasicStudent({

    name: 'Edier Gama',
    email: 'ediersantiago7@gmail.com',
    userName: 'edier_gama',
    instagram: 'edier_gama',
    twitter: 'edier_gama',
    facebook: undefined,
    cursosAprobados: 
    [
       'Curso de analisis de negocios para ciencia de datos',
       'Curso profesional de python'
    ],
    escuelasDeApredizaje: 
    [
        escuelaDeDesarrolloWeb,
        escuelaDeMachineLearning
    ]


})

Santiago['´pl']