import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


async function connectDB(){
    // const url = 'mongodb://localhost:27017/duanbandienthoai'
   const url = 'mongodb+srv://khacduy:0989620829@cluster0.aytlx3u.mongodb.net/shop?retryWrites=true&w=majority'
    
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;