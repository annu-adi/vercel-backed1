import mongoose from "mongoose";



   export const dbConnection = async () =>{
    try{
     await mongoose.connect("mongodb://rashmi:rashmi123@cluster0-shard-00-00.pszpa.mongodb.net:27017,cluster0-shard-00-01.pszpa.mongodb.net:27017,cluster0-shard-00-02.pszpa.mongodb.net:27017/portal?ssl=true&replicaSet=atlas-cfodzj-shard-0&authSource=admin&appName=Cluster0

FRONTEND_URL=https://vercel-fronted1.vercel.app)
     console.log("DB connected")   
    }catch(error){
        console.log("db error")
    }
}
