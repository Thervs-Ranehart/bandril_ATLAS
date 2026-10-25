import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/students">Students</Link>
            <Link to="/teachers">Teachers</Link>
            <Link to="/addstudent">Add Student</Link>
        </nav>
    );
}