import mongoose from "mongoose";



   export const dbConnection=()=>{
    mongoose.connect('mongodb+srv://rashmi:rashmi123@cluster0.pszpa.mongodb.net/portal?appName=Cluster0',
                    serverSelectionTimeoutMS:5000,
                    socketTimeoutMS:45000,
       ).then(()=>{
        console.log("Db Connected");

    }).catch((error)=>{
       console.log(error);
   })
    
}
