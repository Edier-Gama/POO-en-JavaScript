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

console.log(Object.keys(juan))
console.log(Object.getOwnPropertyNames(juan))

// // Para entrar a un elemento de un array en especifico se usa [pocision]
// // al terminar los paréntesis de entries

console.log(Object.entries(juan))

// Cuando accedemos a entries una funcion array mediante entries ya no podremos tener
// acceso a los valores fuera de la función, esto es debido al scope

console.log(Object.entries(juan)[3][1]('Este codigo no tiene acceso a approvedCourses'))

// Este método lo que retorna son las llaves de nuestro objeto y algunas propiedades modificables

console.log(Object.getOwnPropertyDescriptors(juan))

// Para definir nuevas propiedades sin hacer el tipico objeto.nuevapropiedad = ...podemos hacer



Object.defineProperty(juan, 'pruebaNASA', {
    value: 'Extraterrestres',
    writable: false,
    configurable: false,
    enumerable: false
})

Object.defineProperty(juan, 'navigator', {
    value: 'Chrome',
    writable: true,
    configurable: true,
    enumerable: false
})

Object.defineProperty(juan, 'editor', {
    value: 'VS Code',
    writable: false,
    configurable: true,
    enumerable: true
})

Object.defineProperty(juan, 'terminal', {
    value: 'WindowsTerminal',
    writable: true,
    configurable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptors(juan))


// CON ENUMERABLE EN FALSE NO PODEMOS ACCEDER A LA PROPIEDAD CON KEYS

// CON WRITABLE EN FALSE LA PROPIEDAD NO SE PUEDE CAMBIAR A OTRO VALOR

// CON CONFIGURABLE EN FALSE NO PODREMOS ELIMINAR LA PROPIEDAD



Object.seal(juan) // NO SE PUEDEN BORRAR ATRIBUTOS, CONFIGURABLE SIEMPRE SERÁ FALSE
Object.freeze(juan)  // NO SE PUEDEN BORRAR NI EDITAR ATRIBUTOS