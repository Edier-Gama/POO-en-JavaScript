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