function requiredParam(param){
    throw new Error(param + ' es obligatorio')
}

function createLearningPaths({

    name = requiredParam('name'),
    courses = []
   
   }) 
   {
   
     const private = {
       '_name': name,
       '_courses': courses,
     }
     
     const public = {
       get course() {
           return private['_name']
        },

     }  
   
   }




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
        '_learningPaths': learningPaths
    }
    
    const public = {
     age,
     email,
     twitter,
     instagram,
     github,
     approvedCourses,

    get name() {
        return private['_name']
     },

    set name(newName){
        
        if (newName.length < 3){
            console.warn('Tu nombre debe tener minimo 3 caracteres')
        } else {
            private['_name'] = newName
        }
     },


    get learningPaths() {
        return private['_learningPaths']
     },

    set learningPaths(newLPName){
        
        if (newLPName.length < 3){
            console.warn('debe tener minimo 3 caracteres')
        } else {
            private['_learningPaths'] = learningPaths.push(newLPName)
        }
     }
    }

    return public

}


const juan = createStudent({
    name: 'Juanito',
    age: 19,
    email: 'juanito@frijolitos.com',
})