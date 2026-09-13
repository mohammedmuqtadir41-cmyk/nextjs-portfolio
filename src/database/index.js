import mongoose from 'mongoose';

export default async function connectToDB(){
    try {
        await mongoose.connect(process.env.mongoURL)
        console.log('Connected to DB🚀')
    } catch (error) {
        console.log('Connection to DB failed⛔',error)
    }
}

//25:00