import { cursos } from "../data/cursos"
import Curso from "../models/Curso";

export const resolvers = {
    Query : {
        Hola : (parent, args) => {
            return "Hola " + args.Nombre 
        },
        Cursos() {
            return Curso.find();
        }
    },
    Mutation : {
        async AgregarCurso(_, {curso}){
           /* const nCurso = new Curso({
                nombre: curso.nombre,
                lenguaje: curso.lenguaje,
                fecha: curso.fecha,
            });*/
            const nCurso = new Curso(curso);
            return await nCurso.save();
        }
    }
}