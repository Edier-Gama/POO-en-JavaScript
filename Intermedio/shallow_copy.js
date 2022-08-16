// En Js hay dos memorias, la Stack y la Heap. Las variables se guardan
// en la memoria Stack, la cual es más rápida y cuando las guardamos
// no se guardan en el mismo lugar de memoria. PERO LOS OBJETOS SON DISTINTOS
// No se pueden crear  'instancias de objetos' ya que el apuntador de un objeto 
// siempre es el mismo, esto se debe a la memoria HEAP

const luis = {
  name: 'Luis',
  email: 'pricesopro@gmail.com',
  age: 18
}

const edier = luis

// Al editar edier tambien se modificará luis, ya que apuntan a los mismos espacios
// en la memoria heap


// El shallow copy es una técnica para copiar objetos sin modificar el molde

const objeto1 = {
    a: 'a',
    b: 'b'
}

// Pero estos métodos generan problemas ya que cuando editamos
// objetos dentro de objetos los valores cambiarán en los dos.

const objeto2 = Object.create(objeto1)

// JSON.stringify - JSON.parse


const stringObjeto3 = JSON.stringify(objeto1) // Esto convierte los objetos en un string

const objeto3 = JSON.parse(stringObjeto3) // Este pasa los strings a objetos 


