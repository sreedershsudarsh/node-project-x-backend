import mongoose from "mongoose";


export const dbConnect = async() => {
   try {
    mongoose.connect('mongodb+srv://sreedershsudarsh704:dyqN6JfKzdgKDHKO@cluster0.rdzqizq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('Db Connected')
   } catch (err){
  console.log('error:',err)
  process.exit(1)
   }
}