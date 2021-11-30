import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Hola(Nombre : String!): String
        Cursos : [Curso]
    }

    type Mutation {
        AgregarCurso(curso : CursoInput): Curso
    }

    type Curso {
        id: ID,
        nombre: String,
        lenguajes: [Lenguaje],
        fecha: String,
    } 

    type Lenguaje {
        lenguaje: String
    }

    input CursoInput {
        nombre: String,
        lenguajes: [LenguajeInput],
        fecha: String,
    }

    input LenguajeInput {
        lenguaje: String
    }
`;

export default makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers : resolvers
})