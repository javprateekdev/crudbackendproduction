import mongoose from 'mongoose';

const Connection=async(URL)=>{
    
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
       console.log("database connected succesfuly")

    }catch(error){
        console.log('error while connecting database',error)

    }
}

export default Connection;