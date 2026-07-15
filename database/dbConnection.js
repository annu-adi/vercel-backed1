import mongoose from "mongoose";



 import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
       // dbName:"MERN_STCK_HOSPITAL_MANAGEMENT_SYSTEM"
       dbName:"portal"
       serverSelectionTimeoutMS:5000,
       socketTimeoutMS:45000,
    }).then(()=>{
        console.log("Connection to database!")
    }).catch((err) => {
        console.log(`Some error occured while connecting to database:${err}`);
    });
}
