import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentGet from "./components/StudentGet";
// import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Students" element={<StudentForm />} />
        <Route path="/StudentsGet" element={<StudentGet />} />
      </Routes>
    </>
  );
}

export default App;
