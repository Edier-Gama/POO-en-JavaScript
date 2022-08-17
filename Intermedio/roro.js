// RORO - Recibe un Objeto, Retorna otro Objeto

function createStudent({
    name,
    age,
    email,
    twitter,
    instagram,
    github,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    

    const private = {
        '_name': name,
    }
    
    const public = {
     age,
     email,
     twitter,
     instagram,
     github,
     approvedCourses,
     learningPaths,

     changeName(name){
        private['_name'] = name
     },
     
     readName(){
        return private['_name']
     },

    }

    Object.defineProperty(public, 'readName', {
        writable: false,
        configurable: false
    })

    Object.defineProperty(public, 'changeName', {
        writable: false,
        configurable: false
    }) 
    return public

}

const juan = createStudent({
    name: 'Juanito',
    age: 19,
    email: 'juanito@frijolitos.com',
})

Object.defineProperty(juan, 'name', {
    writable: false
})