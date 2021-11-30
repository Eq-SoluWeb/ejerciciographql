import mongoose from "mongoose";
export const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://misiontic2022_1:SoluWeb2022@cluster0.rjlj0.mongodb.net/graphql2");
        console.log("base conectada")

    } catch (error) {
        console.log(error)

    }
}