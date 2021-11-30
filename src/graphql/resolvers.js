import { cursos } from "../data/cursos"
import Curso from "../models/Curso";
import Usuario from "../models/Usuario";
import bcryp from "bcrypt";

export const resolvers = {
    Query : {
        Hola : (parent, args) => {
            return "Hola " + args.Nombre 
        },
        Cursos() {
            return Curso.find();
        },
        async Login(_, {email, password}) {
            
            const usuario = await Usuario.findOne({
                email
            })
            if (!usuario){
                return "Usuario o contraseña incorrecto";
            }
            
            const validarPassword = bcryp.compareSync(password, usuario.password)
            if (validarPassword){
                return "Exitoso";
            }
            else {
                return "Usuario o contraseña incorrecto";
            }
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
        },
        async AgregarUsuario(_, { usuario }) {            
            const salt = bcryp.genSaltSync();
            let nUsuario = new Usuario(usuario);
            nUsuario.password = bcryp.hashSync(usuario.password, salt);
            return await nUsuario.save();
        }
    }
}