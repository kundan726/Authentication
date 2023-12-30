import mongoose from "mongoose";

const connectDB = async (DB_URL) => {
    try {
        const DB_OPTIONS = {
            dbName : 'Authentication'
        }
        await mongoose.connect(DB_URL,DB_OPTIONS);
        console.log("DB Donnected")
    } catch (error) {
        console.log("Error in DB connection",error)
    }
}

export default connectDB;