const luis = {
    name: 'Luis',
    email: 'pricesopro@gmail.com',
    age: 18,
    redes: {
        twitter: 'luis Tc',
        facebook: undefined
    },

    editName() {
      this.name = prompt('New name:')
    }
  }
  

  function isObject(subject) {
    return typeof subject == 'object'
  }
  
  function isArray(subject) {
    return Array.isArray(subject)
  }

  function deepCopy(subject){
     let copySubject
      
     const subjectIsArray = isArray(subject)
     const subjectIsObject = isObject(subject)

     if (subjectIsArray){

        copySubject = []

     } else if (subjectIsObject){

        copySubject = {}

     } else{
        
        return subject
     }

     for(key in subject){

       const keyIsObject = isObject(subject[key])

       if (keyIsObject){
         copySubject[key] = deepCopy(subject[key])
       } else {
         if (subjectIsArray){
            copySubject.push(subject[key])
         } else {
            copySubject[key] = subject[key]
         }
       }

     }

     return copySubject
  }


  const studentBase = {
   name: undefined,
   email: undefined,
   age: undefined,
   approvedCourse: undefined,
   learningPaths: undefined,
   socialMedia:{
      twitter: undefined,
      instagram: undefined,
      github:undefined
   }

  }

  const juan = deepCopy(studentBase)

  Object.seal(juan)
  Object.defineProperty(juan, 'name', {
   value: 'Juanito',
   configurable: false,
  })

  Object.isSealed(juan) // Verifica que ninguna propiedad se pueda eliminar
  Object.isFrozen(juan) // Verifica que ninguna propiedad se pueda ni editar ni eliminar