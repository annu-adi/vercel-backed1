import mongoose from "mongoose";



   export const dbConnection=()=>{
    mongoose.connect('mongodb+srv://rashmi:<db_password>@cluster0.pszpa.mongodb.net/?appName=Cluster0').then(()=>{
        console.log("Db Connected");

    }).catch((error)=>{
       console.log(error);
   })
    
}
