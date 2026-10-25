import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    studentNumber: String,
    course: String
});

const Student = mongoose.model("STudent", studentSchema)

export default Student;