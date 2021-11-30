import { Schema, model } from "mongoose";
const CursoSchema = Schema({
    nombre: { type: String, required: true },
    lenguajes: [{
        lenguaje: String
    }],
    fecha: { type: String, required: true },
})
export default model("Curso", CursoSchema);