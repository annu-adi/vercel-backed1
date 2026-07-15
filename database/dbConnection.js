import mongoose from "mongoose";



// import mongoose from "mongoose";

export const dbConnection = ()=>{
   mongoose.connect(mongodb+srv://rashmi:rashmi123@cluster0.pszpa.mongodb.net/portal?appName=Cluster0,{
      //  dbName:"MERN_STCK_HOSPITAL_MANAGEMENT_SYSTEM"
       dbName:"portal"
       serverSelectionTimeoutMS:5000,
       socketTimeoutMS:45000,
    }).then(()=>{
        console.log("Connection to database!")
    }).catch((err) => {
        console.log(`Some error occured while connecting to database:${err}`);
    });
}
//export const dbConnection=()=>{
  //  mongoose.connectmongodb+srv://rashmi:rashmi123@cluster0.pszpa.mongodb.net/portal?appName=Cluster0').then(()=>{
      //  console.log("Db Connected");

  //  }).catch((error)=>{
      // console.log(error);
  // })
    
//}
