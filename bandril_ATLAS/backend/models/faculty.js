import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    name: String,
    facultyNumber: String,
    course: String
});

const Faculty = mongoose.model("Faculty", facultySchema)

export default Faculty;