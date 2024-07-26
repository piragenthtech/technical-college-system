import axois from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
// import NavBar from "./components/NavBar";

function App() {
  const apiCall = () => {
    axois.get("http://localhost:8080/").then((a) => {
      console.log(a);
    });

    axois.get("http://localhost:8080/students").then((e) => {
      console.log(e);
    });
  };
  return (
    <>
      <Header />
      <button onClick={apiCall}>Make api call</button>
      {/* <NavBar />  */}
      <Routes>
        <Route path="/Students" element={<StudentForm/>} />
      </Routes>
    </>
  );
}

export default App;
