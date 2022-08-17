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

    return {
       name,
       age,
       email,
       learningPaths: [],
       approvedCourses: [],
       socialMedia: {
        twitter,
        instagram,
        github,
       }
    }
}

const juan = createStudent({
    name: 'Juanito',
    age: 19,
    email: 'juanito@frijolitos.com'
})