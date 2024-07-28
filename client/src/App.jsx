import axois from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
// import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Students" element={<StudentForm/>} />
      </Routes>
    </>
  );
}

export default App;
