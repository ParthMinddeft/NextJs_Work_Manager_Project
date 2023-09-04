import mongoose from "mongoose"
import { User } from "@/models/user"

export const connectDB = async() => {
  try {
    const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
      dbName:'work_manager',
    })
    console.log("db connected")

    // const user = new User({
    //   name:'test name',
    //   email:'test@gmail.com',
    //   password:'testpassword',
    //   about:'this is testing'
    // })

    // await user.save()

    console.log('user is created')

    console.log(connection.host)
  } catch (error) {
    console.log("Connection Failed")
    console.log(error)
  }
}