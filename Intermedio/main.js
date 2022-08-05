// Vamos a meternos de fondo en los objetos usando el super prototipo Object con métodos estáticos


const juan = {
    name: 'Juanito',
    age: 20,
    approvedCourses: ['Cursp 1'],
    addCourse(newCourse){
         this.approvedCourses.push(newCourse)    
    }

}

// Para acceder a Object solo debemos usar Object. (Método)

// Estos nos devuelven las llaves de nuestro objeto literal

// console.log(Object.keys(juan))
// console.log(Object.getOwnPropertyNames(juan))

// // Para entrar a un elemento de un array en especifico se usa [pocision]
// // al terminar los paréntesis de entries

// console.log(Object.entries(juan))

// Cuando accedemos a entries una funcion array mediante entries ya no podremos tener
// acceso a los valores fuera de la función, esto es debido al scope

// console.log(Object.entries(juan)[3][1]('Este codigo no tiene acceso a approvedCourses'))

// Este método lo que retorna son las llaves de nuestro objeto y algunas propiedades modificables

// console.log(Object.getOwnPropertyDescriptors(juan))

// Para definir nuevas propiedades sin hacer el tipico objeto.nuevapropiedad = ...podemos hacer

Object.defineProperty(juan, 'pruebaNASA', {
    value: 'Extraterrestre',
    writable: true,
    configurable: true,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptors(juan))
