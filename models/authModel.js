import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name : {type : String, required: true, trim: true},
    email : {type: String , required: true},
    password : {type: String , required: true},
    tc: {type: Boolean, required: false}
});

const authModel = new mongoose.model("auth", authSchema);

export default authModel;