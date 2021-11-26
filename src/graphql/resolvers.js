import { cursos } from "../data/cursos"

export const resolvers = {
    Query : {
        Hola : (parent, args) => {
            return "Hola " + args.Nombre 
        },
        Cursos() {
            return cursos;
        }
    },
    Mutation : {
        AgregarCurso(_, {input}){
            return input;
        }
    }
}