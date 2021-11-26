import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Hola(Nombre : String!): String
        Cursos : [Curso]
    }

    type Mutation {
        AgregarCurso(input : CursoInput): Curso
    }

    type Curso {
        id: ID,
        nombre: String,
        lenguaje: String,
        fecha: String,
    } 

    input CursoInput {
        id: ID,
        nombre: String,
        lenguaje: String,
        fecha: String,
    }
`;

export default makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers : resolvers
})